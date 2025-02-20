
const Team = () => {
    return (
        <div className="mt-[150px] container-xl max-xs:mt-[50px]">
            <div>
                <div className="sub-heading flex justify-between items-end gap-[60px] mb-5">
                    <div>
                        <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                            <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                            <div className="font-Switzer">Meet Our Team</div>
                        </div>
                        <h2 className="text-black text-[36px] font-Switzer font-normal uppercase">Team Members</h2>
                    </div>
                </div>
                <div className="grid gap-x-6 grid-cols-4 auto-cols-fr max-lg:grid-cols-2">
                    <div >
                        <div className="flex flex-col gap-y-[10px] leading-[150%] text-[14px]">
                            <div >
                                <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9d6fd08f0a18924f137a_team-thumb-01-p-500.jpg' />
                            </div>
                            <div>
                                <div className="text-[18px] text-[%000] leading-[170%]">Esther Howards</div>
                                <div>Founder & CEO</div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex flex-col gap-y-[10px] leading-[150%] text-[14px]">
                            <div >
                                <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9d6f2e969fbdbce162bd_team-thumb-02.jpg' />
                            </div>
                            <div>
                                <div className="text-[18px] text-[%000] leading-[170%]">Brooklyn Simmons</div>
                                <div>Chief Innovation Officer</div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex flex-col gap-y-[10px] leading-[150%] text-[14px]">
                            <div >
                                <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9d6fd08f0a18924f1376_team-thumb-03.jpg' />
                            </div>
                            <div>
                                <div className="text-[18px] text-[%000] leading-[170%]">Darlene Robertson</div>
                                <div>Management Director</div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex flex-col gap-y-[10px] leading-[150%] text-[14px]">
                            <div >
                                <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665e9d6fd96c5388f926e2c3_team-thumb-04.jpg' />
                            </div>
                            <div>
                                <div className="text-[18px] text-[%000] leading-[170%]">Ronald Richards</div>
                                <div>Financial Analyst</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team