
export default {
    data(){
        return {
            isLoading: true,
            fetchResult: null
        }
    },
    async created(){
        this.fetchResult = await this.fetchData()
        this.isLoading = false
    }  
}