<template>
    <div>
        Билдер
        <div id="form-builder"></div>
        <p>Model: {{ dataSchema }}</p>
    </div>
</template>

<script>
    export default {
//        el: '#form-builder',
        name: 'form-builder',
        props: {
            schema: Object
        },
        data: function () {
            return {
                dataSchema: this.schema,
            }
        },
//        render: function (createElement) {
//            let list = createElementBuilder(createElement, this.dataSchema);
//            return createElement('div', {}, list);
//        },
        components: {
            'sum': require('Components/form/sum/main.vue').default,
            'input-field': require('Components/form/input-field/main.vue').default,
            'switch-field': require('Components/form/switch-field/main.vue').default,
            'select-field': require('Components/form/select-field/main.vue').default,
            'date-field': require('Components/form/date-field/main.vue').default,
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