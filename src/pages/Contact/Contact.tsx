import { Checkbox } from "@/components/ui/checkbox"
import Question from "@/components/Question"
import Cta from "@/components/Cta"
const Contact = () => {
    return (
        <div className="container-xl">
            <div className="my-[50px]">
                <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                    <div className="font-Switzer">Get In Touch</div>
                </div>
                <h1 className="text-black text-[48px] font-Switzer font-normal max-sm:text-[30px] ">Contact us
                </h1>
            </div>

            <div className="flex gap-x-[60px] items-center max-lg:flex-col-reverse max-lg:items-start">
                <div className="w-full max-w-[50%] max-lg:max-w-[100%]">
                    <form>
                        <div className="grid gap-x-[30px] gap-y-[60px] grid-rows-auto grid-cols-2 auto-cols-[1fr] max-sm:grid-cols-1">
                            <div>
                                <label className="mb-[2px] text-[14px] font-normal leading-[1.5] flex ">First name*</label>
                                <input className="text-[#333] bg-transparent border-0 border-b border-black h-auto mb-0 pb-[5px] text-[14px] leading-[1.5] focus:outline-none w-full" />
                            </div>
                            <div>
                                <label className="mb-[2px] text-[14px] font-normal leading-[1.5] flex">
                                    Last name</label>
                                <input className="text-[#333] bg-transparent border-0 border-b border-black h-auto mb-0 pb-[5px] text-[14px] leading-[1.5] focus:outline-none w-full" />
                            </div>
                            <div>
                                <label className="mb-[2px] text-[14px] font-normal leading-[1.5] flex">Email address*
                                </label>
                                <input className="text-[#333] bg-transparent border-0 border-b border-black h-auto mb-0 pb-[5px] text-[14px] leading-[1.5] focus:outline-none w-full" />
                            </div>
                            <div>
                                <label className="mb-[2px] text-[14px] font-normal leading-[1.5] flex">Phone number</label>
                                <input className="text-[#333] bg-transparent border-0 border-b border-black h-auto mb-0 pb-[5px] text-[14px] leading-[1.5] focus:outline-none w-full" />
                            </div>

                            <div className="row-span-1 col-span-2">
                                <label className="mb-[2px] text-[14px] font-normal leading-[1.5] flex" >Write your message here *</label>
                                <textarea className="text-[#333] bg-transparent border-0 border-b border-black min-h-[120px] mb-0 pb-1 text-sm leading-[1.5] focus:outline-none w-full"></textarea>
                            </div>
                        </div>
                        <div className="mt-[40px] flex items-center justify-between max-sm:flex-col max-sm:items-start">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I here by agree to the Terms & Conditions of Cruise
                                </label>
                            </div>
                            <div className="flex group my-[40px] max-sm:my-[20px] ">
                                <button className="flex justify-center items-center text-white  border bg-color-1 rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                                    <a href='/prev-blog'>
                                        <span>Submit Now</span>
                                    </a>
                                </button>
                                <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-color-1">
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659a141cd01e5dd49d5f8ff_o-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white  absolute" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-full max-w-[50%] max-lg:max-w-[100%] max-lg:mb-10">
                    <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b5cf119bba8ff0ebcb64_contact.jpg' />
                </div>
            </div>

            <div className="my-[50px] flex gap-x-[60px] justify-normal items-start max-lg:flex-col">
                <div className="my-[50px] w-full max-w-[32%] max-lg:max-w-[60%] max-sm:max-w-[100%]">
                    <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                        <div className="font-Switzer">Contact us</div>
                    </div>
                    <h1 className="text-black text-[48px] font-Switzer font-normal max-sm:text-[30px] mb-[20px] ">We're here to help
                    </h1>
                    <p className="pt-[10px]">Your satisfaction is our top priority. Our team is available 24/7 to assist with any questions or concerns.</p>
                </div>
                <div className="flex gap-x-[30px] w-full max-w-[68%] max-lg:max-w-[100%] max-sm:flex-col max-sm:gap-y-[20px]">
                    <div className="flex gap-y-[60px] border border-[rgba(0,0,0,0.1)] w-full flex-col p-10 rounded-[10px] max-md:p-5">
                        <div className="flex w-full gap-x-[36px] justify-between items-start max-md:flex-col-reverse max-md:gap-y-[10px] max-sm:flex-row ">
                            <div>
                                <h4 className="mb-4 text-[#000000] text-[24px] max-md:text-[18px]">Reservations</h4>
                                <div>Secure your spot at Cruise today.</div>
                            </div>
                            <img className="max-md:min-w-[35px] max-md:max-w-[35px] max:md-min-h-[35px] max-md:max-h-[35px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659bdaaeeac755e48fd886c_ic-reservation.svg' />
                        </div>
                        <div className="flex flex-col gap-y-[25px]">
                            <div className="flex text-[#000] items-center gap-x-[20px] group">
                                <div className="border border-[rgba(0,0,0,0.1)] rounded-full justify-center items-center min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex">
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659beb54e39d4ed1129bc46_ic-call.svg' />
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <a className="group-hover:text-color-1 cursor-pointer duration-300">+(239) 555-0108</a>
                                </div>
                            </div>
                            <div className="flex text-[#000] items-center gap-x-[20px] group">
                                <div className="border border-[rgba(0,0,0,0.1)] rounded-full justify-center items-center min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex">
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659beb564d7d2a78303c497_ic-mailid.svg' />
                                </div>
                                <div>
                                    <div>Email</div>
                                    <a className="group-hover:text-color-1 cursor-pointer duration-300">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-y-[60px] border border-[rgba(0,0,0,0.1)] w-full flex-col p-10 rounded-[10px] max-md:p-5">
                        <div className="flex w-full gap-x-[36px] justify-between items-start max-md:flex-col-reverse max-md:gap-y-[10px] max-sm:flex-row">
                            <div>
                                <h4 className="mb-4 text-[#000000] text-[24px] max-md:text-[18px]">Support Anytime</h4>
                                <div>Support team is available 24/7</div>
                            </div>
                            <img className="max-md:min-w-[35px] max-md:max-w-[35px] max:md-min-h-[35px] max-md:max-h-[35px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659bda95501d3f434b5820f_ic-support.svg' />
                        </div>
                        <div className="flex flex-col gap-y-[25px]">
                            <div className="flex text-[#000] items-center gap-x-[20px] group">
                                <div className="border border-[rgba(0,0,0,0.1)] rounded-full justify-center items-center min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex">
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659beb54e39d4ed1129bc46_ic-call.svg' />
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <a className="group-hover:text-color-1 cursor-pointer duration-300">+(239) 555-0108</a>
                                </div>
                            </div>
                            <div className="flex text-[#000] items-center gap-x-[20px] group">
                                <div className="border border-[rgba(0,0,0,0.1)] rounded-full justify-center items-center min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex">
                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659beb564d7d2a78303c497_ic-mailid.svg' />
                                </div>
                                <div >
                                    <div>Email</div>
                                    <a className="group-hover:text-color-1 cursor-pointer duration-300">support@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Question />
            <Cta />
        </div>
    )
}

export default Contact