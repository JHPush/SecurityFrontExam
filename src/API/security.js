import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8080/api/v1';

export const postLogin = async(form)=>{
    const header = {Headers :{'Content-Type': 'x-www-form-urlencoded'}}
    const formData = new FormData();
    formData.append('username', form.email);
    formData.append('password', form.password);
    

    return ((await axios.post(`${API_SERVER_HOST}/members/login`, formData, header)).data);
}