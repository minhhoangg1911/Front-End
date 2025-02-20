
import axios from "axios";
import axiosInstance, { API_BASE_URL } from "../axiosInstance";

const LoginUser = async (email: string, password: string) => {
    const response = await axiosInstance.post("/Auth/login", {
        email: email,
        password: password,
    });
    return response.data;
};

const SignUpUser = async (email: string, name: string, password: string) => {

    const response = await axios.post(`${API_BASE_URL}/Auth/register`, {
        email: email,
        name: name,
        password: password,
    });
    return response.data
}

export {
    LoginUser,
    SignUpUser
}