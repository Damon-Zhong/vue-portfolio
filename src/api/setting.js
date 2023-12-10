import request from './instance'

export async function getGlobalSettings(){
    return await request.get("/api/setting")
}