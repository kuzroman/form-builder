import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

import {data} from 'Data/json-fake';

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement('div', {}, [
            'Какой-то текст, идущий первым.',
            createElement('h1', 'Заголовок'),
            createElement('sum', {
                props: {
                    items: data.items
                }
            }),
            createElement('input-field', {
                props: {
                    id: 'name',
                    label: 'Person name',
                    placeholder: 'Enter a name',
                    icon: 'icon-people',
                    initialValue: 'John Doe'
                }
            }),
            createElement('switch-field', {
                props: {
                    id: 'homeless',
                    label: 'I am homeless',
                    initialState: true
                }
            }),
            createElement('select-field', {
                props: {
                    id: 'select-one',
                    label: 'select sample',
                    selected: 'Б',
                    options: [
                        {text: 'Один', value: 'А'},
                        {text: 'Два', value: 'Б'},
                        {text: 'Три', value: 'В'}
                    ]
                }
            })
        ])
    },
    components: {
        'sum': require('Components/form/sum/main.vue').default,
        'input-field': require('Components/form/input-field/main.vue').default,
        'switch-field': require('Components/form/switch-field/main.vue').default,
        'select-field': require('Components/form/select-field/main.vue').default,
    }
});