@(page: model.Page)(implicit request: RequestHeader)
@import common.{Edition, StringEncodings}
@import conf.Static
@import play.api.libs.json.Json

var isModernBrowser =
    "querySelector" in document
    && "addEventListener" in window
    && "localStorage" in window
    && "sessionStorage" in window
    && "bind" in Function
    && (
        ("XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest())
        || "XDomainRequest" in window
    );

window.guardian = {
    isModernBrowser : isModernBrowser,
    isEnhanced:
        window.shouldEnhance && isModernBrowser,
    css: {
        loaded: false
    },
    adBlockers: {
        active: undefined,
        onDetect: []
    },
    config: @defining(Edition(request)) { edition => {
        "page": @JavaScript(StringEncodings.jsonToJS(Json.stringify(JavaScriptPage.get(page)))),
        "switches" : { @{JavaScript(conf.switches.Switches.all.filter(_.exposeClientSide).map{ switch =>
            s""""${CamelCase.fromHyphenated(switch.name)}":${switch.isSwitchedOn}"""}.mkString(","))}
        },
        "tests": { @JavaScript(mvt.ActiveTests.getJavascriptConfig) },
        "modules": { },
        "stylesheets": {
            "fonts": {
                "hintingCleartype": {
                    "kerningOn": "@Static("stylesheets/webfonts-hinting-cleartype-kerning-on.css")"
                },
                "hintingOff": {
                    "kerningOn": "@Static("stylesheets/webfonts-hinting-off-kerning-on.css")"
                },
                "hintingAuto": {
                    "kerningOn": "@Static("stylesheets/webfonts-hinting-auto-kerning-on.css")"
                }
            }
        },
        "commercial": {
            "showingAdfree" : undefined
        }
    }}
};

// http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
/*@@cc_on
@@if (@@_jscript_version <= 9)
    guardian.config.page.ajaxUrl = guardian.config.page.ajaxUrl.replace(/^https:/, '');
@@end
@@*/
