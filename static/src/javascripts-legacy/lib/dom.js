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
        before: before,
        after: after,
        prepend: prepend,
        append: append,
        beforeText: beforeText,
        afterText: afterText,
        prependText: prependText,
        appendText: appendText,
        beforeHtml: beforeHtml,
        afterHtml: afterHtml,
        prependHtml: prependHtml,
        appendHtml: appendHtml
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

    function before(s, n) {
        n.insertAdjacentElement('beforebegin', s);
    }

    function after(s, n) {
        n.insertAdjacentElement('afterend', s);
    }

    function append(c, n) {
        n.insertAdjacentElement('beforeend', c);
    }

    function prepend(c, n) {
        n.insertAdjacentElement('afterbegin', c);
    }

    function beforeText(t, n) {
        n.insertAdjacentText('beforebegin', t);
    }

    function afterText(t, n) {
        n.insertAdjacentText('afterend', t);
    }

    function appendText(t, n) {
        n.insertAdjacentText('beforeend', t);
    }

    function prependText(t, n) {
        n.insertAdjacentText('afterbegin', t);
    }

    function beforeHtml(h, n) {
        n.insertAdjacentHTML('beforebegin', h);
    }

    function afterHtml(h, n) {
        n.insertAdjacentHTML('afterend', h);
    }

    function appendHtml(h, n) {
        n.insertAdjacentHTML('beforeend', h);
    }

    function prependHtml(h, n) {
        n.insertAdjacentHTML('afterbegin', h);
    }
});
