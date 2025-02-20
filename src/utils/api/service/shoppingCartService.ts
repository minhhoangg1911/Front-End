import axios from 'axios';

const API_URL = 'https://localhost:7095/api';

// Hàm lấy dữ liệu khách sạn theo ID
const fetchShoppingCartById = async (id: number) => {
    const response = await axios.get(`${API_URL}/ShoppingCart?userId=${id}`);
    return response.data;
};

const fetchShoppingCartInItemById = async (id: number) => {
    const response = await axios.get(`${API_URL}/ShoppingCart/item/${id}`);
    return response.data;
};

const fetchUpdateShoppingCart = async (payload: {
    userId: string;
    roomId: number;
    updateQuantityBy: number;
}) => {
    const response = await axios.post(`${API_URL}/ShoppingCart`, payload);
    return response.data;
};

export {
    fetchShoppingCartById,
    fetchUpdateShoppingCart,
    fetchShoppingCartInItemById
}