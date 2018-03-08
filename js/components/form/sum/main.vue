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
//            mainModel: {type: Array},
//            model: {type: Object},
            depends: Object || false,
        },
        data: function () {
            return {
                dataItems: this.items,
//                dataItems: this.model.items,
                show: null
            }
        },
        components: {
            currencyInput: require('Components/form/sum/currency-input.vue').default,
        },

        created () {
            let self = this;
            this.show = true; // todo допустим сюда передали истинное значение из зависимостей
//            console.log('created');
        },

//        mounted () {
//            console.log('mounted');
//        },
        computed: {
//            show() {
//                return this.mainModel[1].props.isChecked;
//            },
            total() {
//                console.log('parent computed total',
//                    this.mainModel[1].props.isChecked
//                );
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