"use client"
import SideBar from "@/components/sideBar";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
// import axios from 'axios';


function ProfileMitra() {

    const [dataMitra, setDataMitra] = useState<any>(null);
    let id: any = "";
    useEffect(() => {
        // getuser();
    });

    // async function getuser() {
    //     try {
    //         const res = await axios.get("http://localhost:5000/api/user", { withCredentials: true });
    //         if (res.data.success == true) {
    //             getdetailuser(res.data.data._id)
    //         }
    //         id = res.data.data._id;
    //     } catch (error: any) {
    //         console.log(error.response);
    //     }
    // }
    // async function getdetailuser(id: any) {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/api/mitra/${id}`);
    //         if (res.data.success == true) {
    //             setDataMitra(res.data.data)
    //         }
    //         id = res.data.data._id;
    //     } catch (error: any) {
    //         console.log(error.response);
    //     }
    // }

    return (
        <div className='flex'>
            <SideBar mitra="text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >

                <div>

                    <div className='flex '>
                        <div className='flex flex-col bg-white lg:w-5/12 w-6/12 h-full shadow-xl rounded-lg px-8 pt-6 lg:pb-9  pb-20'>

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
                            <div className='grid grid-cols-2 mt-11'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Paket Aktif
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        4
                                    </span>
                                </label>
                                <div className="grid justify-end mt-3">
                                    <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href='/mitra/profilemitra/paketaktifmitra'>
                                            <Image
                                                alt="Detail Paket Aktif"
                                                src={'/infobutton.png'}
                                                height={25}
                                                width={25}
                                                className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Order Aktif
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        2
                                    </span>
                                </label>
                                <div className="grid justify-end mt-3">
                                    <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href=''>
                                            <Image
                                                alt="info"
                                                src={'/infobutton.png'}
                                                height={25}
                                                width={25}
                                                className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Paket Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        12
                                    </span>
                                </label>
                                <div className="grid justify-end mt-3">
                                    <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href='/mitra/profilemitra/paketselesai'>
                                            <Image
                                                alt="info"
                                                src={'/infobutton.png'}
                                                height={25}
                                                width={25}
                                                className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Order Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        28
                                    </span>
                                </label>
                                <div className="grid justify-end mt-3">
                                    <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href='/mitra/profilemitra/orderselesai'>
                                            <Image
                                                alt="info"
                                                src={'/infobutton.png'}
                                                height={25}
                                                width={25}
                                                className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>

                                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                                    Penilaian
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        50
                                    </span>
                                </label>
                                <div className="grid justify-end mt-3">
                                    <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href=''>
                                            <Image
                                                alt="info"
                                                src={'/infobutton.png'}
                                                height={25}
                                                width={25}
                                                className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col bg-white w-full h-full shadow-xl rounded-lg   pl-[71px] pr-[32px] pt-[50px] lg:pb-16 pb-10 ml-[29px]'>

                            <div className='grid grid-cols-2'>

                                <label className="grid w-60 h-7 lg:text-xl text-lg text-black  font-normal">
                                    Nama Mitra
                                </label>

                            </div>
                            <div>
                                <label className="w-60 h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_mitra} */}
                                    Noviar Haji Dan Umroh
                                </label>
                            </div>

                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Nama Perusahaan
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_pt} */}
                                    PT. Noviar Haji Dan Umroh
                                </label>
                            </div>

                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.no_izin_umroh} */}
                                    109820212
                                </label>
                            </div>
                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.location} */}
                                    Bandung
                                </label>
                            </div>
                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.email} */}
                                    tio@mail.com
                                </label>
                            </div>
                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.website} */}
                                    noviartio.com
                                </label>
                            </div>

                            <div className='lg:mt-[24px] mt-4'>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                                    Rating
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.rating}/5 */}
                                    5/5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileMitra