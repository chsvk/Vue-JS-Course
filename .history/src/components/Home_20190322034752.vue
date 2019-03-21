<template>
    <h1>Welcome Home {{username}} 🥳</h1>
</template>

<script>
export default {
    props: {
        username: {
            required: false,
            type: String
        }
    }
}
</script>

<style>

</style>
