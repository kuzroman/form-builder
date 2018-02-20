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
            })
        ])
    },
    components: {
        'sum': require('Components/form/sum/main.vue').default
    }
});