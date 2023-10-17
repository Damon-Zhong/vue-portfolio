import instance from "./instance"

export const getBanners = async() => {
    return await instance.get("/api/banners")
}