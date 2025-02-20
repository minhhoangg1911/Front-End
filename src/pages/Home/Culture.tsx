import './style.css'
const Culture = () => {
    return (
        <section className='culture mb-[150px] max-xs:mb-[50px]'>
            <div className="container-xl">
                <div className='culture-wrap grid grid-cols-3 auto-rows-auto gap-x-[60px] max-lg:grid-cols-2 max-sm:flex max-sm:grid-cols-1 max-sm:flex-col-reverse '>
                    <div className='flex flex-col justify-between gap-20 '>
                        <div className='max-sm:hidden'>
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665eb7141ff96da7d3abd029_culture-01-p-500.jpg' className='bg-[#edeade] rounded-[10px]' />
                        </div>
                        <div className='flex justify-between items-end gap-x-[60px] border-t border-t-[rgba(0,0,0,0.1)] pt-4'>
                            <div className='flex text-[14px] items-start flex-col gap-[6px]'>
                                <div className='text-[#000000] text-[38px] font-light leading-[120%] font-Switzer'>70%</div>
                                <div className='font-Switzer'>Our guests are repeat visitors</div>
                            </div>
                            <img className='min-w-10 max-w-10 min-h-10 max-h-10' src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665eb7daa273e66e0cbe50e1_icon-awards.svg" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-10 '>
                        <div>
                            <div>
                                <h2 className='mb-5 text-[32px] font-light '>We're dedicated to create moments of <span className='font-normal'> joy & delight</span> for every guest
                                </h2>
                                <p className='text-[16px] font-Switzer'>
                                    Venenatis sed habitant tempus malesuada condimentum suspendisse nec auctor egestas quis augue non ultricies elit odio diam faucibus convallis.
                                </p>

                                <div className="flex group  mt-[40px]">
                                    <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                                        <span>More About us</span>
                                    </button>
                                    <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-between items-end gap-x-[60px] border-t border-t-[rgba(0,0,0,0.1)] pt-4'>
                            <div className='flex text-[14px] items-start flex-col gap-[6px]'>
                                <div className='text-[#000000] text-[38px] font-light leading-[120%] font-Switzer'>30%</div>
                                <div className='font-Switzer'>Awards and recognitions</div>
                            </div>
                            <img className='min-w-10 max-w-10 min-h-10 max-h-10' src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665eb7dab49c6c406000612f_ic-recognitions.svg" />
                        </div>

                    </div>
                    <div className='w-full bg-[#edeade] rounded-[10px] relative overflow-hidden max-lg:hidden'>
                        <img className='rounded-[10px] w-full h-full object-cover ' src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665eb6965eeef2227fa5bbac_culture-02-p-500.jpg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Culture
