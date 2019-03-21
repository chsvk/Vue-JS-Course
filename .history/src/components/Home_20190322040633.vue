<template>
    <div class="home">
        <h1>🥳 Congratulations!</h1>
        <h1>You have completed the Course</h1>
        <!-- <Header /> -->
    </div>
</template>

<script>
import Header from '@/components/Header'
import DateMixin from '@/Mixins/DateMixin'
export default {
    // components: {
    //     Header
    // },
    props: {
        username: {
            required: false,
            type: String
        }
    },
    mixins: [DateMixin]
    
}
</script>

<style>

</style>
