<template>
    <h1>Hey! I am A Dummy Component and my index is {{digit}}</h1>
</template>

<script>
export default {
    props: {
        digit: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>
