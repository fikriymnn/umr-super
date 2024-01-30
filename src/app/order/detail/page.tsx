"use client"
import SideBar from "@/components/sideBar";
import Link from "next/link";
import React, { useEffect, useState } from 'react'

function DetailOrder() {
    return (
        <div className='flex'>
            <SideBar order="text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >
                <div>
                    <div className='flex '>
                        <div className='flex flex-col bg-white w-full h-full shadow-xl rounded-lg px-8 lg:pt-8 pt-5 lg:pb-14 pb-11'>

                            <div className="grid grid-cols-2">
                                <label className="grid text-black lg:text-2xl text-xl font-semibold">
                                    Detail Order
                                </label>
                                <div className="grid justify-end justify-items-end ">
                                    <Link href={'/order'}>
                                        <button className="px-2 py-2 bg-amber-400 rounded-md font-semibold text-white">
                                            Kembali
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="text-neutral-700 text-base font-medium">
                                    Nama Pemesan
                                </label>
                            </div>
                            <div>
                                <label className="text-black lg:text-2xl text-xl font-semibold">
                                    Acep Wahyu Kurna
                                </label>
                            </div>
                            <div className="mt-5">
                                <label className="text-neutral-700 text-base font-medium">
                                    Jumlah Jamaah
                                </label>
                            </div>
                            <div>
                                <label className="text-black lg:text-2xl text-xl font-semibold">
                                    4
                                </label>
                            </div>

                            <div className="mt-3">
                                <label className="text-neutral-700 text-base font-medium">
                                    Nama Paket
                                </label>
                            </div>
                            <div>
                                <label className="text-black lg:text-2xl text-xl font-semibold">
                                    Paket umroh untuk kalangan atas
                                </label>
                            </div>
                            <div className="mt-3">
                                <label className="text-neutral-700 text-base font-medium">
                                    Status
                                </label>
                            </div>
                            <div>
                                <label className="text-black lg:text-2xl text-xl font-semibold">
                                    Belum Lunas
                                </label>
                            </div>
                            <div className="mt-3">
                                <label className="text-neutral-700 text-base font-medium">
                                    Harga
                                </label>
                            </div>
                            <div>
                                <label className="text-yellow-600 lg:text-2xl text-xl font-semibold">
                                    RP.39.000.000,00
                                </label>
                            </div>
                            <div className="mt-7">
                                <button className="px-2 py-2 bg-amber-400 rounded-md font-semibold text-white">
                                    Accept
                                </button>
                                <button className="px-2 py-2 ml-3 bg-red-600 rounded-md font-semibold text-white">
                                    Decline
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailOrder