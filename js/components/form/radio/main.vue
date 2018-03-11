<template>
    <div class="l-content__el">
        <div>{{ label }}</div>
        <template v-for="item in items">
            <label class="radio-inline">
                {{ item.text }}
                <input type="radio"
                       :value="item.value"
                       :name="id"
                       @change="changeValue"
                       class=""
                >
            </label>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'radio-field',
        props: {
            stepId: Number,
            id: {type: String},
            label: {type: String},
            items: Array
        },
        methods: {
            changeValue(ev) {
                this.$store.commit('setParamInForm', {stepId: this.stepId, id: this.id, key: 'value', val: ev.target.value});
            },
        }
    }
</script>

<style scoped>
label {
    margin-right: 20px;
}
input {
    margin-left: 10px;
}
</style>