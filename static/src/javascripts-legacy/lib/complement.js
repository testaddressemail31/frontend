define(function () {
    return function (fn) {
        return function () {
            return !fn.apply(null, arguments);
        }
    }
});
