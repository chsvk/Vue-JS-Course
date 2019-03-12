<template>
    <div class="data">
        <h1>Data Component</h1>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: false
        }
    }
}
</script>

<style>

</style>
