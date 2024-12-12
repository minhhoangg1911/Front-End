import { useForm, SubmitHandler } from 'react-hook-form';

interface SignInFormInputs {
    email: string;
    name: string;
    password: string;
}

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInputs>();
    const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
        console.log('Submitted Data:', data);
    }
    return (
        <div className="container-xl">
            <div className="py-[60px]">
                <h1 className="text-center text-[48px] leading-[120%] text-[#000000]"> Sign Up</h1>
            </div>
            <div className="mb-[150px]">
                <div className="w-full max-w-[500px] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-[25px]">
                            <div>
                                <label className="mb-[2px] flex text-[14px] font-normal leading-[150%]" htmlFor="">Email</label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    type="email"
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none" />
                                {errors.email && (
                                    <p className="text-red-500 text-[12px] mt-[5px]">{errors.email.message}</p>
                                )}

                            </div>
                            <div>
                                <label className="mb-[2px] flex text-[14px] font-normal leading-[150%]" htmlFor="">Name</label>
                                <input
                                    {...register('name', {
                                        required: 'Name is required',
                                    })}
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none" />
                                {errors.name && (
                                    <p className="text-red-500 text-[12px] mt-[5px]">{errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="mb-[2px] flex text-[14px] font-normal leading-[150%]" htmlFor="">Password</label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required'
                                    })}
                                    className="text-[#333] bg-transparent border-0 border-b border-b-black h-auto mb-0 pb-[5px] text-[14px] leading-[150%] w-full focus:outline-none" />
                                {errors.password && (
                                    <p className='text-red-500 text-[12px] mt-[5px]'>{errors.password.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="mt-[12px] flex flex-col">
                            <label className="mt-[12px] flex gap-x-[10px]">
                                <input className="w-checkbox-input" name="" data-name="" data-wf-user-field="wf-user-field-accept-privacy" placeholder="" type="checkbox" id="wf-sign-up-accept-privacy" />
                                <span className="w-form-label">By creating an account, I agree to this website's
                                    <a href="/privacy-policy" className="w-inline-block underline"> privacy policy</a> and <a href="/terms-conditions" className="w-inline-block underline">terms of service</a></span>
                            </label>
                            <label className="mt-[12px] flex gap-x-[10px]">
                                <input className="w-checkbox-input" name="" data-name="" data-wf-user-field="wf-user-field-accept-privacy" placeholder="" type="checkbox" id="wf-sign-up-accept-privacy" />
                                <span className="w-form-label">
                                    <a>I consent to receive marketing emails.</a>
                                </span>
                            </label>
                        </div>
                        <div className="mt-[25px] group">
                            <input className="flex bg-color-1 w-full text-[#fff] rounded-[50px] justify-center no-underline py-[10px] px-[20px] items-center cursor-pointer group-hover:bg-[#000] duration-300" type='submit' value='Log In' />
                        </div>
                        <div className="flex justify-between mt-[12px] group">
                            <span>Don't have an account?</span>
                            <a href='/login' className="underline cursor-pointer group-hover:no-underline">Log In</a>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignUp