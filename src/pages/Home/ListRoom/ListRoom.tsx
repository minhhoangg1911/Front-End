import RoomItem from "./RoomItem"

const ListRoom = () => {
    return (
        <div className="list-room container-xl ">
            <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                <div>
                    <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                        <div className="font-Switzer">Luxury Comfort</div>
                    </div>
                    <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Explore Room</h2>
                </div>
                <div className="flex group  mt-[40px] max-md:hidden">
                    <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                        <span>View All Rooms</span>
                    </button>
                    <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                    </div>
                </div>
            </div>
            <RoomItem />
            <div className="hidden  group  mt-[40px] max-md:justify-end  max-md:flex">
                <button className="flex justify-center items-center text-black bg-transparent border border-black rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                    <span>View All Rooms</span>
                </button>
                <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                    <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                </div>
            </div>
        </div>
    )
}

export default ListRoom