import Vue from 'vue'
let store = require('Js/store').default;
// let bus = new Vue();

export default class App {

    constructor(mount, endpoint) {
        this.mount = mount;
        this.endpoint = endpoint;
        this.fetchDataAndInitialize();
    }

    fetchDataAndInitialize() {
        // this.mount.innerText = 'Initializing...';

        window // ie11 нет поддержки!
            .fetch(this.endpoint, {cache: 'no-cache'})
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw 'Unexpected status code: ' + r.status;
            })
            .then(data => this.initialize(data))
            .catch(e => {
                this.mount.innerText = e;
            });
    }

    initialize(data) {
        new Vue({
            el: '#form-builder',
            store: store.getStore(data),
            render: function (createElement) {
                let list = this.createElementBuilder(createElement);
                return createElement('div', {}, list);
            },
            components: {
                'form-builder': require('Components/form/builder/main.vue').default,
                'blocks-steps': require('Components/blocks/steps/main.vue').default,
            },
            data() {
                return {
                    pathToJson: ''
                }
            },
            methods: {
                createElementBuilder(createElement) {
                    let list = [];
                    let steps = data.steps;

                    for (let key in steps) {
                        list.push(createElement('form-builder', {props: steps[key]}));
                    }

                    list.push(createElement('blocks-steps', {props: {
                        steps: data.steps
                    }}));
                    return list;
                }
            }
        });
    }
}