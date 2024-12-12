
const Blog = () => {
    return (
        <section className='mt-[150px]'>
            <div className="container-xl">
                <div className="flex gap-[60px] justify-between items-end mb-[20px]">
                    <div>
                        <div className="mb-[5px] flex gap-[6px] text-color-1 uppercase items-center leading-[1.2] text-[14px]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div>Our Blogs</div>
                        </div>
                        <h2 className="text-[#000] uppercase text-[36px] font-normal leading-[1.5] mt-0">News & Articles</h2>
                    </div>
                    <div className="flex group  mt-[40px] max-md:hidden">
                        <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                            <span>View All Blogs</span>
                        </button>
                        <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-x-[24px] gap-y-[50px] auto-rows-auto max-md:grid-cols-2 max-sm:grid-cols-1">
                        <div className="flex group">
                            <a className="border cursor-pointer border-black/10 rounded-[10px] w-full no-underline overflow-hidden">
                                <img className="object-cover w-full min-h-[300px] max-h-[300px] group-hover:scale-105 duration-500" src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d4bbd5a55abaa81423d14_blog-thumb-01-p-500.jpg' />
                                <div className="p-5">
                                    <h4 className="mb-[20px] text-[20px] leading-[170%] mt-0">Tricks for packing light and maximizing space in your luggage</h4>
                                    <div className="flex gap-[8px] text-[14px] leading-[150%]">
                                        <div>Travel Tips</div>
                                        <div className="bg-[rgba(0,0,0,.1)] w-[1px] h-auto"></div>
                                        <div>Jun 3, 2024</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex group">
                            <a className="border cursor-pointer border-black/10 rounded-[10px] w-full no-underline overflow-hidden">
                                <img className="object-cover w-full min-h-[300px] max-h-[300px] group-hover:scale-105 duration-500" src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d4be27ef299d7f40135e4_blog-thumb-02-p-500.jpg' />
                                <div className="p-5">
                                    <h4 className="mb-[20px] text-[20px] leading-[170%] mt-0">Family-friendly destinations planning the perfect vacation for all ages</h4>
                                    <div className="flex gap-[8px] text-[14px] leading-[150%]">
                                        <div>Family Travel</div>
                                        <div className="bg-[rgba(0,0,0,.1)] w-[1px] h-auto"></div>
                                        <div>Jun 3, 2024</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex group">
                            <a className="border cursor-pointer border-black/10 rounded-[10px] w-full no-underline overflow-hidden">
                                <img className="object-cover w-full min-h-[300px] max-h-[300px] group-hover:scale-105 duration-500 transition-transform " src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d4bfbfdd82bd2f1150f56_blog-thumb-03-p-500.jpg' />
                                <div className="p-5">
                                    <h4 className="mb-[20px] text-[20px] leading-[170%] mt-0">Where every detail is tailored to exceed your expectations.</h4>
                                    <div className="flex gap-[8px] text-[14px] leading-[150%]">
                                        <div>Luxury Travel</div>
                                        <div className="bg-[rgba(0,0,0,.1)] w-[1px] h-auto"></div>
                                        <div>Jun 3, 2024</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="hidden group mt-[40px] max-md:flex max-md:justify-end">
                        <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                            <span>View All Blogs</span>
                        </button>
                        <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blog