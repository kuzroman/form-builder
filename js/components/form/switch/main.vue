<template>
    <div class="material-switch pull-right l-content__el">
        <div>{{ label }}</div>
        <input :id="id" :name="id" type="checkbox"
               :checked="dataIsChecked"
               @change="changeSwitch"
        />
        <label :for="id" class="label-default"></label>
        <p>{{ dataIsChecked ? 'да' : 'нет' }}</p>
    </div>
</template>

<script>
    export default {
        name: 'switch-field',
        props: {
            stepId: Number,
            id: String,
            label: String,
            isChecked: Boolean
        },
        data: function () {
            return {
                dataIsChecked: this.isChecked
            }
        },
        methods: {
            changeSwitch(ev) {
                this.dataIsChecked = ev.target.checked;
                this.$store.commit('setParamInForm', {stepId: this.stepId, id: this.id, key: 'isChecked', val: this.dataIsChecked});
            }
        }
    }
</script>

<style scoped>
    .material-switch > input[type="checkbox"] {
        display: none;
    }

    .material-switch > label {
        cursor: pointer;
        height: 0;
        position: relative;
        width: 40px;
    }

    .material-switch > label::before {
        background: rgb(0, 0, 0);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        content: '';
        height: 16px;
        margin-top: -8px;
        position:absolute;
        opacity: 0.3;
        transition: all 0.4s ease-in-out;
        width: 40px;
    }
    .material-switch > label::after {
        background: rgb(255, 255, 255);
        border-radius: 16px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        content: '';
        height: 24px;
        left: -4px;
        margin-top: -8px;
        position: absolute;
        top: -4px;
        transition: all 0.3s ease-in-out;
        width: 24px;
    }
    .material-switch > input[type="checkbox"]:checked + label::before {
        opacity: 0.5;
    }
    .material-switch > input[type="checkbox"]:checked + label::after {
        left: 20px;
    }
</style>