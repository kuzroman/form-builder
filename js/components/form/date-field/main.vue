<template>
    <div class="l-content__el">
        <div>{{ label }}
            <datepicker
                    input-class="form-control"
                    :placeholder="placeholder"
                    :disabled="state.disabled"
                    v-model="dataValue">
            </datepicker>
        </div>
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
            console.log('date mounted');
        },
        methods: {
            disableTo() {
                return new Date(2018, 2, 5);
            }
        }
    }
</script>

<style scoped>

</style>