define([
    'lodash/objects/assign',
    'lib/fastdom-promise',
    'commercial/modules/messenger'
], function (assign, fastdom, messenger) {
    var lengthRegexp = /^((\d+)(%|px|em|ex|ch|rem|vh|vw|vmin|vmax)?)|none|initial|inherit/;
    var defaultUnit = 'px';
    var properties = [
        'width', 'height', 'padding', 'margin',
        'paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight',
        'marginBottom', 'marginTop', 'marginLeft', 'marginRight',
        'maxWidth', 'maxHeight', 'minWidth', 'minHeight'
    ];

    messenger.register('resize', function(specs, ret, iframe) {
        return resize(specs, iframe, iframe.closest('.js-ad-slot'));
    });

    return resize;

    function resize(specs, iframe, adSlot) {
        if (!specs || !('height' in specs || 'width' in specs)) {
            return null;
        }

        var styles = {};

        Object.keys(specs).forEach(function (prop) {
            if (properties.indexOf(prop) >= 0) {
                styles[prop] = normalise(specs[prop]);
            }
        });

        return fastdom.write(function () {
            assign(adSlot.style, styles);
            assign(iframe.style, styles);
        });
    }

    function normalise(length) {
        var matches = String(length).match(lengthRegexp);
        if (!matches) {
            return null;
        }
        return matches[1] ?
            matches[2] + (matches[3] === undefined ? defaultUnit : matches[3]) :
            matches[0];
    }
});
