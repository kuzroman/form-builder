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

    }
</script>

<style scoped>

</style>