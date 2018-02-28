<template>
    <div>
        <label>{{ label }}
            <select :name="id" v-model="selectedInner" class="form-control">
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </label>
        check bind: {{ selectedInner  }}
    </div>
</template>

<script>
    export default {
        name: 'input-field',
        props: {
            id: {type: String},
            label: {type: String},
            selected: {type: String},
            options: {type: Array},
        },
        data: function () {
            return {
                selectedInner: this.selected,
            }
        },
    }
</script>

<style scoped>

</style>