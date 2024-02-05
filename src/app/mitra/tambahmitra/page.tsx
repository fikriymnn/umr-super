"use client"
import SideBar from "@/components/sideBar";
import Link from "next/link";
import React, { useEffect, useState } from 'react'

function TambahMitra() {
    const [password, setPassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const [passwordMatch, setPasswordmatch] = useState(false);

    useEffect(() => {
        checkpassword();
    }, [password, confpassword]);

    const checkpassword = () => {
        setPasswordmatch(password === confpassword)
    };

    return (
        <div className='flex'>
            <SideBar user="text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >
                <div>
                    <div className='flex '>
                        <div className='flex flex-col bg-white w-7/12 h-full shadow-xl rounded-lg px-8 lg:pt-8 pt-5 lg:pb-14 pb-11'>

                            <div>
                                <label className="text-black text-2xl font-semibold">
                                    Tambah Mitra
                                </label>
                            </div>
                            <div className="flex flex-wrap mt-5">
                                <img
                                    alt=""
                                    src={``}
                                    height={128}
                                    width={128}
                                    className="w-32 h-32 bg-zinc-300 rounded-full" />
                                <label className='w-24 h-7 bg-amber-400 rounded-sm ml-[26px] mt-[58px] cursor-pointer pt-[2px]'>
                                    <span className='ml-[12px] text-white  font-normal text-center'>Pilih Foto</span>
                                    <input
                                        accept='image/*'
                                        type="file"

                                        className="hidden"
                                    />
                                </label>

                            </div>
                            <div className='mt-[20px]'>
                                <label className=" text-base  text-black  font-normal">
                                    Nama Mitra
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-medium "
                                    id="namamitra"
                                    placeholder="Masukkan Nama Mitra"
                                    required
                                    type="text"
                                    style={{ paddingLeft: '10px' }}

                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label className=" text-base text-black  font-normal">
                                    Nama PT
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                    id="namapt"
                                    placeholder="Masukkan Nama PT"
                                    required
                                    type="text"
                                    value={''}
                                    style={{ paddingLeft: '10px' }}

                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label className=" text-base text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-medium "
                                    id="nomorizin"
                                    placeholder="Masukkan Nomor Izin"
                                    required
                                    type="text"
                                    value={''}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label className=" text-base text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                    id="email"
                                    placeholder="Masukkan Email Mitra"
                                    required
                                    type="email"
                                    value={''}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label className=" text-base text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-medium "
                                    id="lokasi"
                                    placeholder="Masukkan Lokasi Mitra"
                                    required
                                    type="text"
                                    value={''}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='mt-[10px]'>
                                <label className=" text-base text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                    id="website"
                                    placeholder="Masukkan Website Mitra"
                                    required
                                    type="text"
                                    value={''}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>

                            <div className='mt-[10px]'>
                                <label className="w-60 h-7 text-base text-black  font-normal ">
                                    Password
                                </label>
                            </div>
                            <div>
                                <input
                                    className='w-full h-7 bg-zinc-300 rounded-sm  text-opacity-60 text-base  font-medium '

                                    id="password"
                                    placeholder="Masukkan Password"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='grid grid-cols-2 mt-[10px]'>
                                <label className="w-60 h-7 text-base text-black  font-normal ">
                                    Konfirmasi password
                                </label>
                                {!passwordMatch && <label className='grid text-red-600 font-semibold text-base justify-items-end justify-end'> Password tidak cocok </label>}
                            </div>
                            <div>
                                <input
                                    className={`... ${!passwordMatch ? 'w-full h-7 bg-zinc-300 rounded-sm  text-opacity-60 text-base  font-medium  border border-red-500' : 'w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base  font-medium'} ...`}
                                    id="confirmoldpassword"
                                    placeholder="Masukkan Password"
                                    required
                                    value={confpassword}
                                    type="password"
                                    onChange={(e) => setconfpassword(e.target.value)}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div>
                                <button className='w-[125px] h-7 bg-amber-400 rounded-md text-white  font-normal mt-[20px]'>
                                    Konfirmasi
                                </button>
                                <Link href='/mitra'>
                                    <button className="w-[80px] h-7 ml-[22px] rounded-md border border-amber-400 text-center text-amber-400  font-medium ">
                                        Batal
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TambahMitra