const Footer = () => {
    return (
        <section className="bg-[#000]">
            <div className="container-xl">
                <div className="flex justify-center pb-[50px] pt-[50px] max-xs:p-[30px] border-b border-[rgba(255,255,255,.15)]">
                    <a>
                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665973513ca752f4e77d6ebe_ft-brand.svg' />
                    </a>
                </div>
                <div className="flex items-stretch justify-between max-lg:flex-col">
                    <div className="w-full max-w-[34%] pt-[60px] pb-[60px] max-xs:p-[20px] max-lg:max-w-[60%] max-sm:max-w-[100%]">
                        <div className="flex gap-[6px] text-[#999] uppercase items-center text-[14px] leading-[120%]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66597524ecf21bd82abdbd9f_ft-icon.svg' />
                            <div>Join Our Newsletter</div>
                        </div>
                        <h4 className="text-[#fff] mt-[15px] mb-[25px] text-[22px] leading-[150%] max-sm:w-full">Keep up with the latest news and updates from Hotel Cruise.</h4>
                        <div className="mb-0">
                            <form className="relative group">
                                <input className="text-[#999] w-full
                                 bg-[rgba(0,0,0,0)] border border-[rgba(255,255,255,.15)] rounded-[50px] h-auto mb-0 py-[10px] pl-[20px] pr-[150px] text-[16px] leading-[160%] max-lg:w-full " placeholder="enter your email" required />
                                <input className="absolute top-[5px] bottom-[5px] right-[5px] left-auto bg-color-1 text-[#fff] rounded-[50px] px-[20px] py-[10px] text-[14px] leading-[120%] transition-colors duration-300 ease-in-out   text-center cursor-pointer group-hover:bg-[#edeade] group-hover:text-black" value="Subscribe Now" type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="flex gap-y-[60px] border-l border-white/15 flex-col w-full max-w-[50%] pt-[60px] pb-[60px] pl-[60px] max-lg:max-w-[100%] max-lg:pl-0 max-lg:border-none ">
                        <div className="grid grid-cols-3 gap-x-[75px] auto-rows-auto max-sm:grid-cols-2 ">
                            <div className="flex flex-col items-start ">
                                <div className="text-[#fff] uppercase mb-2 text-[14px] leading-[150%]">Pages</div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/about">About us</a>
                                </div>
                                <div className="group">
                                    <a className="flex  text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/rooms">Rooms</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/blogs">Blogs</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/reviews">Reviews</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/faq">FAQ</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start ">
                                <div className="text-[#fff] uppercase mb-2 text-[14px] leading-[150%]">Resources</div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/contact">Contact us</a>
                                </div>
                                <div className="group">
                                    <a className="flex  text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/privacy-policy">Privacy Policy</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/terms-conditions">Terms & Conditions</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/changelog">Changelog</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="/license">License</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="text-[#fff] uppercase mb-2 text-[14px] leading-[150%] max-sm:mt-[10px]">Connected</div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="#">Instagram</a>
                                </div>
                                <div className="group">
                                    <a className="flex  text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="#">Facebook</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="#">YouTube</a>
                                </div>
                                <div className="group">
                                    <a className="flex text-[14px] text-[#999] py-[2px] leading-[150%] no-underline group-hover:text-color-1 transition-colors duration-300" href="#">Twitter</a>
                                </div>

                            </div>
                            <div className="hidden  grid-cols-3 gap-x-[75px] auto-rows-auto max-sm:grid max-sm:grid-cols-1 max-sm:mt-[10px] ">
                                <div >
                                    <div className="text-white uppercase mb-2 text-sm leading-[150%]">By Email</div>
                                    <div className="group cursor-pointer">
                                        <a className="text-gray-500 pt-0.5 pb-0.5 text-sm leading-[150%] no-underline transition-colors duration-300 flex group-hover:text-color-1">info@example.com</a>
                                    </div>
                                </div>
                                <div >
                                    <div className="text-white uppercase mb-2 text-sm leading-[150%]">By Phone</div>
                                    <div className="group cursor-pointer">
                                        <a className="text-gray-500 pt-0.5 pb-0.5 text-sm leading-[150%] no-underline transition-colors duration-300 flex group-hover:text-color-1 ">+(239) 555-0108</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-3 gap-x-[75px] auto-rows-auto max-sm:hidden ">
                            <div >
                                <div className="text-white uppercase mb-2 text-sm leading-[150%]">By Email</div>
                                <div className="group cursor-pointer">
                                    <a className="text-gray-500 pt-0.5 pb-0.5 text-sm leading-[150%] no-underline transition-colors duration-300 flex group-hover:text-color-1">info@example.com</a>
                                </div>
                            </div>
                            <div >
                                <div className="text-white uppercase mb-2 text-sm leading-[150%]">By Phone</div>
                                <div className="group cursor-pointer">
                                    <a className="text-gray-500 pt-0.5 pb-0.5 text-sm leading-[150%] no-underline transition-colors duration-300 flex group-hover:text-color-1 ">+(239) 555-0108</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="border-t border-[rgba(255,255,255,.15)] pt-5 pb-5  ">
                    <div className="text-[#999] flex justify-between items-center text-sm leading-[150%] max-sm:flex max-sm:items-center max-sm:flex-col">
                        <div>© 2024 Cruise. All rights reserved.</div>
                        <div>Designed by <a className="cursor-pointer hover:text-color-1 duration-300">Nixar.</a> Powered by <a className="cursor-pointer hover:text-color-1 duration-300">Webflow.</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
