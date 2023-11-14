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

export const getArticleDetailById = async (id) => {
    return await instance.get(`/api/blog/${id}`)
}

export const getArticleComments = async (blogid, page = 1, limit = 10) => {
    return await instance.get("/api/comment", {
        params: {
            page,
            limit,
            blogid
        }
    })
}

/**
 * 提交评论
 * @param {*} comment nickname, content, blogId
 */
export const submitComment = async (comment) => {
    return await instance.post("/api/comment", { ...comment })
}