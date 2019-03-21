<template>
    <div class="home">
        <h1>Todays Date is: {{getDate}} </h1>
        <Header />
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    },
    props: {
        username: {
            required: false,
            type: String
        }
    },
    computed: {
        getDate(){
            return String(new Date()).substring(0, 15)
        }
    },
}
</script>

<style>

</style>
