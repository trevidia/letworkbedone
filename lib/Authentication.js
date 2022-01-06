import axios from "./AxiosConfig";

export const authenticateUser = async (request) => {
    let data;
    const jwt = request.cookies.jwt;
    return await axios.get('/user', {
        headers: {
            Cookie: `jwt=${jwt}`
        }
    })


}