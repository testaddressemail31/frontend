import reqwest from 'reqwest';
import config from '../../../../javascripts-legacy/projects/common/utils/config';
import raven from '../../../../javascripts-legacy/projects/common/utils/raven';
    // This should no longer be used.
    // Prefer the new 'common/utils/fetch' or 'common/utils/fetch-json' library instead, which are es6 compliant.
let ajaxHost = config.page.ajaxUrl || '';

function ajax(params) {
    const reqParams = { ...params };

    if (!reqParams.url.match('^(https?:)?//')) {
        reqParams.url = ajaxHost + reqParams.url;
        reqParams.crossOrigin = true;
    }

    const r = reqwest(reqParams);
    raven.wrap({ deep: true }, r.then);
    return r;
}

ajax.setHost = (host) => { ajaxHost = host; };

export default ajax;

