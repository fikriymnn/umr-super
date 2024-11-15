"use client";

import DashCardDoubleRow from "@/components/Dashboard/DashCardDoubleRow";
import DashCardTripleRow from "@/components/Dashboard/DashCardTripleRow";
import GridWrapper from "@/components/Dashboard/GridWrapper";
import SideBar from "@/components/sideBar";
import axios from "axios";
// import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const router = useRouter();
  const [dataMitra, setDataMitra] = useState([]);
  let id: any = "";

  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
        withCredentials: true,
      });
      if (res.data.success == false) {
        router.push("/login");
      }
      console.log(res.data.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }
  return (
    <div className="flex h-screen">
      <SideBar dashboard=" text-white bg-[#E3B02B]" />
      <div className="min-h-screen w-screen grey px-[28px] overflow-y-scroll pt-5 ">
        {/* grid content */}
        <GridWrapper>
          <DashCardDoubleRow title={"Mitra Terdaftar "} value={"9"} />
          <DashCardDoubleRow title={"User Terdaftar"} value={"27"} />
          <DashCardDoubleRow title={"Order Berjalan"} value={"893"} />
          <DashCardDoubleRow title={"Order Selesai"} value={"5k"} />
          <DashCardDoubleRow title={"Order Gagal"} value={"1"} />
        </GridWrapper>
      </div>
    </div>
  );
}

export default Dashboard;
