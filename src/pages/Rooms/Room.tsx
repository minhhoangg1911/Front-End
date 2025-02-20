import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { fetchRooms } from '@/utils/api/hotel';
interface Room {
    id: number;
    roomName: string;
    image: string;
    areaSqFt: number;
    bed: number;
    capacity: number;
    price: number;
}

const Room = () => {
    const [limit,] = useState<number>(6);
    const [offset,] = useState<number>(0);

    const { data } = useQuery<Room[]>({
        queryKey: ['rooms', limit, offset],
        queryFn: () => fetchRooms(limit, offset),
    });


    return (
        <div className="container-xl mt-[100px]">
            <div className="list-room container-xl ">
                <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                    <div>
                        <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div className="font-Switzer">Luxury Comfort</div>
                        </div>
                        <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Explore Room</h2>
                    </div>

                </div>
                <div >
                    <div className="grid grid-cols-2 auto-rows-auto gap-x-[30px] gap-y-[40px] max-sm:grid-cols-1">
                        {data?.length && data?.map((item: Room, index: number) => {
                            return (
                                <div key={index} className="flex group cursor-pointer">
                                    <NavLink to={`/room-detail/${item.id}`} className="flex flex-col gap-[15px] w-full no-underline">
                                        <div className="overflow-hidden w-full rounded-[15px]">
                                            <img
                                                className="object-cover w-full min-h-[480px] max-h-[480px] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90 max-md:min-h-[190px] max-md:max-h-[190px] max-sm:min-h-[230px] max-sm:max-h-[230px]"
                                                src={item.image}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex gap-[20px]">
                                                <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' className="" />
                                                    <div>{item.areaSqFt} sq ft</div>
                                                </div>
                                                <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362814c672af61e24d8_ic-bed.svg' />
                                                    <div>{item.bed} Bed</div>
                                                </div>
                                                <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                                    <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d83620edef77fe22b05bb_ic-person.svg' />
                                                    <div>{item.capacity} People</div>
                                                </div>
                                            </div>
                                            <h4 className="mt-[12px] mb-0 text-color-3 text-[24px] font-normal" >{item.roomName}</h4>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="flex group mb-[40px] mt-[40px] justify-end  max-md:flex">
                    <button
                        className="flex justify-center items-center text-white  border bg-color-1 rounded-full px-5 py-2.5 text-sm leading-[1.2] no-underline transition-colors duration-300">
                        <NavLink to="/prev-room" >Next</NavLink>
                    </button>
                    <div className="flex cursor-pointer justify-center items-center border border-[rgba(0,0,0,0.1)] rounded-full w-[37px] h-[37px] relative overflow-hidden group-hover:border-[rgba(0,0,0)]">
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66599c3a19bedbe57ff6639f_button-arrow.svg" alt="Arrow" className="w-4 h-4 arrow transition-transform duration-300 text-white " />
                        <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659a141cd01e5dd49d5f8ff_o-arrow.svg" alt="Arrow" className="w-4 h-4 arrow-1 transition-transform duration-300 translate-x-[-1.1rem] translate-y-[1.1rem] text-white   absolute" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room