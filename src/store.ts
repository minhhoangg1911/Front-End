import { create } from 'zustand';
import { jwtDecode } from "jwt-decode";
import { getAccessToken } from './utils/axiosInstance';
import _ from 'lodash';

interface User {
    userId: string;
    email: string;
    name: string;
    role: string
}
interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: User | null;
    isAuthenticationUser: boolean,
    isOpen: boolean,
    login: (tokens: { accessToken: string; refreshToken: string; isLogin: boolean }) => void;
    logout: () => void;
    setIsOpen: (isOpen: boolean) => void;
}



export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticationUser: Boolean(getAccessToken()),
    isOpen: Boolean(false)
    ,

    login: ({ accessToken, refreshToken }) => {
        try {
            const decodedUser = jwtDecode<User>(accessToken);
            set({
                accessToken,
                refreshToken,
                user: decodedUser,
                isAuthenticationUser: true,
                isOpen: false
            });
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(decodedUser));
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    },
    logout: () => {
        // Xoá thông tin người dùng khỏi store và localStorage
        set({
            accessToken: null,
            refreshToken: null,
            user: null,
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    },
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

interface CartItem {
    roomId: number;
    name: string;
    quantity: number;
    price: number;
    roomName: string;
}

interface ShoppingCartStore {
    cartItems: CartItem[];
    setShoppingCart: (cartItems: CartItem[]) => void;
    updateQuantity: (id: number, quantity: number, cartItem: any) => void;
    removeFromCart: (id: number) => void;
}

export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
    cartItems: [],
    setShoppingCart: (cartItems) => {
        set({ cartItems })
    },
    updateQuantity: (roomId, quantity, cartItem) => {
        set((state) => {
            const newCartItems = _.cloneDeep(state.cartItems)
            const findNewCartItems = newCartItems.find(item => item.roomId === roomId)
            if (findNewCartItems) {
                return ({
                    cartItems: newCartItems.map(item => item.roomId === roomId ? { ...item, quantity } : item)
                })
            } else {
                newCartItems.push(cartItem)
                useAuthStore.getState().setIsOpen(true);
                return ({
                    cartItems: newCartItems
                })
            }
            // console.log("newCartItems", newCartItems)
            // console.log("id", roomId)
            // console.log("findNewCartItems", findNewCartItems)
            // return ({
            //     // cartItems: [...state.cartItems].map(item => item.id === id ? { ...item, quantity } : item)
            //     // cartItems: [];
            //     cartItems: newCartItems.map(item => item.roomId === roomId ? { ...item, quantity } : item)

            // })
        })

    },
    removeFromCart: (roomId) => {
        set((state) => ({
            cartItems: state.cartItems.filter(item => item.roomId !== roomId)
        }))
    }
}));







