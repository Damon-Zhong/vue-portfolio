
export default function(defaultVal = null) {
    return {
        data(){
            return {
                isLoading: true,
                fetchResult: defaultVal
            }
        },
        async created(){
            this.fetchResult = await this.fetchData()
            this.isLoading = false
        }  
    }
}