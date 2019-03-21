export default {
    data(){
        return{
            messageFromMixin: 'Hello From Mixin 🌋'
        }
    },
    computed: {
        getDate(){
            return String(new Date()).substring(0,15)
        }
    }
}