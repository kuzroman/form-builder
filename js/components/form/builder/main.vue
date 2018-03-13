<script>
    export default {
        name: 'form-builder',
        props: {
            id: Number,
            active: Boolean,
            children: Object
        },
        render: function (createElement) {
            if (this.active) {
                let list = this.createElementBuilder(createElement);
                return createElement('div', {}, list);
            }
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