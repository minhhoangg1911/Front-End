import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// const API_BASE_URL = "https://your-api-url.com";
export const API_BASE_URL = "https://localhost:7095/api";

// Token utils
export const getAccessToken = (): string | null => localStorage.getItem("accessToken");
export const getRefreshToken = (): string | null => localStorage.getItem("refreshToken");
export const setAccessToken = (token: string): void => localStorage.setItem("accessToken", token);
const logout = (): void => {
    localStorage.clear();
    window.location.href = "/login";
};

// create instance Axios
const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// Interceptor before send request
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = getAccessToken();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor after recive response
axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error) => {
        const originalRequest = error.config;

        // if  401 (Unauthorized) and request  not yet tested refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Mark this request as having attempted to refresh the token
            const refreshToken = getRefreshToken();
            if (!refreshToken) {
                logout();
                return Promise.reject(error);
            }

            try {
                // Call API to refresh access token
                const { data } = await axios.post(`${API_BASE_URL}/Auth/refresh-token`, {
                    refreshToken,
                });

                const newAccessToken = data.accessToken;
                setAccessToken(newAccessToken);

                // Attach the new token to the original request and resend
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                logout(); // If the refresh token expires, log out
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;