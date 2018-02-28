<template>
    <div>
        <label v-if="dataName">{{ dataName }}</label>
        <input @input="calcTotal($event.target.value)" v-model="val">
        {{ val }}
    </div>
</template>

<script>
    export default {
        name: 'currency-input',
        props: {
            value: {type: Number},
            name: {type: String, default: ''}
        },
        data() {
            return {
                val: this.value,
                dataName: this.name
            }
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
