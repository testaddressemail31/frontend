define([
    'lib/dom',
    'lib/complement'
], function (dom, complement) {
    return bonzo;

    // Foldable A, Iterable A, Functor A
    // bonzo(a : A<Element>) : Bonzo
    function bonzo(a) {
        var o = Object.freeze({
            addClass: function(c) {
                a.forEach(dom.addClass.bind(null, c));
                return o;
            },

            removeClass: function(c) {
                a.forEach(dom.removeClass.bind(null, c));
                return o;
            },

            hasClass: function(c) {
                return !a.any(complement(dom.hasClass.bind(null, c)));
            },

            toggleClass: function(c) {
                a.forEach(dom.toggleClass.bind(null, c));
                return o;
            },

            css: function(r, v) {
                a.forEach(dom.css.bind(null, r, v));
                return o;
            },

            html: function(h) {
                a.forEach(dom.html.bind(null, h));
                return o;
            },

            text: function(t) {
                a.forEach(dom.html.bind(null, t));
                return o;
            },

            parent: function() {
                return bonzo(a.map(dom.parent));
            },

            before: function(s) {
                a.forEach(dom.before.bind(null, s));
                return o;
            },

            after: function(s) {
                a.forEach(dom.after.bind(null, s));
                return o;
            },

            append: function(c) {
                a.forEach(dom.append.bind(null, c));
                return o;
            },

            prepend: function(c) {
                a.forEach(dom.prepend.bind(null, c));
                return o;
            },

            beforeText: function(s) {
                a.forEach(dom.beforeText.bind(null, s));
                return o;
            },

            afterText: function(s) {
                a.forEach(dom.afterText.bind(null, s));
                return o;
            },

            appendText: function(c) {
                a.forEach(dom.appendText.bind(null, c));
                return o;
            },

            prependText: function(c) {
                a.forEach(dom.prependText.bind(null, c));
                return o;
            },

            beforeHtml: function(s) {
                a.forEach(dom.beforeHtml.bind(null, s));
                return o;
            },

            afterHtml: function(s) {
                a.forEach(dom.afterHtml.bind(null, s));
                return o;
            },

            appendHtml: function(c) {
                a.forEach(dom.appendHtml.bind(null, c));
                return o;
            },

            prependHtml: function(c) {
                a.forEach(dom.prependHtml.bind(null, c));
                return o;
            },

        });

        return o;
    }
});
