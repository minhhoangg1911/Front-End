
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuthStore } from '@/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginUser } from '@/utils/api/auth';
import { toast } from 'react-toastify';
import { AxiosError, } from 'axios';
// Định nghĩa kiểu dữ liệu cho form
interface LoginFormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    // Sử dụng hook từ react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();


    // Sử dụng TanStack Query để gọi API
    const { mutate } = useMutation({
        mutationFn: (data: LoginFormInputs) => {
            return LoginUser(data.email, data.password)
        },
        onSuccess: (data) => {
            if (data.isSuccess && data.result) {
                const { accessToken, refreshToken, } = data.result;
                login({ accessToken, refreshToken, isLogin: true });
                navigate('/user-info')
            } else {
                alert('Login failed: ' + (data.errorMessages?.[0] || 'Unknown error'));
            }
        },
        onError: (error) => {
            // console.error('Login failed:', error);
            if (error instanceof AxiosError) {
                const errorData = error.response?.data; // Lấy dữ liệu lỗi từ server
                console.error('Error response data:', errorData);
                // Hiển thị lỗi cho người dùng
                toast.error(errorData || 'An unexpected error occurred. Please try again.');

            } else {
                console.error('An unknown error occurred:', error);
                toast.error('An unknown error occurred. Please try again.');
            }
        },
    });


    // Xử lý submit
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        mutate(data);
    };

    return (
        <div className="container-xl">
            <div className="py-[60px]">
                <h1 className="text-center text-[48px] leading-[120%] text-[#000000]">Log In</h1>
            </div>
            <div className="mb-[150px]">
                <div className="w-full max-w-[500px] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-[25px]">
                            <div>
                                <label className="mb-[2px] flex text-[14px] font-normal leading-[150%]" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none"
                                    id="email"
                                    type="email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-[12px] mt-[5px]">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-[2px] flex text-[14px] font-normal leading-[150%]" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
                                        }
                                    })}
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none"
                                    id="password"
                                    type="password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-[12px] mt-[5px]">{errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-[25px] group">
                            <input
                                className="flex bg-color-1 w-full text-[#fff] rounded-[50px] justify-center no-underline py-[10px] px-[20px] items-center cursor-pointer group-hover:bg-[#000] duration-300"
                                type="submit"
                                value="Log In"
                            />
                        </div>

                        <div className="flex justify-between mt-[12px] group">
                            <span>Don't have an account?</span>
                            <NavLink to="/sign-up" className="underline cursor-pointer group-hover:no-underline">
                                Sign Up
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
