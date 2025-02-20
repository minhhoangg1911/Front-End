import axiosInstance from '@/utils/axiosInstance';

// Hàm lấy dữ liệu khách sạn theo ID
const fetchPayment = async (user: string) => {
    const response = await axiosInstance.post(`/HotelPayment/create-checkout-session?userId=${user}`);
    return response.data;
};

export {
    fetchPayment
}

