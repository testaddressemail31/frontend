import template from 'lib/template'
import * as t from 'raw-loader!common/views/report-me.html'
import * as ty from 'raw-loader!common/views/report-me-tyvm.html'
export default {
    init: () => {
        let form = document.createElement('div');


        let paras = [... document.querySelectorAll('.js-article__body > p')];
        paras.map((p)=>{
            let hide = () => {
                form.remove()
            };
            let show = () => {
                form.innerHTML =  t.default;
                let input = form.querySelector('.js-report-me-input');
                let submit = form.querySelector('.js-report-me-button');
                p.appendChild(form);
                submit.addEventListener('click',()=>{
                    console.log(input.value);
                    console.log(ty.default)
                    form.innerHTML = ty.default;
                });
            };
            let button = document.createElement('div');
            button.classList.add('report-me');
            button.appendChild(document.createTextNode('🐙'));
           p.addEventListener('mouseover',(e)=>{
               p.appendChild(button);
           });
            p.addEventListener('mouseout',(e)=>{
            });

            button.addEventListener('click',(e)=>{
                if(form.parentNode == p){
                    hide()
                } else {
                    show()
                }
            })
        });
    }
}
