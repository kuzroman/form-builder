<template>
    <div class="l-content__el">
        <div>{{ label }}</div>
        <masked-input
            class="form-control"
            :name="id"
            :placeholder="placeholder"
            v-model="phone"
            :mask="mask" >
        </masked-input>
    </div>
</template>

<script>
    export default {
        name: 'phone-field',
        components: {
            'MaskedInput': require('vue-masked-input').default
        },
        props: {
            id: String,
            label: String,
            placeholder: String,
            initialValue: String,
            mask: String, // '\\+\\7(111)111-11-11'
        },
        data: function () {
            return {
                phone: this.initialValue,
            }
        },
    }
</script>

<style scoped>

</style>