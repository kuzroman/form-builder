<template>
    <div>
        Сумма
        <template v-for="item in dataItems">
            <currency-input v-model="item.value" :name="item.name" ></currency-input>
        </template>
        <p>Total: ${{ total }}</p>
    </div>
</template>

<script>
    export default {
        name: 'sum',
        props: {
            items: {type: Array}
        },
        data: function () {
            return {
                dataItems: this.items,
            }
        },
        components: {
            currencyInput: require('Components/form/sum/currency-input.vue').default,
        },
        computed: {
            total() {
                console.log('parent computed total');
                let total = 0;
                for (let i in this.dataItems) {
                    total += +this.dataItems[i].value;
                }
                return total;
            }
        }
    }
</script>

<style scoped>

</style>