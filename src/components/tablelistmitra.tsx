import React from 'react'
import Image from "next/image";

function Tablelistmitra(
    { foto_profile, nama_mitra, paket_aktif, order_aktif, order_selesai }: { foto_profile: any, nama_mitra: any, paket_aktif: any, order_aktif: any, order_selesai: any }
) {
    return (
        <div className='flex'>
            <div className='flex w-screen h-full overflow-y-scroll py-3 '>
                <div className='flex flex-col gap-3 w-7/12 bg-neutral-200 rounded-md shadow-lg py-[15px] px-[15px]'>
                    <div className='flex'>
                        <Image
                            alt="logo1"
                            src={foto_profile}
                            height={176}
                            width={176}
                            className="flex-col shadow w-16 h-16 bg-zinc-300 rounded-full"
                        />
                        <label className='flex-col w-10/12 mt-4 ml-5 text-black text-2xl font-semibold'>
                            {nama_mitra}
                        </label>
                        <div className='flex-col w-2/12 gap-3'>
                            <button className='w-24 h-7  bg-amber-400 rounded-md text-center text-base text-white font-medium'>
                                Profile
                            </button>
                            <button className='w-24 h-7 mt-2 bg-amber-400 rounded-md text-center text-base text-white font-medium'>
                                Paket
                            </button>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col w-5/12 ml-5 bg-neutral-200 rounded-md shadow-lg'>
                    <div className='grid grid-cols-3'>
                        <div className='grid justify-items-center py-5'>
                            <label className='text-black text-2xl font-semibold'>
                                {paket_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-base font-semibold'>
                                Paket Aktif
                            </label>
                        </div>
                        <div className='grid justify-items-center py-5 '>
                            <label className='text-black text-2xl font-semibold'>
                                {order_aktif}
                            </label>
                            <label className='text-center text-neutral-500 text-base font-semibold'>
                                Order Aktif
                            </label>
                        </div>
                        <div className='grid justify-items-center py-5 '>
                            <label className='text-black text-2xl font-semibold'>
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
