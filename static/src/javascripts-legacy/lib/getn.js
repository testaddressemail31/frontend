define(function () {
    return getn;

    // (Foldable M) => String -> M Document|Element -> M Element
    function getn(selector, root) {
        if (root) {
            return root.reduce(function (acc, v) {
                return acc.concat(getn_(selector, v));
            }, []);
        } else {
            return getn_(selector, document);
        }
    }

    // String -> Document|Element -> [Element]
    function getn_(selector, root) {
        return Array.prototype.slice.call(root.querySelectorAll(selector));
    }
});
