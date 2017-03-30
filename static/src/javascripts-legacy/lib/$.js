define([
    'lodash/functions/compose',
    'lib/getn',
    'lib/bonzo'
], function(compose, getn, bonzo) {
    return compose(bonzo, getn);
});
