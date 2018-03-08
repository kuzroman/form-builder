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
        <!--<p>check bind: {{ value }}</p>-->
    </div>
</template>

<script>
    export default {
        name: 'input-field',
        props: {
            id: {type: String},
            label: {type: String},
            placeholder: {type: String},
            initialValue: {type: String},
            validation: {type: Array},
            depends: Object || false,
        },
        data: function () {
            return {
                value: this.initialValue,
                isValid: null,
                errorMessage: '',
            }
        },
        computed: {
            isVisible() {
                if (!this.depends) {
                    return true;
                }

                let when = this.depends.when;
                let isDisable = when.length;
                let model = this.$store.state.model;

                for (let i in when) {
                    let props = when[i].props;
                    for (let key in props) {
                        if (model[when[i].id].props[key] === props[key]) {
                            isDisable--;
                        }
                    }
                }

                return !isDisable;
            },
        },
        methods: {
            inputValue(ev) {
                this.validate();
                this.$store.commit('setParam', {id: this.id, key: 'value', val: ev.target.value});
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