<template>
    <div class="l-content__el">
        Сумма
        <template v-for="item in dataItems" v-if="show">
            <currency-input v-model="item.value" :name="item.name" ></currency-input>
        </template>
        <p>Total: ${{ total }}</p>
    </div>
</template>

<script>
    export default {
        name: 'sum',
        props: {
            items: {type: Array},
            depends: Object || false
        },
        data: function () {
            return {
                dataItems: this.items,
                show: null
            }
        },
        components: {
            currencyInput: require('Components/form/sum/currency-input.vue').default,
        },
        created () {
            this.show = true; // todo допустим сюда передали истинное значение из зависимостей
        },
        computed: {
            total() {
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