<template>
    <div v-if="isVisible" class="l-content__el">
        <label>{{ label }}
            <input :name="id" :placeholder="placeholder"
                   v-model="value"
                   @input="inputValue"
                   class="form-control" :class="isValid"
            >
            <div v-if="errorMessage">{{ errorMessage }}</div>
        </label>
    </div>
</template>

<script>
    import hp from 'Js/helper'

    export default {
        name: 'input-field',
        props: {
            stepId: Number,
            id: String,
            label: String,
            placeholder: String,
            initialValue: String,
            validation: Array,
            depends: Object,
        },
        data: function () {
            return {
                value: this.initialValue,
                isValid: null,
                errorMessage: '',
            }
        },
        computed: {
            isVisible: function () {
                return hp.isElementInFormVisible(this.depends, this.$store, this.stepId);
            }
        },
        methods: {
            inputValue(ev) {
                this.validate();
                // todo менять при смене схемы!
                this.$store.commit('setParamInForm', {stepId: this.stepId, id: this.id, key: 'value', val: ev.target.value});
            },
            validate() {
                if (!this.validation) return;

                let rules = this.validation;

                for (let i = 0, len = rules.length; i < len; i++) {
                    let rule = rules[i];
                    if (rule.type === 'regexp') {
                        let isValid = this.checkValidByRegEx(this.value, rule.expression, rule.flags);
                        this.isValid = isValid ? null : 'is-invalid';
                        this.errorMessage = isValid ? '' : rule.message;
                    }
                }
            },
            checkValidByRegEx(value, expression, flags) {
                let regEx = new RegExp(expression, flags);
                return regEx.test(value);
            }
        }
    }
</script>

<style scoped>

</style>