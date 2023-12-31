import { getGlobalSettings } from "@/api/setting";
import { tabTitleSetter } from "@/utils";
export default {
    namespaced: true,
    state:{
        isLoading: false,
        settingData: null
    },
    mutations: {
        setLoading(state, payload){
            state.isLoading = payload
        },
        setGlobalSetting(state, payload){
            state.settingData = payload
        }
    },
    actions: {
        async fetchSettings(ctx){
            if(ctx.state.settingData){
                return
            }
            ctx.commit("setLoading", true)
            const res = await getGlobalSettings()
            ctx.commit("setGlobalSetting", res)
            ctx.commit("setLoading", false)

            if(res.siteTitle){
                tabTitleSetter.setSiteTitle(res.siteTitle)
            }
        }
    }
}