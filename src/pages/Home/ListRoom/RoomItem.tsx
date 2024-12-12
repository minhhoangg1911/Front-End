import SimilarRoom from "./SimilarRoom"

const RoomItem = () => {
    return (
        <section >
            <div >
                <div className="grid grid-cols-2 auto-rows-auto gap-x-[30px] gap-y-[40px] max-sm:grid-cols-1">
                    <div className="flex group cursor-pointer">
                        <a className="flex flex-col gap-[15px] w-full no-underline">
                            <div className="overflow-hidden w-full rounded-[15px]">
                                <img
                                    className="object-cover w-full min-h-[480px] max-h-[480px] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90 max-md:min-h-[190px] max-md:max-h-[190px] max-sm:min-h-[230px] max-sm:max-h-[230px]"
                                    src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6e20c8d590035eff1b4b_room-main-01-p-800.jpg'
                                />
                            </div>
                            <div>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' className="" />
                                        <div>400 sq ft</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362814c672af61e24d8_ic-bed.svg' />
                                        <div>1 Bed</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d83620edef77fe22b05bb_ic-person.svg' />
                                        <div>1-3 People</div>
                                    </div>
                                </div>
                                <h4 className="mt-[12px] mb-0 text-color-3 text-[24px] font-normal" >Tranquil Oasis Retreat</h4>
                            </div>
                        </a>
                    </div>
                    <div className="flex group cursor-pointer">
                        <a className="flex flex-col gap-[15px] w-full no-underline">
                            <div className="overflow-hidden w-full rounded-[15px]">
                                <img
                                    className="object-cover w-full min-h-[480px] max-h-[480px] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90 max-md:min-h-[190px] max-md:max-h-[190px] max-sm:min-h-[230px] max-sm:max-h-[230px]"
                                    src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6e20c8d590035eff1b4b_room-main-01-p-800.jpg'
                                />
                            </div>
                            <div>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div>400 sq ft</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362814c672af61e24d8_ic-bed.svg' />
                                        <div>1 Bed</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d83620edef77fe22b05bb_ic-person.svg' />
                                        <div>1-3 People</div>
                                    </div>
                                </div>
                                <h4 className="mt-[12px] mb-0 text-color-3 text-[24px] font-normal" >Tranquil Oasis Retreat</h4>
                            </div>
                        </a>
                    </div>
                    <div className="flex group cursor-pointer">
                        <a className="flex flex-col gap-[15px] w-full no-underline">
                            <div className="overflow-hidden w-full rounded-[15px]">
                                <img
                                    className="object-cover w-full min-h-[480px] max-h-[480px] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90 max-md:min-h-[190px] max-md:max-h-[190px] max-sm:min-h-[230px] max-sm:max-h-[230px]"
                                    src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6e20c8d590035eff1b4b_room-main-01-p-800.jpg'
                                />
                            </div>
                            <div>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div>400 sq ft</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362814c672af61e24d8_ic-bed.svg' />
                                        <div>1 Bed</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d83620edef77fe22b05bb_ic-person.svg' />
                                        <div>1-3 People</div>
                                    </div>
                                </div>
                                <h4 className="mt-[12px] mb-0 text-color-3 text-[24px] font-normal" >Tranquil Oasis Retreat</h4>
                            </div>
                        </a>
                    </div>
                    <div className="flex group cursor-pointer">
                        <a className="flex flex-col gap-[15px] w-full no-underline">
                            <div className="overflow-hidden w-full rounded-[15px]">
                                <img
                                    className="object-cover w-full min-h-[480px] max-h-[480px] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90 max-md:min-h-[190px] max-md:max-h-[190px] max-sm:min-h-[230px] max-sm:max-h-[230px]"
                                    src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6e20c8d590035eff1b4b_room-main-01-p-800.jpg'
                                />
                            </div>
                            <div>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div>400 sq ft</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362814c672af61e24d8_ic-bed.svg' />
                                        <div>1 Bed</div>
                                    </div>
                                    <div className="flex items-center gap-[8px] text-sm leading-[1.5]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d83620edef77fe22b05bb_ic-person.svg' />
                                        <div>1-3 People</div>
                                    </div>
                                </div>
                                <h4 className="mt-[12px] mb-0 text-color-3 text-[24px] font-normal" >Tranquil Oasis Retreat</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomItem