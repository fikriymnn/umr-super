import React from 'react'
import Image from "next/image";

function TableOrderSelesai(
    { nomor, nama_paket, harga_paket, nama_pelanggan }: { nomor: any, nama_paket: any, harga_paket: any, nama_pelanggan: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-full  h-full overflow-y-scroll py-3 '>
                <div className='flex flex-col gap-3 w-full bg-neutral-200 rounded-md shadow-lg py-2 '>
                    <div className='flex'>
                        <div className='flex  lg:ml-6 ml-2'>
                            <label className=' lg:text-2xl text-xl font-semibold '>
                                {nomor}
                            </label>
                        </div>

                        <div className='flex lg:w-10/12 w-11/12 lg:pl-5 pl-2'>

                            <label className=' lg:text-2xl text-xl font-semibold '>
                                <div>
                                    <label>
                                        {nama_pelanggan}
                                    </label>
                                </div>
                                <div className='line-clamp-1'>
                                    {nama_paket}
                                </div>

                                <div>
                                    <label className='text-yellow-600 lg:text-xl text-base font-semibold'>
                                        {harga_paket}
                                    </label>
                                </div>
                            </label>

                        </div>

                        <div className='flex lg:w-2/12 justify-end justify-items-end pt-8 ml-3 pb-3'>
                            <button className="w-[55px] h-[33px] bg-amber-400 rounded-md text-center text-base text-white font-medium mr-5">
                                <Image
                                    alt="info"
                                    src={'/infobutton.png'}
                                    height={20}
                                    width={20}
                                    className="lg:ml-[15px] ml-[18px] lg:w-[25px] lg:h-[25px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TableOrderSelesai
