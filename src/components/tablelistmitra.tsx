import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Tablelistmitra(
    { foto_profile, nama_mitra, paket_aktif, order_aktif, order_selesai }: { foto_profile: any, nama_mitra: any, paket_aktif: any, order_aktif: any, order_selesai: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-screen h-full overflow-y-scroll py-2 '>
                <div className='flex flex-col gap-3 w-7/12 bg-neutral-200 rounded-md shadow-lg lg:py-[8px] pt-2 px-[15px] relative'>
                    <div className='flex'>
                        <Image
                            alt="logo1"
                            src={foto_profile}
                            height={196}
                            width={196}
                            className="flex-col shadow lg:w-16 lg:h-16 w-12 h-12 bg-zinc-300 rounded-full lg:mt-0 mt-3"
                        />
                        <div className='flex-col w-10/12 py-2 ml-5  items-center'>
                            <label className=' text-black text-xl lg:text-2xl font-semibold line-clamp-1'>
                                {nama_mitra}
                            </label>
                        </div>

                        <div className='flex-col w-2/12 gap-3 items-center lg:py-1 pt-2'>
                            <button className='lg:w-24 lg:h-7 w-14 h-5 bg-amber-400 rounded-md text-center lg:text-base text-xs text-white font-medium'>
                                <Link href='/mitra/profilemitra'>
                                    Profile
                                </Link>
                            </button>
                            <button className='lg:w-24 lg:h-7 w-14 h-5 mt-2 bg-amber-400 rounded-md text-center lg:text-base text-xs text-white font-medium'>
                                Paket
                            </button>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col w-5/12 ml-5 bg-neutral-200 rounded-md shadow-lg'>
                    <div className='grid grid-cols-3'>
                        <div className='grid justify-items-center lg:py-5 py-2'>
                            <label className='text-black lg:text-2xl text-xl font-semibold'>
                                {paket_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-base font-semibold'>
                                Paket Aktif
                            </label>
                        </div>
                        <div className='grid justify-items-center lg:py-5 py-2'>
                            <label className='text-black lg:text-2xl text-xl  font-semibold'>
                                {order_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-base font-semibold'>
                                Order Aktif
                            </label>
                        </div>
                        <div className='grid justify-items-center lg:py-5 py-2'>
                            <label className='text-black lg:text-2xl text-xl  font-semibold'>
                                {order_selesai}
                            </label>
                            <label className='text-center text-neutral-500 text-base font-semibold'>
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
