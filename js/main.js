import Vue from 'vue'
let model = require('Data/json-forms').default;
let store = require('Js/store').default;
// import hp from 'Js/helper'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// let bus = new Vue();

new Vue({
    el: '#form-builder',
    store: store.getStore(model),
    render: function (createElement) {
        let list = this.createElementBuilder(createElement);
        return createElement('div', {}, list);
    },
    components: {
        'form-builder': require('Components/form/builder/main.vue').default,
        'blocks-steps': require('Components/blocks/steps/main.vue').default,
    },
    methods: {
        createElementBuilder(createElement) {
            let list = [];
            let steps = model.steps;

            for (let key in steps) {
                list.push(createElement('form-builder', {props: steps[key]}));
            }

            list.push(createElement('blocks-steps', {props: {
                steps: model.steps
            }}));
            return list;
        }
    }
});