define(function () {
    return get1;

    // (Foldable M) => String -> M Document|Element -> M Element
    function get1(selector, root) {
        if (root) {
            return root.reduce(function (acc, v) {
                return acc.concat(get1_(selector, v));
            }, []);
        } else {
            return get1_(selector, document);
        }
    }

    // String -> Document|Element -> Maybe Element
    function get1_(selector, root) {
        var n = root.querySelector(selector);
        return n ? [n] : [];
    }
});
