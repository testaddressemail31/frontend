import template from 'lib/template';
import * as t from 'raw-loader!common/views/report-me.html';
import * as ty from 'raw-loader!common/views/report-me-tyvm.html';
const endpoint = 'http://localhost:9990/report';
function report(comment,n){
    let path = window.location.pathname;
    fetch(endpoint, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            article: path,
            paragraph: n,
            comment: comment
        })
    })
}

export default {
    init: () => {
        const form = document.createElement('div');

        const paras = [...document.querySelectorAll('.js-article__body > p')];
        paras.map((p, n) => {
            const hide = () => {
                form.remove();
            };
            const show = () => {
                form.innerHTML = t.default;
                const input = form.querySelector('.js-report-me-input');
                const submit = form.querySelector('.js-report-me-button');
                p.appendChild(form);
                submit.addEventListener('click', () => {
                    console.log(n);
                    report(input.value,n);
                    form.innerHTML = ty.default;
                });
            };
            const button = document.createElement('div');
            button.classList.add('report-me');
            button.appendChild(document.createTextNode('🐙'));
            p.addEventListener('mouseover', e => {
                p.appendChild(button);
            });
            p.addEventListener('mouseout', e => {});

            button.addEventListener('click', e => {
                if (form.parentNode == p) {
                    hide();
                } else {
                    show();
                }
            });
        });
    },
};
