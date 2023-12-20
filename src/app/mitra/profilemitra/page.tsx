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
                        <div className='flex flex-col bg-white w-5/12 h-[710px] shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4'>

                            <div className="flex flex-wrap justify-items-center justify-center">
                                {
                                    // dataMitra == null ? <div className="shadow w-44 h-44 bg-zinc-300 rounded-full">

                                    // </div> :
                                    <Image
                                        alt="logo1"
                                        src={'/profil.jpeg'}
                                        height={176}
                                        width={176}
                                        className="shadow w-44 h-44 bg-zinc-300 rounded-full"
                                    />
                                }

                            </div>
                            <div>
                                <label className="flex justify-items-center justify-center mt-[20px] text-black text-2xl font-semibold  text-center">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_mitra} */}
                                    Noviar Haji Dan Umroh
                                </label>
                            </div>
                            <div className='grid grid-cols-2 mt-11'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Paket Aktif
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        4
                                    </span>
                                </label>
                                <div className="grid justify-end">
                                    <svg
                                        className="cursor-pointer mt-2"
                                        width="58"
                                        height="33"
                                        viewBox="0 0 58 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57.5481" height="33" rx="5" fill="#E3B02B" />
                                        <path d="M28.5481 7C26.5703 7 24.6369 7.58649 22.9924 8.6853C21.3479 9.78412 20.0662 11.3459 19.3093 13.1732C18.5524 15.0004 18.3544 17.0111 18.7402 18.9509C19.1261 20.8907 20.0785 22.6725 21.477 24.0711C22.8756 25.4696 24.6574 26.422 26.5972 26.8079C28.537 27.1937 30.5477 26.9957 32.3749 26.2388C34.2022 25.4819 35.764 24.2002 36.8628 22.5557C37.9616 20.9112 38.5481 18.9778 38.5481 17C38.5452 14.3487 37.4906 11.8069 35.6159 9.93219C33.7412 8.05746 31.1994 7.00295 28.5481 7ZM28.5481 25C26.9658 25 25.4191 24.5308 24.1035 23.6518C22.7879 22.7727 21.7626 21.5233 21.1571 20.0615C20.5516 18.5997 20.3931 16.9911 20.7018 15.4393C21.0105 13.8874 21.7724 12.462 22.8912 11.3431C24.0101 10.2243 25.4355 9.4624 26.9874 9.15372C28.5392 8.84504 30.1478 9.00346 31.6096 9.60896C33.0714 10.2145 34.3208 11.2398 35.1999 12.5554C36.0789 13.871 36.5481 15.4177 36.5481 17C36.5457 19.121 35.702 21.1544 34.2023 22.6542C32.7025 24.1539 30.6691 24.9976 28.5481 25ZM28.5481 16.5C28.2829 16.5 28.0285 16.6054 27.841 16.7929C27.6535 16.9804 27.5481 17.2348 27.5481 17.5V20.5C27.5481 20.7652 27.6535 21.0196 27.841 21.2071C28.0285 21.3946 28.2829 21.5 28.5481 21.5C28.8133 21.5 29.0677 21.3946 29.2552 21.2071C29.4427 21.0196 29.5481 20.7652 29.5481 20.5V17.5C29.5481 17.2348 29.4427 16.9804 29.2552 16.7929C29.0677 16.6054 28.8133 16.5 28.5481 16.5ZM28.5481 12.5C28.3009 12.5 28.0592 12.5733 27.8536 12.7107C27.6481 12.848 27.4879 13.0432 27.3933 13.2716C27.2986 13.5001 27.2739 13.7514 27.3221 13.9939C27.3703 14.2363 27.4894 14.4591 27.6642 14.6339C27.839 14.8087 28.0618 14.9278 28.3042 14.976C28.5467 15.0242 28.798 14.9995 29.0265 14.9048C29.2549 14.8102 29.4501 14.65 29.5874 14.4445C29.7248 14.2389 29.7981 13.9972 29.7981 13.75C29.7981 13.4185 29.6664 13.1005 29.432 12.8661C29.1976 12.6317 28.8796 12.5 28.5481 12.5Z" fill="white" />
                                        <button className="hidden">

                                        </button>
                                    </svg>

                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-6'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Order Aktif
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        2
                                    </span>
                                </label>
                                <div className="grid justify-end">
                                    <svg
                                        className="cursor-pointer mt-2"
                                        width="58"
                                        height="33"
                                        viewBox="0 0 58 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57.5481" height="33" rx="5" fill="#E3B02B" />
                                        <path d="M28.5481 7C26.5703 7 24.6369 7.58649 22.9924 8.6853C21.3479 9.78412 20.0662 11.3459 19.3093 13.1732C18.5524 15.0004 18.3544 17.0111 18.7402 18.9509C19.1261 20.8907 20.0785 22.6725 21.477 24.0711C22.8756 25.4696 24.6574 26.422 26.5972 26.8079C28.537 27.1937 30.5477 26.9957 32.3749 26.2388C34.2022 25.4819 35.764 24.2002 36.8628 22.5557C37.9616 20.9112 38.5481 18.9778 38.5481 17C38.5452 14.3487 37.4906 11.8069 35.6159 9.93219C33.7412 8.05746 31.1994 7.00295 28.5481 7ZM28.5481 25C26.9658 25 25.4191 24.5308 24.1035 23.6518C22.7879 22.7727 21.7626 21.5233 21.1571 20.0615C20.5516 18.5997 20.3931 16.9911 20.7018 15.4393C21.0105 13.8874 21.7724 12.462 22.8912 11.3431C24.0101 10.2243 25.4355 9.4624 26.9874 9.15372C28.5392 8.84504 30.1478 9.00346 31.6096 9.60896C33.0714 10.2145 34.3208 11.2398 35.1999 12.5554C36.0789 13.871 36.5481 15.4177 36.5481 17C36.5457 19.121 35.702 21.1544 34.2023 22.6542C32.7025 24.1539 30.6691 24.9976 28.5481 25ZM28.5481 16.5C28.2829 16.5 28.0285 16.6054 27.841 16.7929C27.6535 16.9804 27.5481 17.2348 27.5481 17.5V20.5C27.5481 20.7652 27.6535 21.0196 27.841 21.2071C28.0285 21.3946 28.2829 21.5 28.5481 21.5C28.8133 21.5 29.0677 21.3946 29.2552 21.2071C29.4427 21.0196 29.5481 20.7652 29.5481 20.5V17.5C29.5481 17.2348 29.4427 16.9804 29.2552 16.7929C29.0677 16.6054 28.8133 16.5 28.5481 16.5ZM28.5481 12.5C28.3009 12.5 28.0592 12.5733 27.8536 12.7107C27.6481 12.848 27.4879 13.0432 27.3933 13.2716C27.2986 13.5001 27.2739 13.7514 27.3221 13.9939C27.3703 14.2363 27.4894 14.4591 27.6642 14.6339C27.839 14.8087 28.0618 14.9278 28.3042 14.976C28.5467 15.0242 28.798 14.9995 29.0265 14.9048C29.2549 14.8102 29.4501 14.65 29.5874 14.4445C29.7248 14.2389 29.7981 13.9972 29.7981 13.75C29.7981 13.4185 29.6664 13.1005 29.432 12.8661C29.1976 12.6317 28.8796 12.5 28.5481 12.5Z" fill="white" />
                                        <button className="hidden">

                                        </button>
                                    </svg>

                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-6'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Paket Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        12
                                    </span>
                                </label>
                                <div className="grid justify-end">
                                    <svg
                                        className="cursor-pointer mt-2"
                                        width="58"
                                        height="33"
                                        viewBox="0 0 58 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57.5481" height="33" rx="5" fill="#E3B02B" />
                                        <path d="M28.5481 7C26.5703 7 24.6369 7.58649 22.9924 8.6853C21.3479 9.78412 20.0662 11.3459 19.3093 13.1732C18.5524 15.0004 18.3544 17.0111 18.7402 18.9509C19.1261 20.8907 20.0785 22.6725 21.477 24.0711C22.8756 25.4696 24.6574 26.422 26.5972 26.8079C28.537 27.1937 30.5477 26.9957 32.3749 26.2388C34.2022 25.4819 35.764 24.2002 36.8628 22.5557C37.9616 20.9112 38.5481 18.9778 38.5481 17C38.5452 14.3487 37.4906 11.8069 35.6159 9.93219C33.7412 8.05746 31.1994 7.00295 28.5481 7ZM28.5481 25C26.9658 25 25.4191 24.5308 24.1035 23.6518C22.7879 22.7727 21.7626 21.5233 21.1571 20.0615C20.5516 18.5997 20.3931 16.9911 20.7018 15.4393C21.0105 13.8874 21.7724 12.462 22.8912 11.3431C24.0101 10.2243 25.4355 9.4624 26.9874 9.15372C28.5392 8.84504 30.1478 9.00346 31.6096 9.60896C33.0714 10.2145 34.3208 11.2398 35.1999 12.5554C36.0789 13.871 36.5481 15.4177 36.5481 17C36.5457 19.121 35.702 21.1544 34.2023 22.6542C32.7025 24.1539 30.6691 24.9976 28.5481 25ZM28.5481 16.5C28.2829 16.5 28.0285 16.6054 27.841 16.7929C27.6535 16.9804 27.5481 17.2348 27.5481 17.5V20.5C27.5481 20.7652 27.6535 21.0196 27.841 21.2071C28.0285 21.3946 28.2829 21.5 28.5481 21.5C28.8133 21.5 29.0677 21.3946 29.2552 21.2071C29.4427 21.0196 29.5481 20.7652 29.5481 20.5V17.5C29.5481 17.2348 29.4427 16.9804 29.2552 16.7929C29.0677 16.6054 28.8133 16.5 28.5481 16.5ZM28.5481 12.5C28.3009 12.5 28.0592 12.5733 27.8536 12.7107C27.6481 12.848 27.4879 13.0432 27.3933 13.2716C27.2986 13.5001 27.2739 13.7514 27.3221 13.9939C27.3703 14.2363 27.4894 14.4591 27.6642 14.6339C27.839 14.8087 28.0618 14.9278 28.3042 14.976C28.5467 15.0242 28.798 14.9995 29.0265 14.9048C29.2549 14.8102 29.4501 14.65 29.5874 14.4445C29.7248 14.2389 29.7981 13.9972 29.7981 13.75C29.7981 13.4185 29.6664 13.1005 29.432 12.8661C29.1976 12.6317 28.8796 12.5 28.5481 12.5Z" fill="white" />
                                        <button className="hidden">

                                        </button>
                                    </svg>

                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-6'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Order Selesai
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        28
                                    </span>
                                </label>
                                <div className="grid justify-end">
                                    <svg
                                        className="cursor-pointer mt-2"
                                        width="58"
                                        height="33"
                                        viewBox="0 0 58 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57.5481" height="33" rx="5" fill="#E3B02B" />
                                        <path d="M28.5481 7C26.5703 7 24.6369 7.58649 22.9924 8.6853C21.3479 9.78412 20.0662 11.3459 19.3093 13.1732C18.5524 15.0004 18.3544 17.0111 18.7402 18.9509C19.1261 20.8907 20.0785 22.6725 21.477 24.0711C22.8756 25.4696 24.6574 26.422 26.5972 26.8079C28.537 27.1937 30.5477 26.9957 32.3749 26.2388C34.2022 25.4819 35.764 24.2002 36.8628 22.5557C37.9616 20.9112 38.5481 18.9778 38.5481 17C38.5452 14.3487 37.4906 11.8069 35.6159 9.93219C33.7412 8.05746 31.1994 7.00295 28.5481 7ZM28.5481 25C26.9658 25 25.4191 24.5308 24.1035 23.6518C22.7879 22.7727 21.7626 21.5233 21.1571 20.0615C20.5516 18.5997 20.3931 16.9911 20.7018 15.4393C21.0105 13.8874 21.7724 12.462 22.8912 11.3431C24.0101 10.2243 25.4355 9.4624 26.9874 9.15372C28.5392 8.84504 30.1478 9.00346 31.6096 9.60896C33.0714 10.2145 34.3208 11.2398 35.1999 12.5554C36.0789 13.871 36.5481 15.4177 36.5481 17C36.5457 19.121 35.702 21.1544 34.2023 22.6542C32.7025 24.1539 30.6691 24.9976 28.5481 25ZM28.5481 16.5C28.2829 16.5 28.0285 16.6054 27.841 16.7929C27.6535 16.9804 27.5481 17.2348 27.5481 17.5V20.5C27.5481 20.7652 27.6535 21.0196 27.841 21.2071C28.0285 21.3946 28.2829 21.5 28.5481 21.5C28.8133 21.5 29.0677 21.3946 29.2552 21.2071C29.4427 21.0196 29.5481 20.7652 29.5481 20.5V17.5C29.5481 17.2348 29.4427 16.9804 29.2552 16.7929C29.0677 16.6054 28.8133 16.5 28.5481 16.5ZM28.5481 12.5C28.3009 12.5 28.0592 12.5733 27.8536 12.7107C27.6481 12.848 27.4879 13.0432 27.3933 13.2716C27.2986 13.5001 27.2739 13.7514 27.3221 13.9939C27.3703 14.2363 27.4894 14.4591 27.6642 14.6339C27.839 14.8087 28.0618 14.9278 28.3042 14.976C28.5467 15.0242 28.798 14.9995 29.0265 14.9048C29.2549 14.8102 29.4501 14.65 29.5874 14.4445C29.7248 14.2389 29.7981 13.9972 29.7981 13.75C29.7981 13.4185 29.6664 13.1005 29.432 12.8661C29.1976 12.6317 28.8796 12.5 28.5481 12.5Z" fill="white" />
                                        <button className="hidden">

                                        </button>
                                    </svg>

                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-6'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Penilaian
                                    <span className="inline-block text-xl text-black  font-semibold">
                                        50
                                    </span>
                                </label>
                                <div className="grid justify-end">
                                    <svg
                                        className="cursor-pointer mt-2"
                                        width="58"
                                        height="33"
                                        viewBox="0 0 58 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57.5481" height="33" rx="5" fill="#E3B02B" />
                                        <path d="M28.5481 7C26.5703 7 24.6369 7.58649 22.9924 8.6853C21.3479 9.78412 20.0662 11.3459 19.3093 13.1732C18.5524 15.0004 18.3544 17.0111 18.7402 18.9509C19.1261 20.8907 20.0785 22.6725 21.477 24.0711C22.8756 25.4696 24.6574 26.422 26.5972 26.8079C28.537 27.1937 30.5477 26.9957 32.3749 26.2388C34.2022 25.4819 35.764 24.2002 36.8628 22.5557C37.9616 20.9112 38.5481 18.9778 38.5481 17C38.5452 14.3487 37.4906 11.8069 35.6159 9.93219C33.7412 8.05746 31.1994 7.00295 28.5481 7ZM28.5481 25C26.9658 25 25.4191 24.5308 24.1035 23.6518C22.7879 22.7727 21.7626 21.5233 21.1571 20.0615C20.5516 18.5997 20.3931 16.9911 20.7018 15.4393C21.0105 13.8874 21.7724 12.462 22.8912 11.3431C24.0101 10.2243 25.4355 9.4624 26.9874 9.15372C28.5392 8.84504 30.1478 9.00346 31.6096 9.60896C33.0714 10.2145 34.3208 11.2398 35.1999 12.5554C36.0789 13.871 36.5481 15.4177 36.5481 17C36.5457 19.121 35.702 21.1544 34.2023 22.6542C32.7025 24.1539 30.6691 24.9976 28.5481 25ZM28.5481 16.5C28.2829 16.5 28.0285 16.6054 27.841 16.7929C27.6535 16.9804 27.5481 17.2348 27.5481 17.5V20.5C27.5481 20.7652 27.6535 21.0196 27.841 21.2071C28.0285 21.3946 28.2829 21.5 28.5481 21.5C28.8133 21.5 29.0677 21.3946 29.2552 21.2071C29.4427 21.0196 29.5481 20.7652 29.5481 20.5V17.5C29.5481 17.2348 29.4427 16.9804 29.2552 16.7929C29.0677 16.6054 28.8133 16.5 28.5481 16.5ZM28.5481 12.5C28.3009 12.5 28.0592 12.5733 27.8536 12.7107C27.6481 12.848 27.4879 13.0432 27.3933 13.2716C27.2986 13.5001 27.2739 13.7514 27.3221 13.9939C27.3703 14.2363 27.4894 14.4591 27.6642 14.6339C27.839 14.8087 28.0618 14.9278 28.3042 14.976C28.5467 15.0242 28.798 14.9995 29.0265 14.9048C29.2549 14.8102 29.4501 14.65 29.5874 14.4445C29.7248 14.2389 29.7981 13.9972 29.7981 13.75C29.7981 13.4185 29.6664 13.1005 29.432 12.8661C29.1976 12.6317 28.8796 12.5 28.5481 12.5Z" fill="white" />
                                        <button className="hidden">

                                        </button>
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col bg-white w-full h-[710px] shadow-xl rounded-lg px-20 pt-12 pb-12  ml-[29px]'>

                            <div className='grid grid-cols-2'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Nama Mitra
                                </label>

                            </div>
                            <div>
                                <label className="w-60 h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_mitra} */}
                                    Noviar Haji Dan Umroh
                                </label>
                            </div>

                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Nama Perusahaan
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.nama_pt} */}
                                    PT. Noviar Haji Dan Umroh
                                </label>
                            </div>

                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.no_izin_umroh} */}
                                    109820212
                                </label>
                            </div>
                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.location} */}
                                    Bandung
                                </label>
                            </div>
                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.email} */}
                                    tio@mail.com
                                </label>
                            </div>
                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    {/* {dataMitra == null ? "" : dataMitra.website} */}
                                    noviartio.com
                                </label>
                            </div>

                            <div className='mt-[24px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Rating
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
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