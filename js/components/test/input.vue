<template>
    <div v-if="isVisible">
        <input :name="id" :placeholder="placeholder"
               v-model="value"
               @input="changeValue">
        {{ value }}
    </div>
</template>

<script>
    export default {
        name: 'input-field',
        props: {
            id: {type: String},
            initialValue: String,
            placeholder: String,
            depends: Object || false,
        },
        data() {
            return {
                value: this.initialValue,
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
                console.log('isDisable', isDisable);
                return !isDisable;
            }
        },
        methods: {
            changeValue(ev) {
                this.$store.commit('setParam', {id: this.id, key: 'value', val: ev.target.value});
            },
        }
    }
</script>

<style scoped>

</style>
