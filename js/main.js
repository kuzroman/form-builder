// import {data} from 'data/json-forms';
import {data} from 'Data/json-fake';
// import Datepicker from 'vuejs-datepicker';
// import currencyInput from "components/form/currency-input.vue";
// import inputString from "components/form/input-string.vue";

class App {
    constructor(mountPoint, data) {
        this.mountPoint = mountPoint;
        // this.rawData = data;
        // console.log('constructor', this.rawData, data);
    }

    run() {
        // this.viewData = this.createViewData();
        console.log('data.items', data.items);

        new Vue({
            el: this.mountPoint,
            // data: this.rawData,
            // data: function() {
            //     return {
            //         items: data.items, // массив объектов
            //     }
            // },
            // render: h => h('sum', {}, this.buildComponents(h)),
            template: '<sum></sum>',
            components: {
                // Datepicker,
                sum: require('Components/form/sum/main.vue').default,
                // inputString
                // inputField: require('./components/form/input-field/main.vue').default,
            }
        });
    }

    // buildComponents(h) {
    //     let components = data.items.map(d => this.buildComponent(d, h));
    //     console.log('buildComponents', components);
    //     return components;
    // }

    // buildComponent(d, h) {
    //     // const app = this;
    //     console.log('d', d);
    //     const props = d;
    //     props.app = this;
    //
    //     const on = {
    //         // validation: function (e, component) {
    //         //     // props.errors = app.validators.get(d.id).map(v => v.validate(component.value)).filter(r => r !== null);
    //         //     let validate = app.validators.get(d.id);
    //         //     console.log('d.id', d.id, app.validators.get(d.id), validate);
    //         //     props.errors = validate.map(function (v) {
    //         //         // console.log(v.validate(component.value));
    //         //         v.validate(component.value);
    //         //     }).filter(function (r) {
    //         //         return r !== null;
    //         //     });
    //         // }
    //     };
    //     // console.log('buildComponent', d.type, {props, on});
    //     console.log('buildComponent');
    //     return h(d.type, {props, on});
    // }

    // createViewData() {
    //     const viewData = {};
    //
    //     console.log(this.rawData);
    //
    //     this.rawData.forEach(d => {
    //         viewData[d.id] = {
    //             id: d.id,
    //             type: d.type,
    //             props: d.props
    //         };
    //     });
    //
    //     return viewData;
    // }
}

console.log('data', data);
const app = new App('#app', data);
app.run();