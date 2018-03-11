<template>
    <div class="steps">
        <div v-for="step in steps" class="steps__num"
             :id="step.id"
             @click="changeStep"
        >шаг {{ step.id }}</div>
    </div>
</template>

<script>
    export default {
        name: 'steps',
        props: {
            stepId: Number,
            steps: Object,
        },
        data: function () {
            return {
//                phone: this.initialValue,
            }
        },
        methods: {
            changeStep(ev) {
                console.log(ev.target.id);
                this.$store.commit('changeActiveStep', {stepId: ev.target.id});
            }
        }
    }
</script>

<style scoped>

</style>