<template>
    <div class="l-content__el">
        <div>{{ label }}</div>
        <input :name="id" type="checkbox"
               :checked="isChecked"
               @change="changeSwitch"
        />
        <p>{{ isChecked ? 'да' : 'нет' }}</p>
    </div>
</template>

<script>
    export default {
        name: 'checkbox-field',
        props: {
            id: {type: String},
            label: {type: String},
        },

//        created () {
//            let model = this.$store.state.model;
//            for (let i in model) {
//                if (model[i].id === this.id) {
//                    console.log(model[i].id , this.id, model[i].props.isChecked);
//                    return model[i].props.isChecked;
//                }
//            }
//        },

        computed: {
            isChecked () {
                let model = this.$store.state.model;
                for (let i in model) {
                    if (model[i].id === this.id) {
                        return model[i].props.isChecked;
                    }
                }
            }
        },
        methods: {
            changeSwitch(ev) {
                this.$store.commit('setParam', {id: this.id, key: 'isChecked', val: ev.target.checked});
                console.log('change switch', this.isChecked);
            }
        },

    }
</script>

<style scoped>

</style>