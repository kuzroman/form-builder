import Vue from 'vue'

import {jsonForms} from 'Data/json-forms';

new Vue({
    el: '#app',
    // render: function (createElement) {
    //     let list = createElementBuilder(createElement, this.model);
    //     return createElement('div', {}, list);
    // },
    data: {
        schema: jsonForms
    },
    components: {
        'form-builder': require('Components/form-builder.vue').default,
    },
    // render: function (createElement) {
    //     return createElement('div', {
    //     }, [
    //         createElement('form-builder', {
    //             // props: {
    //             //     props: 'foobar'
    //             // }
    //         })
    //     ]);
    // },
});