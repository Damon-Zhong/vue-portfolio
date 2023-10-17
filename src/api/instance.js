import { showMessage } from "@/utils";
import axios from "axios";

const instance = axios.create()
instance.interceptors.response.use((res) => {
    if(res.data.code !== 0){
        showMessage({
            type: 'error',
            content: res.data.msg
        })
        return null
    }

    return res.data.data
})

export default instance