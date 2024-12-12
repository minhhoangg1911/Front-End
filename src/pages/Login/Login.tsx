
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Định nghĩa kiểu dữ liệu cho form
interface LoginFormInputs {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // Sử dụng hook từ react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    // Xử lý submit
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        console.log('Submitted Data:', data);
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
                                    {...register('password', { required: 'Password is required' })}
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none"
                                    id="password"
                                    type="password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-[12px] mt-[5px]">{errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-[25px] group">
                            <input
                                className="flex bg-color-1 w-full text-[#fff] rounded-[50px] justify-center no-underline py-[10px] px-[20px] items-center cursor-pointer group-hover:bg-[#000] duration-300"
                                type="submit"
                                value="Log In"
                            />
                        </div>

                        {/* Link */}
                        <div className="flex justify-between mt-[12px] group">
                            <span>Don't have an account?</span>
                            <a href="/sign-up" className="underline cursor-pointer group-hover:no-underline">
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
