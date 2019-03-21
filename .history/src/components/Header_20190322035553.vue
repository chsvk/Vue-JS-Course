<template>
    <div class="header">
       <h1>Header Date = {{getDate}}</h1> 
       <h1>{{messageFromMixin}}</h1>
    </div>
</template>

<script>
import DateMixin from '@/Mixins/DateMixin'
export default {
   mixins: [DateMixin],
   computed:{
       getDate(){
           return "date"
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

