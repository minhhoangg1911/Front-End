import { useQuery } from '@tanstack/react-query';
import { fetchHotelById } from '../service/hotelService';


export const useHotelQuery = (id: number) => {
    return useQuery({
        queryKey: ['hotel', id], // Khóa cache dựa trên id
        queryFn: () => fetchHotelById(id), // Hàm gọi API
    });
};