import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
const Review = () => {



    const reviews = [
        {
            text: "Porttitor nec ante rhoncus sed sed pharetra. Tellus natoque ac eget pretium. Accumsan in orci ultricies amet duis vel. Diam ac amet cursus proin id pellentesque enim pellentesque. Ac eleifend orci quisque donec suspendisse adipiscing sed consequat. Arcu lectus viverra varius ac convallis tristique.",
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e985901e2ba8adc4e7930_review-thumb-04.jpg",
            name: "John Doe",
            location: "New York, US",
        },
        {
            text: "Porttitor nec ante rhoncus sed sed pharetra. Tellus natoque ac eget pretium. Accumsan in orci ultricies amet duis vel. Diam ac amet cursus proin id pellentesque enim pellentesque. Ac eleifend orci quisque donec suspendisse adipiscing sed consequat. Arcu lectus viverra varius ac convallis tristique.",
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9859532d03a8f0c54a29_review-thumb-02.jpg",
            name: "Jane Smith",
            location: "California, US",
        },

        {
            text: "Porttitor nec ante rhoncus sed sed pharetra. Tellus natoque ac eget pretium. Accumsan in orci ultricies amet duis vel. Diam ac amet cursus proin id pellentesque enim pellentesque. Ac eleifend orci quisque donec suspendisse adipiscing sed consequat. Arcu lectus viverra varius ac convallis tristique.",
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9859b401a80d510d30b3_review-thumb-05.jpg",
            name: "Albert Flores",
            location: "Toronto, US",
        },
        {
            text: "Porttitor nec ante rhoncus sed sed pharetra. Tellus natoque ac eget pretium. Accumsan in orci ultricies amet duis vel. Diam ac amet cursus proin id pellentesque enim pellentesque. Ac eleifend orci quisque donec suspendisse adipiscing sed consequat. Arcu lectus viverra varius ac convallis tristique.",
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e980adbd4aea5f77fd488_review-thumb-01.jpg",
            name: "Emily Davis",
            location: "Florida, US",
        },
        {
            text: "Porttitor nec ante rhoncus sed sed pharetra. Tellus natoque ac eget pretium. Accumsan in orci ultricies amet duis vel. Diam ac amet cursus proin id pellentesque enim pellentesque. Ac eleifend orci quisque donec suspendisse adipiscing sed consequat. Arcu lectus viverra varius ac convallis tristique .",
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e98594f1d47db3f2c29b9_review-thumb-03.jpg",
            name: "Kristin Watson",
            location: "California, USA",
        },
    ];


    return (
        <section className="mt-[150px] max-xs:mt-[50px]">
            <div className="container-xl">
                <div className="flex gap-[60px] justify-between items-end mb-[20px]">
                    <div>
                        <div className="mb-[5px] flex gap-[6px] text-color-1 uppercase items-center leading-[1.2] text-[14px]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div>Testimonials</div>
                        </div>
                        <h2 className="text-[#000] uppercase text-[36px] font-normal leading-[1.5] mt-0">Customers Reviews</h2>
                    </div>
                    <div className="flex group  mt-[40px] max-md:hidden">
                        <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                            <span>View All Reviews</span>
                        </button>
                        <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-[30px] overflow-hidden max-lg:flex-col">
                    <div>
                        <img className="h-auto max-w-none rounded-[10px] max-lg:w-full max-lg:min-h-[600px] max-lg:max-h-[600px] max-sm:max-h-[390px] max-sm:min-h-[390px] max-sm:object-[50%_100%]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e95f461757bfcb72bc4dd_testimonial-p-500.jpg' />
                    </div>
                    <div className="">
                        <div className="">
                            <Carousel className="">
                                <CarouselContent>
                                    {reviews.map((review, index) => (
                                        <CarouselItem key={index}>
                                            <div className="bg-transparent border border-black/10 rounded-lg w-full max-w-[68%] h-auto max-lg:max-w-full">
                                                <div className="align-top whitespace-normal text-left w-full h-full inline-block relative">
                                                    <div className="gap-[35px] flex flex-col justify-center items-stretch w-full p-[100px_45px] h-[595px]">
                                                        <p className="border-b border-black/10 mb-0 pb-[35px] text-[20px] leading-[170%]">
                                                            {review.text}
                                                        </p>
                                                        <div className="gap-[14px] items-center text-[14px] leading-[150%] flex">
                                                            <div className="bg-[#edeade] rounded-full w-[60px] h-[60px] overflow-hidden">
                                                                <img src={review.image} alt={review.name} />
                                                            </div>
                                                            <div>
                                                                <div className="text-[16px] leading-[170%]">{review.name}</div>
                                                                <div>{review.location}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-[#fffdf5] border border-black/20 rounded-full justify-center items-center w-[42px] h-[42px] transition-colors duration-300 flex absolute top-[400px] left-[650px] max-lg:left-[80%]  max-sm:top-[450px] max-sm:left-[75%] max-xs:top-[550px] max-xs:left-[70%] " />
                                <CarouselNext className="bg-[#fffdf5] border border-black/20 rounded-full justify-center items-center w-[42px] h-[42px] transition-colors duration-300 flex absolute  right-[420px] top-[400px] max-lg:right-[5%] max-sm:top-[450px] max-xs:top-[550px]" />
                            </Carousel>

                        </div>

                    </div>
                </div>
                <div className=" group  mt-[40px] hidden max-md:flex justify-end" >
                    <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                        <span>View All Reviews</span>
                    </button>
                    <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review