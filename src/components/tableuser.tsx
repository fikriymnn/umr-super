import React from 'react'
import Image from "next/image";

function TableUser(
    { foto_profile, nama_user, no_wa, email_user }: { foto_profile: any, nama_user: any, no_wa: any, email_user: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-screen overflow-y-scroll py-2 '>
                <div className='flex flex-col  lg:w-6/12 w-8/12 bg-neutral-200 rounded-md shadow-lg lg:py-[12px] lg:px-[8px] py-2 px-2'>

                    <div className='flex px-5 w-full'>
                        <Image
                            alt="logo1"
                            src={foto_profile}
                            height={176}
                            width={176}
                            className="shadow w-20 h-20 bg-zinc-300 rounded-full"
                        />
                        <div className='grid grid-rows-3 grid-cols-1 px-5'>
                            <label className='grid w-full ml-5 text-black line-clamp-1 lg:text-2xl text-xl font-semibold'>
                                {nama_user}
                            </label>
                            <div className='grid mt-2'>
                                <label className='grid justify-start pl-5 text-neutral-500 lg:text-base text-sm font-semibold'>
                                    {no_wa}
                                </label>
                            </div>
                            <div>
                                <label className='grid justify-start pl-5 text-neutral-500 lg:text-base text-sm font-semibold'>
                                    {email_user}
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableUser
