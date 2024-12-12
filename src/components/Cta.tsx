
const Cta = () => {
    return (
        <section className="mt-[150px] mb-[50px]">
            <div className='container-xl'>
                <div className="relative">
                    <div className="flex flex-col text-center items-center pb-[60px] ">
                        <img className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659c8a383ccbaf0d3da6141_ic-cta.svg' />
                        <h2 className="w-full max-w-[65%] mt-[6px] text-[36px] font-light leading-[140%] mb-5 font-none max-md:max-w-[100%] max-sm:text-[20px]" >SURPRISE YOUR LOVED ONES WITH HOTEL CRUISE GIFT CARDS.</h2>
                        <p className="mb-0 max-w-[38%] w-full max-lg:max-w-[60%] max-md:max-w-[100%] max-sm:text-[14px]">Sed gravida fringilla malesuada vel eleifend enim urna maecenas id. Neque turpis volutpat mollis donec odio velit faucibus. Non nibh dapibus faucibus diam fringilla volutpat sollicitudin.</p>
                        <div className="flex mt-10 gap-[20px] cursor-pointer group ">
                            <a className="flex gap-[10px] bg-color-1 text-white rounded-[50px] justify-center items-center px-[20px] py-[10px] text-[14px] leading-[150%] no-underline transition-colors duration-300 group-hover:bg-black ">
                                <div>Join Our Team</div>
                                <div className="flex ml-2 items-center">
                                    <div className="bg-[#edeade] rounded-[50%] min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ml-[-8px] overflow-hidden ">
                                        <img className="object-cover min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea8423760dc2ad4471a_cta-btn-img-1.jpg' />
                                    </div>
                                    <div className="bg-[#edeade] rounded-[50%] min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ml-[-8px] overflow-hidden">
                                        <img className="object-cover min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea811d090998d41a257_cta-btn-img-2.jpg' />
                                    </div>
                                    <div className="bg-[#edeade] rounded-[50%] min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ml-[-8px] overflow-hidden">
                                        <img className="object-cover min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea8aa5d8b71d0db4ec9_cta-btn-img-3.jpg' />
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="absolute w-full max-w-[348px] top-auto bottom-[-2%] left-[0%] right-auto rounded-[10px] overflow-hidden">
                        <img className="rounded-[10px] max-lg:min-h-[150px] max-lg:max-h-[150px] max-md:hidden " src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acd5fdead01c9513841c5_cta-1-p-500.jpg' />
                    </div>
                    <div className="absolute  w-full max-w-[198px] top-auto bottom-[20px] left-auto right-[0%] rounded-[10px] overflow-hidden">
                        <img className="rounded-[10px] max-lg:min-h-[150px] max-lg:max-h-[150px] max-md:hidden " src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6662b43b490f7cdd2dd16878_cta-02.jpg' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cta