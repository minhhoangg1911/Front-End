import { useState } from "react";
// import { CarouselApi } from "./ui/carousel";
// import { Button } from "./ui/button";




const Impact = () => {
    // const [api, setApi] = useState<CarouselApi | undefined>(undefined)
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const reviews = [
        {
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665dbbc5790482550e53b919_impact-01-p-500.jpg",
        },
        {
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665dbbc511117907f9512fb7_impact-03-p-500.jpg",
        },
        {

            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665dbbc5cd7eb463d15e5cde_impact-04-p-500.jpg",
        },


        {
            image: "https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665dbbc5a8d8bec5336227f5_impact-02-p-500.jpg",
        },

    ];


    return (
        <div className="container-xl mt-[150px] max-xs:mt-[50px]">
            <div>
                <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                    <div>
                        <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div className="font-Switzer">About us</div>
                        </div>
                        <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Who We Are</h2>
                    </div>
                </div>
            </div>
            <div className="flex gap-y-[24px] flex-col">
                <div className="grid gap-x-6 grid-rows-[auto] grid-cols-3 auto-cols-fr max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[20px]">
                    <div className="flex flex-col gap-y-[60px] justify-between items-stretch p-10 w-full rounded-[10px] bg-[#edeade]">
                        <div >
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665db386faa2c019686b8ede_ic-staff.svg' />
                        </div>
                        <div>
                            <h4 className="mb-5 leading-[150%] text-[24px] font-normal text-[#000]">Memorable Experiences</h4>
                            <p>Enim a diam id id. Arcu nec urna accumsan sit pellentesque. Suscipit sit sed mauris cras in Consequat eget varius massa.</p>
                        </div>
                    </div>
                    <div className="max-md:hidden">
                        <img className="rounded-[10px] object-cover w-full h-full" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665db3f51e980eb3ad92585f_impact-p-500.jpg' />
                    </div>
                    <div className="flex flex-col gap-y-[60px] justify-between items-stretch p-10 w-full rounded-[10px] bg-[#edeade]">
                        <div>
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665db4e49bee43795bc0894b_ic-experience.svg' />
                        </div>
                        <div>
                            <h4 className="mb-5 leading-[150%] text-[24px] font-normal text-[#000]">Memorable Experiences</h4>
                            <p>Enim a diam id id. Arcu nec urna accumsan sit pellentesque. Suscipit sit sed mauris cras in Consequat eget varius massa.</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-x-6  grid-rows-[auto] grid-cols-3 auto-cols-fr max-md:flex max-md:flex-col max-md:gap-[10px]">
                    <div className="row-span-1 col-span-2 relative ">
                        <div className="">
                            <div className="flex flex-col items-center">
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 rounded-[10px]"
                                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                    >
                                        {reviews.map((review, index) => (
                                            <div
                                                key={index}
                                                className="flex-[0_0_100%] rounded-[10px] overflow-hidden"
                                            >
                                                <img
                                                    src={review.image}
                                                    alt={`Review ${index}`}
                                                    className="object-cover w-full min-h-[450px] max-h-[450px] rounded-[10px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full mt-4 absolute top-0 bottom-0">
                                    <div className="bg-white rounded-full justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] transition-colors duration-300 flex bottom-[30px] right-[90px] absolute">
                                        <button onClick={handlePrevious}>
                                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665dbb5e145aefab24965c13_impact-left-arrow.svg' />
                                        </button>
                                    </div>

                                    <div className="bg-white rounded-full justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] transition-colors duration-300 flex bottom-[30px] right-[40px] absolute">
                                        <button onClick={handleNext}>
                                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665db78ae40c823a40cc84f4_impact-r-arrow.svg' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="gap-y-[60px] bg-[#edeade] rounded-[10px] flex flex-col justify-between items-stretch w-full p-[40px]">
                        <div>
                            <h4 className="border-b border-[rgba(0,0,0,.1)] mb-0 pb-[20px]">Be Part of Something Special</h4>
                        </div>
                        <div className="flex flex-col gap-y-[36px]">
                            <p>Rhoncus vitae molestie condimentum nibh nisl amet faucibus quam temp  Sem eget volutpat id pellentesque.</p>
                            <div className="flex  max-md:justify-start max-md:py-10 group  ">
                                <button className="flex items-center space-x-2 bg-color-1 rounded-full px-4 py-2">
                                    <span className="text-white">Collaborate Now</span>
                                </button>
                                <div className="button-arrow flex items-center justify-center w-8 h-8 border border-[rgba(0,0,0,0.1)] rounded-full relative  
                            group-hover:border-color-1
                            ">
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659a141cd01e5dd49d5f8ff_o-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Impact


