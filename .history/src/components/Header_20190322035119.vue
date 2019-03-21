<template>
    <div class="header">
       <h1>Header Date = {{getDate}}</h1> 
    </div>
</template>

<script>
export default {
    computed: {
        getDate(){
            return String(new Date()).substring(0,15)
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 100%;
    }
</style>

