"use client";

import DashCardDoubleRow from "@/components/Dashboard/DashCardDoubleRow";
import DashCardTripleRow from "@/components/Dashboard/DashCardTripleRow";
import GridWrapper from "@/components/Dashboard/GridWrapper";
import SideBar from "@/components/sideBar";
// import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Dashboard() {
    const [dataMitra, setDataMitra] = useState([]);
    let id: any = "";
    useEffect(() => {
    });

    // async function getuser() {
    //     try {
    //         const res = await axios.get("", {
    //             withCredentials: true,
    //         });
    //         if (res.data.success == true) {
    //             console.log(res.data.data._id);
    //         }
    //         id = res.data.data._id;
    //     } catch (error: any) {
    //         console.log(error.response);
    //     }
    // }
    return (
        <div className="flex h-screen">
            <SideBar dashboard=" text-white bg-[#E3B02B]" />
            <div className="min-h-screen w-screen grey px-[28px] overflow-y-scroll pt-5">

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
