<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :value="value" @input="calcTotal($event.target.value)">{{ value }}
    </div>
</template>

<script>
    export default {
        name: 'currency-input',
        props: {
            value: {type: Number},
            label: {type: String, default: ''}
        },
        methods: {
            calcTotal(value) {
                value = +value || 0;
                console.log('children calcTotal');
                this.$emit('input', value)
            }
        }
    }
</script>

<style scoped>

</style>
