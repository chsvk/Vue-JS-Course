export default {
    computed: {
        getDate(){
            return String(new Date()).substring(0,15)
        }
    }
}