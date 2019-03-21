<template>
    <div class="home">
        <h1>Todays Date is: </h1>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            required: false,
            type: String
        }
    },
    computed: {
        getDate(){

        }
    },
    mounted(){
        console.log(new Date())
    }
}
</script>

<style>

</style>
