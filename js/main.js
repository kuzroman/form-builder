import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import hp from 'Js/helper'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// let bus = new Vue();

import {jsonForms} from 'Data/json-forms';
let model = hp.createViewData(jsonForms);


const store = new Vuex.Store({
    state: {
        model: model,
    },
    mutations: {
        setParam (state, obj) { // obj = {id, key, val}
            // console.log(state, obj);
            state.model[obj.id].props[obj.key] = obj.val;
        }
    }
});


new Vue({
    el: '#form-builder',
    store,
    render: function (createElement) {
        let self = this;
        let list = this.createElementBuilder(createElement);
        return createElement('div', {}, list);
    },
    data: {
        model: model
    },
    components: {
        // 'sum': require('Components/form/sum/main.vue').default,
        'input-field': require('Components/form/input-field/main.vue').default,
        'switch-field': require('Components/form/switch-field/main.vue').default,
        'radio-field': require('Components/form/radio-field/main.vue').default,
        'select-field': require('Components/form/select-field/main.vue').default,
        'date-field': require('Components/form/date-field/main.vue').default,
        'phone-field': require('Components/form/phone-field/main.vue').default,
    },
    methods: {
        createElementBuilder(createElement) {
            let list = [];
            let model = this.model;

            for (let key in model) {
                let props = model[key].props;
                props.id = model[key].id;
                list.push(
                    createElement(model[key].type, {
                        props: props,
                    })
                );
            }
            return list;
        }
    }
});