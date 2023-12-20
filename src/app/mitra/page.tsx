"use client"
import SideBar from "@/components/sideBar";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
// import axios from 'axios';
import Tablelistmitra from "@/components/tablelistmitra";


function Mitra() {

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
                        <div className='flex flex-col bg-white w-full h-[750px] shadow-xl rounded-lg px-8 py-8'>
                            <div>
                                <label className="text-black text-2xl font-semibold">
                                    Mitra Terdaftar
                                </label>
                            </div>
                            <div>
                                <Tablelistmitra
                                    foto_profile={'/logo.png'}
                                    nama_mitra={'Acep Rayahu Travel'}
                                    paket_aktif={5}
                                    order_aktif={18}
                                    order_selesai={12}
                                />
                                <Tablelistmitra
                                    foto_profile={'/kaaba.jpg'}
                                    nama_mitra={'Tio Jaya Abadi Travel'}
                                    paket_aktif={6}
                                    order_aktif={20}
                                    order_selesai={32}
                                />
                                <Tablelistmitra
                                    foto_profile={'/profil.jpeg'}
                                    nama_mitra={'Noviar Haji dan Umroh'}
                                    paket_aktif={4}
                                    order_aktif={2}
                                    order_selesai={28}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mitra