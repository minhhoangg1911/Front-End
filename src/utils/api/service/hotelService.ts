import axios from 'axios';

const API_URL = 'https://localhost:7095/api';

// Hàm lấy dữ liệu khách sạn theo ID
const fetchHotelById = async (id: number) => {
    const response = await axios.get(`${API_URL}/Hotel/${id}`);
    return response.data.data;
};

export {
    fetchHotelById
}