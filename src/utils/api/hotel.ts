// import axiosInstance from "../axiosInstance";
import axios from "axios";
import { API_BASE_URL } from "../axiosInstance";
const fetchRooms = async (limit: number, offset: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Hotel`, {
            params: { limit, offset },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
    }
};


const fetchRoomsAPI = async (limit: number, offset: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Hotel`, {
            params: { limit, offset } // Truyền tham số limit và offset vào API
        });
        return response.data.data; // Trả về dữ liệu phòng từ `data`
    } catch (error) {
        console.error('Error fetching rooms:', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
};


export {
    fetchRooms,
    fetchRoomsAPI
}