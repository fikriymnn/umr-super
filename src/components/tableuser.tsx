import React from 'react'
import Image from "next/image";

function TableUser(
    { foto_profile, nama_user, no_wa, email_user }: { foto_profile: any, nama_user: any, no_wa: any, email_user: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-screen h-full overflow-y-scroll py-3 '>
                <div className='flex flex-col gap-3 lg:w-6/12 w-8/12 bg-neutral-200 rounded-md shadow-lg py-[15px] px-[15px]'>

                    <div className='flex px-5 py-1 '>
                        <Image
                            alt="logo1"
                            src={foto_profile}
                            height={176}
                            width={176}
                            className="flex-col shadow w-20 h-20 bg-zinc-300 rounded-full"
                        />
                        <div className='px-5'>
                            <label className='flex-col w-10/12 mt-4 ml-5 text-black lg:text-2xl text-xl font-semibold'>
                                {nama_user}
                            </label>
                            <div className='mt-1'>
                                <label className='flex w-full justify-start pl-5 text-neutral-500 lg:text-base text-sm font-semibold'>
                                    {no_wa}
                                </label>
                            </div>
                            <div>
                                <label className='flex w-full justify-start pl-5 text-neutral-500 lg:text-base text-sm font-semibold'>
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
