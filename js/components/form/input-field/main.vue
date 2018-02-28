<template>
    <div>
        <label>{{ label }}
            <input :name="id" v-model="value"
                   :placeholder="placeholder"
                   class="form-control"
            >
        </label>
        check bind: {{ value }}
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
        },
        data: function () {
            return {
                value: this.initialValue,
            }
        },
//        computed: {
//        }
    }
</script>

<style scoped>

</style>