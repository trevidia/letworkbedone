import axios from "axios";

const instance = axios.create({
    // baseURL : "https://api.trevidia.com.ng/api/",
    baseURL: "http://localhost:8000/api/",
})

instance.defaults.withCredentials = true;

export default instance

