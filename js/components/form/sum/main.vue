<template>
    <div>
        <template v-for="item in items">
            <currency-input v-model="item.value" ></currency-input>
        </template>
        <p>Total: ${{ total }}</p>
    </div>
</template>

<script>
    import currencyInput from "./currency-input.vue";
    import {data} from 'Data/json-fake';

    console.log('this', this);

    export default {
        name: 'sum',
        // props: {
        //     items: {type: Array}
        // },
        data: function() {
            return {
                items: data.items,
            }
        },
        components: {
            currencyInput,
        },
        computed: {
            total () {
                console.log('parent computed total');
                let total = 0;
                for (let i in this.items) {
                    total += +this.items[i].value;
                }
                return total;
            }
        }

    }
</script>

<style scoped>

</style>