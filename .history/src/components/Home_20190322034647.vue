<template>
    <h1>Welcome Home {{username}} 🥳</h1>
</template>

<script>
export default {
    props: {
        username: {
            required: true,
            type: String
        }
    }
}
</script>

<style>

</style>
