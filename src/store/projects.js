import { getProjects } from "@/api/projects"

export default {
    namespaced: true,
    state: {
        isLoading: false,
        projectData: []
    },
    mutations: {
        setLoading(state, payload){
            state.isLoading = payload
        },
        setProjects(state, payload){
            state.projectData = payload
        }
    },
    actions: {
        async fetchProjects(ctx){
            if(ctx.state.projectData.length > 0){
                return
            }
            ctx.commit("setLoading", true)
            const res = await getProjects()
            ctx.commit("setProjects", res)
            ctx.commit("setLoading", false)
        }
    }
}