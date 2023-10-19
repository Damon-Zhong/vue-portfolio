import instance from "./instance";

export const getBlogCategories = async () => {
    return await instance.get("/api/blogtype")
}

export const getBlogsByPage = async(pageNum = 1, limit = 10, categoryId = -1)=> {
    return await instance.get("/api/blog", {
        params: {
            pageNum,
            limit,
            categoryId
        }
    })
}