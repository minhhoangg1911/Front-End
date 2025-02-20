import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchShoppingCartById, fetchShoppingCartInItemById, fetchUpdateShoppingCart } from '../service/shoppingCartService';


export const useShoppingCartQuery = (id: number) => {
    return useQuery({
        queryKey: ['ShoppingCart', id], // Khóa cache dựa trên id
        queryFn: () => fetchShoppingCartById(id), // Hàm gọi API
        enabled: id !== undefined
    });
};

export const useShoppingCartInItemQuery = (id: number) => {
    return useQuery({
        queryKey: ['ShoppingCartInItem', id], // Khóa cache dựa trên id
        queryFn: () => fetchShoppingCartInItemById(id), // Hàm gọi API
        enabled: id !== undefined
    });
};



export const useUpdateShoppingCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: {
            userId: string;
            roomId: number;
            updateQuantityBy: number;
        }) => fetchUpdateShoppingCart(payload),
        //_ = data
        onSuccess: (_: any, variables: any) => {
            queryClient.invalidateQueries(['ShoppingCartInItem', variables.userId] as any);
        }
    }
    );

};

