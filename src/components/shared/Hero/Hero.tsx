import './style.css'
const Hero = () => {
    return (
        <>
            <section className="hero mb-[150px] max-xs:mb-[50px]">
                <div className="max-sm:min-h-[460px] max-sm:max-h-[460px] max-xs:min-h-[400px] max-sm:rounded-[10px] max-sm: justify-end hero-wrapper ">
                    <div className='hero-top '>
                        <div className='max-sm:hidden hero-social-data'>
                            <div className='hero-social-title text-white font-semibold'>Join our community</div>
                            <div className='social-wrap flex'>
                                <a className='hero-social hover:bg-transparent'>
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed75a20c6824addf4ec64_ic-twitter.svg" loading="lazy" alt="Social Icon" />
                                </a>
                                <a className='hero-social'>
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed75a708080e184eb3a2a_ic-facebook.svg" loading="lazy" alt="Social Icon" />
                                </a>
                                <a className='hero-social'>
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed75aeff73d95b7767bf8_ic-youtube.svg" loading="lazy" alt="Social Icon" />
                                </a>
                                <a className='hero-social'>
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed75a9a0ba904738dcf65_ic-insta.svg" loading="lazy" alt="Social Icon" />
                                </a>

                            </div>
                        </div>

                        <div className="flex flex-col  items-center  space-y-4">
                            <div className="max-sm:hidden bg-white p-4 rounded-lg shadow-lg w-80">
                                <div className="mb-4">
                                    <h2 className="text-lg font-bold text-black mb-[30px]">Beautiful Destinations</h2>
                                    <div className="flex items-center mt-2">
                                        <div className="flex -space-x-2 mr-2">
                                            <img className="w-8 h-8 rounded-full border-0 border-white" src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea8423760dc2ad4471a_cta-btn-img-1.jpg" alt="User 1" />
                                            <img className="w-8 h-8 rounded-full border-0 border-white" src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea811d090998d41a257_cta-btn-img-2.jpg" alt="User 2" />
                                            <img className="w-8 h-8 rounded-full border-0 border-white" src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665acea8aa5d8b71d0db4ec9_cta-btn-img-3.jpg" alt="User 3" />
                                        </div>
                                        <div className='destination-line bg-black bg-opacity-10 w-[1px] h-8 mx-4 mr-2 '></div>
                                        <div className="text-sm text-[#333] font-Switzer">100k+ users have visited our platform</div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-sm:hidden  hero-right bg-white p-4 rounded-lg shadow-lg w-80">
                                <div>
                                    <h3 className="text-lg text-black font-bold mb-[30px]">Book with Cruise</h3>
                                    <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Luxury Living</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Scenic Views</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Unforgettable Moments</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Spa</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Unique Activities</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Art Tours</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Wine Tasting</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Workshops</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Memorable Vacations</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Beachfront Stays</button>
                                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px]">Comfort</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hero-bottom">
                        <p className='max-sm:w-full max-sm:text-center xl:max-w-[340px] font-Switzer'>Enjoy your vacation & experience the ultimate in luxury & comfort as you relax & unwind.</p>
                        <h1 className='max-sm:text-[22px] max-sm:text-center max-sm:mt-[10px] text-[#fff] w-[100%] max-w-[720px] mb-0 text-[46px] font-light leading-[140%] font-Switzer '>
                            Discover the perfect blend of luxury & comfort at Hotel Cruise
                        </h1>
                        <div className="max-sm:justify-center max-sm:mt-[20px] flex group  mt-[40px]">
                            <button className="flex items-center space-x-2 bg-color-1 rounded-full px-4 py-2">
                                <span>Explore Rooms</span>
                            </button>
                            <div className="button-arrow flex items-center justify-center w-8 h-8 border border-[rgba(255,255,255,0.2)] rounded-full relative  
                            group-hover:border-[rgba(255,255,255,1)]
                            ">
                                <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed674213503b02c06c889_w-btn-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                                <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665ed674213503b02c06c889_w-btn-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero