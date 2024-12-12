
const AboutWrap = () => {
    return (
        <div className="container-xl">
            <div className="p-5">
                <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                    <div>
                        <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div className="font-Switzer">About us</div>
                        </div>
                        <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Who We Are</h2>
                    </div>
                </div>
                <div className="flex gap-x-[60px] max-md:flex-col-reverse">
                    <div className="flex max-w-[50%] flex-col justify-between gap-y-[60px] max-md:max-w-[100%]">
                        <div className="max-md:hidden">
                            <img className="object-cover w-full h-full rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665da2116c3d9d77ac14d432_about-01-p-800.jpg' />
                        </div>
                        <div>
                            <div className="max-md:hidden">Diam nec placerat faucibus purus. Sit amet diam malesuada cursus faucibus elementum laoreet porttitor enim. Egestas quis consequat fermentum lacus enim consequat tellus quisque morbi.</div>
                            <div className="flex gap-x-[10px] mt-10 max-lg:flex-wrap max-lg:gap-y-[10px] justify-between">
                                <div className="flex gap-x-[10px] text-[#000] border border-[#000] rounded-[50px] items-center px-[10px]  py-[10px] text-[12px] font-bold leading-[150%]">
                                    <div>85% Luxury Beds</div>
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665da2c624f4466669cdd058_ic-beds.svg' />
                                </div>
                                <div className="flex gap-x-[10px] text-[#000] border border-[#000] rounded-[50px] items-center px-[10px] py-[10px] text-[12px] font-bold leading-[150%] ">
                                    <div>30+ Awards & recognitions</div>
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665da2c5b65df8adb298ec3f_ic-awards.svg' />
                                </div>
                                <div className="flex gap-x-[10px] text-[#000] border border-[#000] rounded-[50px] items-center px-[10px] py-[10px]  text-[12px] font-bold leading-[150%]">
                                    <div>10k+ Satisfaction</div>
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665da2c5b1aa32ad39b3384b_ic-satisfaction.svg' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex max-w-[50%] flex-col justify-between gap-y-[60px] max-md:flex-col-reverse max-md:max-w-[100%]">
                        <div>
                            <h3 className="mb-[14px] font-normal leading-[150%] text-[28px] text-[#000000]">Hotel Cruise is your gateway to a peaceful and luxurious vacation.</h3>
                            <p>Tellus faucibus proin consectetur eget posuere quis ut eu. Vel risus massa eu ultrices risus volutpat scelerisque facilisis id. Interdum tellus in congue nunc quisque arcu volutpat vel. Id scelerisque quam vestibulum nunc ornare.</p>
                        </div>
                        <div>
                            <img className="object-cover w-full h-full rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665da20f76ac1d89cf509f64_about-02-p-800.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWrap