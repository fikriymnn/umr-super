"use client"
import SideBar from "@/components/sideBar";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import TablePaketAktif from "@/components/tablelistpaketaktif";
// import axios from 'axios';


function PaketAktifMitra() {

    const [dataMitra, setDataMitra] = useState<any>(null);
    let id: any = "";
    useEffect(() => {
        // getuser();
    });
    return (
        <div className='flex'>
            <SideBar mitra="text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >
                <div>
                    <div className='flex '>
                        <div className='flex flex-col bg-white lg:w-5/12 w-4/12 lg:h-[650px] h-full shadow-xl rounded-lg px-8 pt-6 lg:pb-8 pb-12 ml-1 '>

                            <div className="flex flex-wrap justify-items-center justify-center">
                                {
                                    // dataMitra == null ? <div className="shadow w-44 h-44 bg-zinc-300 rounded-full">
                                    // </div> :
                                    <Image
                                        alt="logo1"
                                        src={'/profil.jpeg'}
                                        height={176}
                                        width={176}
                                        className="shadow lg:w-44 lg:h-44 w-28 h-28 bg-zinc-300 rounded-full"
                                    />
                                }
                            </div>
                            <div>
                                <label className="flex justify-items-center justify-center mt-[20px] text-black lg:text-2xl text-xl font-semibold  text-center">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_mitra} */}
                                    Noviar Haji Dan Umroh
                                </label>
                            </div>
                            <div className='flex mt-11'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Paket Aktif
                                    <span className="inline-block text-xl text-black  font-semibold ">
                                        4
                                    </span>
                                </label>

                            </div>
                            <div className='flex mt-8'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Order Aktif
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        2
                                    </span>
                                </label>

                            </div>
                            <div className='flex mt-8'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Paket Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        12
                                    </span>
                                </label>

                            </div>
                            <div className='flex mt-8'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Order Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        28
                                    </span>
                                </label>

                            </div>
                            <div className='flex mt-8'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Penilaian
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        50
                                    </span>
                                </label>

                            </div>
                        </div>

                        <div className='flex flex-col bg-white w-full lg:h-[750px] h-full shadow-xl rounded-lg   ml-[29px]'>
                            <div className="pl-8 py-6 pr-4">
                                <div>
                                    <label className="text-black text-2xl font-semibold">
                                        Paket Aktif
                                    </label>
                                </div>
                                <TablePaketAktif
                                    nomor={1}
                                    nama_paket={'Umroh Dream eksklusif Jaya Abadi anjay bang daffa'}
                                    harga_paket={'RP.39.000.000,00'}
                                    kuota={40}
                                    terdaftar={34}
                                    tersedia={100}
                                />
                                <TablePaketAktif
                                    nomor={2}
                                    nama_paket={'Umroh Dream bersama artis acep'}
                                    harga_paket={'RP.79.000.000,00'}
                                    kuota={4}
                                    terdaftar={2}
                                    tersedia={131}
                                />
                                <TablePaketAktif
                                    nomor={3}
                                    nama_paket={'Umroh Bersama Tiktokers tio'}
                                    harga_paket={'RP.109.000.000,00'}
                                    kuota={3}
                                    terdaftar={211}
                                    tersedia={3}
                                />
                                <TablePaketAktif
                                    nomor={4}
                                    nama_paket={'Umroh Bersama Tiktokers tio'}
                                    harga_paket={'RP.109.000.000,00'}
                                    kuota={3}
                                    terdaftar={211}
                                    tersedia={3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaketAktifMitra