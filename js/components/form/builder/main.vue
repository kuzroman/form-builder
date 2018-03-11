<template>
    <div>
        <template v-if="active" v-for="item in model">
            <form-input v-if="item.type === 'form-input'" :key="item.id" :stepId="item.stepId"
                         :id="item.id"
                         :label="item.label"
                         :placeholder="item.placeholder"
                         :initialValue="item.initialValue"
                         :validation="item.validation"
                         :depends="item.depends"
            ></form-input>
            <form-switch v-if="item.type === 'form-switch'" :key="item.id" :stepId="item.stepId"
                          :id="item.id"
                          :label="item.label"
                          :isChecked="item.isChecked"
            ></form-switch>
            <form-radio v-if="item.type === 'form-radio'" :key="item.id" :stepId="item.stepId"
                         :id="item.id"
                         :label="item.label"
                         :items="item.items"
            ></form-radio>
            <form-select v-if="item.type === 'form-select'" :key="item.id" :stepId="item.stepId"
                          :id="item.id"
                          :label="item.label"
                          :selected="item.selected"
                          :options="item.options"
            ></form-select>
            <form-date v-if="item.type === 'form-date'" :key="item.id" :stepId="item.stepId"
                        :id="item.id"
                        :label="item.label"
                        :placeholder="item.placeholder"
                        :value="item.value"
                        :min="item.min"
                        :max="item.max"
            ></form-date>
            <form-phone v-if="item.type === 'form-phone'" :key="item.id" :stepId="item.stepId"
                         :id="item.id"
                         :label="item.label"
                         :placeholder="item.placeholder"
                         :initialValue="item.initialValue"
                         :mask="item.mask"
            ></form-phone>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'form-builder',
        props: {
            id: Number,
            active: Boolean,
            children: Object
        },
        render: function (createElement) {
            let list = this.createElementBuilder(createElement);
            return createElement('div', {}, list);
        },
        components: {
            // 'sum': require('Components/form/sum/main.vue').default,
            'form-input': require('Components/form/input/main.vue').default,
            'form-switch': require('Components/form/switch/main.vue').default,
            'form-radio': require('Components/form/radio/main.vue').default,
            'form-select': require('Components/form/select/main.vue').default,
            'form-date': require('Components/form/date/main.vue').default,
            'form-phone': require('Components/form/phone/main.vue').default,
        },
        computed: {
            model() {
                let list = [];
                let model = this.children;

                for (let key in model) {
                    let props = model[key];
                    props.stepId = this.id;
                    list.push(props);
                }
                return list;
            }
        },
        methods: {
            createElementBuilder(createElement) {
                let list = [];
                let model = this.model;

                for (let key in model) {
                    list.push(
                        createElement(model[key].type, {
                            props: model[key]
                        })
                    );
                }
                return list;
            }
        }
    }
</script>

<style scoped>

</style>