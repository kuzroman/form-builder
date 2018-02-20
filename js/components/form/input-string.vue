<template>
    <div>
        <input ref="input" :name="name" :value="value" autofocus="autofocus"
               v-on:input="validate($event.target.value)"
               class="form-control" :class="{'is-invalid': isValid}"
        >
    </div>
</template>

<script>
    export default {
        name: 'input-string',
        props: {
            value: {type: String, default: ''},
            name: {type: String, default: ''},
            validation: {type: Array},
        },
        data() {
            return {
                isValid: true
            }
        },
        methods: {
            validate(value) {
                for (let i in this.validation) {
                    let objRule = this.validation[i];
                    if (objRule.type === 'regex') {
                        this.checkValidByRegEx(value, objRule)
                    }
                }
            },
            checkValidByRegEx(value, objRule) {
                let regEx = new RegExp(objRule.value);
                this.isValid = regEx.test(value);
            },
        }
    }
</script>

<style scoped>

</style>
