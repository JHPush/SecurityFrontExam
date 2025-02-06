import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8080/api/v1';

export const postLogin = async(form)=>{
    const header = {headers :{'Content-Type': 'x-www-form-urlencoded'}}
    const formData = new FormData();
    formData.append('username', form.email);
    formData.append('password', form.password);
    

    return ((await axios.post(`${API_SERVER_HOST}/members/login`, formData, header)).data);
}

export const getRefresh = async(accessToken, refreshToken)=>{
    const header = {headers:{'Authorization': `Bearer ${accessToken}`}};
    const res = await axios.get(`${API_SERVER_HOST}/members/refresh?refreshToken=${refreshToken}`, header);
    return res.data;
}