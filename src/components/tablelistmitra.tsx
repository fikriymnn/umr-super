import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Tablelistmitra(
    { id, foto_profile, nama_mitra, paket_aktif, order_aktif, order_selesai }: { id: any, foto_profile: any, nama_mitra: any, paket_aktif: any, order_aktif: any, order_selesai: any }
) {
    return (
        <div className='flex'>
            <div className='grid grid-cols-12 w-screen h-full overflow-y-scroll py-2 gap-5'>
                <div className='flex flex-col  bg-neutral-200 rounded-md shadow-lg lg:py-[8px] pt-2 px-[15px] relative col-span-8'>
                    <div className='grid grid-cols-12'>
                        <img
                            alt="logo1"
                            src={foto_profile}
                            height={196}
                            width={196}
                            className="flex-col shadow lg:w-16 lg:h-16 w-12 h-12 bg-zinc-300 rounded-full lg:mt-0 mt-3 col-span-1"
                        />
                        <div className='flex-col w-10/12 py-2 ml-5 pt-5 items-center col-span-9'>
                            <label className=' text-black text-xl lg:text-2xl font-semibold line-clamp-1'>
                                {nama_mitra}
                            </label>
                        </div>
                        <div className='flex-col  gap-3 items-center lg:py-1 pt-2 col-span-2'>
                            <button className='lg:w-24 lg:h-7 w-14 h-5 bg-amber-400 rounded-md text-center lg:text-base text-xs text-white font-medium'>
                                <Link href={`/mitra/profilemitra/${id}`}>
                                    Profile
                                </Link>
                            </button>
                            <button className='lg:w-24 lg:h-7 w-14 h-5 mt-2 bg-amber-400 rounded-md text-center lg:text-base text-xs text-white font-medium'>
                                Paket
                            </button>
                        </div>

                    </div>

                </div>
                <div className=' bg-neutral-200 rounded-md shadow-lg col-span-4'>
                    <div className='grid grid-cols-3  px-4 py-4'>
                        <div className='grid justify-center items-center'>
                            <label className='text-black lg:text-2xl text-xl font-semibold'>
                                {paket_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-sm font-semibold'>
                                Paket Aktif
                            </label>
                        </div>
                        <div className='grid justify-center items-center'>
                            <label className='text-black lg:text-2xl text-xl  font-semibold'>
                                {order_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-sm font-semibold'>
                                Order Aktif
                            </label>
                        </div>
                        <div className='grid justify-center items-center'>
                            <label className='text-black lg:text-2xl text-xl  font-semibold'>
                                {order_selesai}
                            </label>
                            <label className='text-center text-neutral-500 text-sm font-semibold'>
                                Order Selesai
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tablelistmitra
