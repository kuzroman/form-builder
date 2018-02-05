import {data} from './json.js'; // todo нужно пробросить через json

import {checkValid} from './blocks/validate/main';
// require("../css/main.scss");
console.log(data.items);

let radioTmpl = require('./tmpls/radio/main.twig');
// console.log( radioTmpl({message: 'cupcake'}) );


$(function () {

    let items = data.items;
    let $form = $('.js-form');

    for (let i in items) {
        let obj = items[i];
        if (obj.type === 'html') {
            createText(obj);
        } else if (obj.type === 'string') {
            createInput(obj);
        } else if (obj.type === 'radio') {
            console.log('radio');
            createRadio(obj);
        }
    }

    function createText(obj) {
        let $content = $('<div>').html(obj.content);
        $form.append($content);
    }

    function createInput(obj) {
        obj.$el = $('<input>', {
            'class': 'form-control', name: obj.name, value: obj.value
        }).data({obj: obj});
        if (obj.validation) {
            checkValid(obj);
        }
        $form.append(obj.$el);
    }

    function createRadio(obj) {
        let html = radioTmpl(obj);
        $form.append(html);
    }

});