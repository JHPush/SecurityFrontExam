import axios from "axios";
import { getCookie } from "./cookieUtils";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {

}

const beforeReq = (config) => { // config : request 전송시 데이터
    console.log("before Request....")
    const memberInfo = getCookie('member');

    if (!memberInfo) {
        console.log('Member Not Found...')
        return Promise.reject({
            response: { data: { error: 'REQUIRED_LOGIN' } }
        })
    }
    const {accessToken} = memberInfo;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
}
const requestFail = (error) => {
    console.log("before Request Failed....")
    console.log("error : ", error);
    return Promise.reject(error);

}
const beforeRes = () => {

}
const responseFail = () => {

}

// 인터셉터 등록
jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;