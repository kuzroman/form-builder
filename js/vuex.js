import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
import Vuex from 'vuex'
Vue.use(Vuex);
// import { mapState } from 'vuex'
import {jsonForms} from 'Data/json-forms-short';

export default class App {
    constructor(mountPoint, model) {
        this.mountPoint = mountPoint;
        this.initedData = model;
    }

    run() {
        this.vm = new Vue({
            el: this.mountPoint,
            store,
            render: function (createElement) {
                let list = this.createElementBuilder(createElement);
                return createElement('div', {}, list);
            },
            data: {
                model: this.initedData
            },
            components: {
                'checkbox-field': require('Components/test/checkbox.vue').default,
                'input-field': require('Components/test/input.vue').default,
            },
            methods: {
                createElementBuilder(createElement) {
                    let list = [];
                    let model = this.model;
                    // console.log('model2', model);

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
    }

}


let model = createViewData(jsonForms);

function createViewData(model) {
    const viewData = {};

    model.forEach(d => {
        viewData[d.id] = {
            id: d.id,
            type: d.type,
            props: d.props
        };
    });
    return viewData;
}

const store = new Vuex.Store({
    state: {
        model: model,
    },
    mutations: {
        setParam (state, obj) { // id, key, val
            console.log(state, obj);
            state.model[obj.id].props[obj.key] = obj.val;
        }
    }
});

const app = new App('#app', model);
app.run();

console.log(app);
