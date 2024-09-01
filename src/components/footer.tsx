export function Footer(){
    return(
        <>
            <div className="md:p-7 flex flex-col ">
                <div className="grid grid-cols-2 ">
                    <div className="text-base flex flex-col gap-3 mb-6">
                        <div className="font-semibold">
                            PHONE NUMBER
                        </div>
                        <div>
                            011-5128 8210
                        </div>
                    </div>
                    <div className="text-base flex flex-col gap-3 mb-6">
                        <div className="font-semibold">
                            EMAIL
                        </div>
                        <div>
                            junshenhere@gmail.com
                        </div>
                    </div>
                    <div className="text-base flex flex-col gap-3 mb-6">
                        <div className="font-semibold">
                            RESUME
                        </div>
                        <div>
                            Google Drive
                        </div>
                        <div>
                            Download
                        </div>
                    </div>
                    <div className="text-base flex flex-col gap-3 mb-6">
                        <div className="font-semibold">
                            LATEST UPDATE
                        </div>
                        <div>
                            1/9/2024
                        </div>
                    </div>
                </div>
                <div className="w-full border border-opacity-60 border-white" />
                <div className="w-full font-black text-[40px] sm:text-[60px] md:text-[85px] lg:text-[120px] xl:text-[150px] 2xl:text-[185px] text-center">DROP ME A LINE</div>
                <div className="flex flex-row justify-between sm:p-4 md:px-8">
                    <div className="hidden text-[11px] sm:block md:text-xs lg:text-base xl:text-lg">"Trying to be better"</div>
                    <div className="hidden md:block md:text-xs lg:text-base xl:text-lg">Kuala Lumpur (GMT+8)</div>
                    <div className="text-[11px] md:text-xs lg:text-base xl:text-lg">Designed & Coded by Jun Shen</div>
                    <div className="text-[11px] md:text-xs lg:text-base xl:text-lg">&copy; 2024 ALL RIGHTS RESERVED.</div>
                </div>
            </div>
        </>
    )
}