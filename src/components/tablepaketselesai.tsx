import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function TablePaketSelesai(
    { nomor, nama_paket, harga_paket, kuota, terdaftar }: { nomor: any, nama_paket: any, harga_paket: any, kuota: any, terdaftar: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-full  h-full overflow-y-scroll py-3 '>
                <div className='flex flex-col gap-3 w-full bg-neutral-200 rounded-md shadow-lg py-2 '>
                    <div className='flex'>
                        <div className='flex  lg:ml-6 ml-2'>
                            <label className=' lg:text-2xl text-xl font-semibold'>
                                {nomor}
                            </label>
                        </div>
                        <div className='flex lg:w-10/12 w-11/12 lg:pl-5 pl-2'>
                            <label className=' lg:text-2xl text-xl font-semibold  '>
                                <div className='line-clamp-1'>
                                    {nama_paket}
                                </div>

                                <div>
                                    <label className='text-yellow-600 text-xl font-semibold'>
                                        {harga_paket}
                                    </label>
                                    <div className='flex lg:w-[300px] w-full'>
                                        <label className='flex w-full  text-neutral-500 lg:text-xl text-base font-semibold'>
                                            {kuota}
                                            <p className='pl-1 pr-3'>
                                                Kuota
                                            </p>
                                        </label>
                                        <label className='flex w-full justify-center text-neutral-500 lg:text-xl text-base font-semibold'>
                                            {terdaftar}
                                            <p className='pl-1'>
                                                Terdaftar
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </label>

                        </div>

                        <div className='flex lg:w-2/12 justify-end justify-items-end lg:pt-8 pt-6 ml-3 lg:pb-3 lg:mr-2 mr-2'>
                            <button className="w-[55px] h-[33px] bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                <Link href='/mitra/profilemitra/paketselesai/detailpaketselesai'>
                                    <Image
                                        alt="info"
                                        src={'/infobutton.png'}
                                        height={25}
                                        width={25}
                                        className="lg:ml-[15px] ml-[15px]"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TablePaketSelesai
