"use client";
import SideBar from "@/components/sideBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

function GetDataMitra({ params }: { params: any }) {
  const [dataMitra, setdataMitra] = useState<any>(null);
  useEffect(() => {
    getDetailPaket(params.id);
  }, [params.id]);

  async function getDetailPaket(idd: any) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/mitra/${idd}`
      );
      if (res.data.success == true) {
        setdataMitra(res.data.data);
      }
    } catch (error: any) {
      console.log(error.response);
    }
  }
  return (
    <div className="flex">
      <SideBar mitra="text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll">
        <div>
          <div className="flex ">
            <div className="flex flex-col bg-white lg:w-5/12 w-6/12 h-full shadow-xl rounded-lg px-8 pt-6 lg:pb-9  pb-20">
              <div className="flex flex-wrap justify-items-center justify-center">
                {dataMitra == null ? (
                  <div className="shadow w-44 h-44 bg-zinc-300 rounded-full"></div>
                ) : (
                  <img
                    src={dataMitra.foto_profil}
                    alt="Profil"
                    className="shadow w-44 h-44 bg-zinc-300 rounded-full "
                  />
                )}
              </div>

              <div>
                <label className="flex justify-items-center justify-center mt-[20px] text-black lg:text-2xl text-xl font-semibold  text-center">
                  {dataMitra == null ? "" : dataMitra.nama_mitra}
                </label>
              </div>
              <div className="grid grid-cols-2 mt-11">
                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                  Paket Aktif
                  <span className="inline-block text-xl text-black  font-semibold">
                    4
                  </span>
                </label>
                <div className="grid justify-end mt-3">
                  <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                    <Link href="/mitra/profilemitra/paketaktifmitra">
                      <Image
                        alt="Detail Paket Aktif"
                        src={"/infobutton.png"}
                        height={25}
                        width={25}
                        className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                      />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                  Order Aktif
                  <span className="inline-block text-xl text-black  font-semibold">
                    2
                  </span>
                </label>
                <div className="grid justify-end mt-3">
                  <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                    <Link href="">
                      <Image
                        alt="info"
                        src={"/infobutton.png"}
                        height={25}
                        width={25}
                        className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                      />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                  Paket Selesai
                  <span className="inline-block text-xl text-black  font-semibold">
                    12
                  </span>
                </label>
                <div className="grid justify-end mt-3">
                  <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                    <Link href="/mitra/profilemitra/paketselesai">
                      <Image
                        alt="info"
                        src={"/infobutton.png"}
                        height={25}
                        width={25}
                        className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                      />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                  Order Selesai
                  <span className="inline-block text-xl text-black  font-semibold">
                    28
                  </span>
                </label>
                <div className="grid justify-end mt-3">
                  <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                    <Link href="/mitra/profilemitra/orderselesai">
                      <Image
                        alt="info"
                        src={"/infobutton.png"}
                        height={25}
                        width={25}
                        className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                      />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <label className="grid w-60 h-7 lg:text-xl text-1xl text-black  font-normal">
                  Penilaian
                  <span className="inline-block text-xl text-black  font-semibold">
                    50
                  </span>
                </label>
                <div className="grid justify-end mt-3">
                  <button className="lg:w-[55px] lg:h-[33px] w-9 h-6 lg:justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                    <Link href="">
                      <Image
                        alt="info"
                        src={"/infobutton.png"}
                        height={25}
                        width={25}
                        className="lg:ml-[15px] lg:w-[25px] lg:h-[25px] w-4 h-4 ml-[10px]"
                      />
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white w-full h-full shadow-xl rounded-lg   pl-[71px] pr-[32px] pt-[50px] lg:pb-16 pb-10 ml-[29px]">
              <div className="grid grid-cols-2">
                <label className="grid w-60 h-7 lg:text-xl text-lg text-black  font-normal">
                  Nama Mitra
                </label>
              </div>
              <div>
                <label className="w-60 h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.nama_mitra}
                </label>
              </div>

              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Nama Perusahaan
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.nama_pt}
                </label>
              </div>

              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Nomor Izin
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.no_izin_umroh}
                </label>
              </div>
              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Lokasi
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.location}
                </label>
              </div>
              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Email
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.email}
                </label>
              </div>
              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Website
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.website}
                </label>
              </div>

              <div className="lg:mt-[24px] mt-4">
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-normal">
                  Rating
                </label>
              </div>
              <div>
                <label className="w-full h-7 lg:text-xl text-lg text-black  font-semibold">
                  {dataMitra == null ? "" : dataMitra.rating}/5
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDataMitra;
