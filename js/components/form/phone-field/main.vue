<template>
    <div class="l-content__el">
        <div>{{ label }}</div>
        <masked-input class="form-control" :placeholder="placeholder"
            v-model="dataPhone"
            mask="\+\7(111)111-11-11" />
    </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input';
    export default {
        name: 'phone-field',
        components: {
            MaskedInput // todo npm --save!
        },
        props: {
            id: String,
            label: String,
            placeholder: String,
            phone: String,
        },
        data: function () {
            return {
                dataPhone: this.phone
            }
        },
//        mounted () {
//        },
        methods: {
//            disableTo() {
//                return new Date(2018, 2, 5);
//            }
        }
    }
</script>

<style scoped>

</style>