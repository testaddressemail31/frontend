define(function () {
    return {
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        parent: parent,
        html: html,
        text: text,
        css: css
    };

    function addClass(c, e) {
        e.classList.add(c);
    }

    function removeClass(c, e) {
        e.classList.remove(c);
    }

    function hasClass(c, e) {
        return e.classList.contains(e);
    }

    function toggleClass(c, e) {
        return e.classList.toggle(c);
    }

    function parent(e) {
        return e.parentNode;
    }

    function css(r, v, e) {
        e.style[r] = v;
    }

    function html(h, e) {
        e.innerHTML = h;
    }

    function text(t, e) {
        e.textContent = t;
    }
});
