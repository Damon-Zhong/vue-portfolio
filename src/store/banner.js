import { getBanners } from "@/api/banner"
export default {
    namespaced: true,
    state: {
        isLoading: false,
        bannerData: []
    },
    mutations: {
        setLoading(state, payload){
            state.isLoading = payload
        },
        setBanner(state, payload){
            state.bannerData = payload
        }
    },
    actions: {
        async fetchBanner(ctx){
            if(ctx.state.bannerData.length > 0){
                return
            }
            ctx.commit("setLoading", true)
            const res = await getBanners()
            ctx.commit("setBanner", res)
            ctx.commit("setLoading", false)
        }
    }
}