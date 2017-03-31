define(function () {
    return {
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        parent: parent,
        html: html,
        text: text,
        css: css,
        insertBefore: insertBefore,
        insertAfter: insertAfter,
        prepend: prepend,
        append: append
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

    function insertBefore(s, n) {
        n.insertAdjacentElement('beforebegin', s);
    }

    function insertAfter(s, n) {
        n.insertAdjacentElement('afterend', s);
    }

    function append(c, n) {
        n.insertAdjacentElement('beforeend', c);
    }

    function prepend(c, n) {
        n.insertAdjacentElement('afterbegin', c);
    }
});
