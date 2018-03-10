<template>
    <div class="l-content__el">
        {{ label }}
        <datepicker
                input-class="form-control"
                :name="id"
                :placeholder="placeholder"
                :disabled="state.disabled"
                v-model="dataValue">
        </datepicker>
        <!--<p>check bind: {{ dataValue }}</p>-->
    </div>
</template>

<script>
    export default {
        name: 'date-field',
        components: {
            'Datepicker': require('vuejs-datepicker')
        },
        props: {
            id: String,
            value: String,
            label: String,
            placeholder: String,
            min: String,
            max: String
        },
        data: function () {
            return {
                dataValue: this.value,
                state: {}
            }
        },
        mounted () {
            this.state = {
                disabled: {
                    to: new Date(this.min), // up to
                    from: new Date(this.max) // after
                }
            };
        },
    }
</script>

<style scoped>

</style>