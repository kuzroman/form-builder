<template>
    <div>
        Шаг {{ step }}
        <div id="form-builder"></div>
    </div>
</template>

<script>
    export default {
//        el: '#form-builder',
        name: 'form-builder',
        props: {
            model: Object
        },
        data: function () {
            return {
                model: this.model,
            }
        },
        render: function (createElement) {
            let self = this;
            let list = this.createElementBuilder(createElement);
            return createElement('div', {}, list);
        },
        components: {
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
    }

    function createElementBuilder(createElement, model) {
        let list = [];
        model.forEach(function callback(value, i, arr) {

            // let props = Object.assign(value.props, {id: value.id});
            let props = model[i].props;
            props.id = model[i].id;

            // todo only test for update data between components
            if (value.id === 'calculate') {
                props = {
                    mainModel: model,
                    model: model[i].props
                }
            }

            list.push(
                createElement(value.type, {
                    props: props
                })
            );
        });

        return list;
    }
</script>

<style scoped>

</style>