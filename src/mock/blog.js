import Mock from "mockjs";

Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: "",
    "data|5-10": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|5-300": 0,
            "order|+1": 1
        }
    ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    const { url } = options
    const params = {}
    url.split("?")[1]?.split("&").forEach(param => {
        const splittedStr = param.split("=")
        const key = splittedStr[0]
        const val = splittedStr[1]

        params[key] = val
    })

    const { limit = 10 } = params

    return Mock.mock({
        code: 0,
        msg: "",
        "data": {
            "total|500-1000": 0,
            [`rows|${limit}`]: [{
                id: "@guid",
                "title": "@ctitle(5, 50)",
                description: "@cparagraph(1, 10)",
                category: {
                    "id|1-10":0,
                    name: "分类@id" 
                },
                "scanNumber|0-1000": 0,
                "commentNumber|0-300": 0,
                "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "Random Image"), null],
                createDate: "@date('yyyy-MM-dd HH:mm:ss')"
            }]
        }
    })
})