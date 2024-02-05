"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
// import axios from "axios";

export default function SideBar({
  dashboard,
  mitra,
  user,
  order,
}: {
  dashboard?: any;
  mitra?: any;
  user?: any;
  order?: any;
}) {
  const { push } = useRouter();
  const [bar, setBar] = useState(1);
  const [bar1, setBar1] = useState(1);
  const [packagebar, setPackagebar] = useState(0);
  const togglePackagebar = () => {
    setPackagebar((prevValue) => (prevValue === 0 ? 1 : 0));
  };
  const [orderbar, setOrderbar] = useState(0);
  const [orderbar1, setOrderbar1] = useState(0);

  // const toggleOrderbar = () => {
  //   setOrderbar((prevValue) => (prevValue === 0 ? 1 : 0));
  // };
  const toggleOrderbar1 = () => {
    setOrderbar1((prevValue) => (prevValue === 0 ? 1 : 0));
  };
  const [accountbar, setAccountbar] = useState(0);

  const toggleBar = () => {
    setBar((prevBar) => (prevBar === 1 ? 0 : 1));
  };

  return (
    <div className="z-40 ">
      <div
        className={`${bar == 1 ? " w-[252px] " : " w-[80px] "
          } h-full flex flex-col text-black bg-white `}
      >
        <div className={`w-full pt-5 pb-14 px-[16px]`}>
          <button className="w-full h-full" onClick={toggleBar}>
            {bar === 0 ? (
              <>
                <Image alt="logo1" src={"/logo.png"} height={130} width={500} />
              </>
            ) : (
              <>
                <Image
                  alt="logo"
                  src={"/IconNav.png"}
                  height={80}
                  width={500}
                />
              </>
            )}
          </button>
        </div>

        <div className="h-full pb-5 flex flex-col justify-between ">
          <div className="px-[18px]">
            <div className="flex">
              <div className="w-full">
                <a href="/dashboard">
                  <button
                    className={`${bar == 1
                      ? "justify-start items-center"
                      : " justify-center items-center"
                      } w-full  h-[40px] flex my-1  mb-[10px] ps-3
                            rounded-md hover:bg-amber-400 shrink-0 hover:text-white duration-200 ease-in-out ${dashboard}`}
                  >
                    {bar === 0 ? (
                      <div className="w-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.0001 6.02393L11.0001 0.763932C10.4501 0.271977 9.73803 0 9.00009 0C8.26216 0 7.55012 0.271977 7.00009 0.763932L1.00009 6.02393C0.682463 6.30801 0.428995 6.65649 0.256567 7.04618C0.0841385 7.43586 -0.00329256 7.85781 9.47941e-05 8.28393V17.0239C9.47941e-05 17.8196 0.316165 18.5826 0.878775 19.1453C1.44138 19.7079 2.20445 20.0239 3.00009 20.0239H15.0001C15.7957 20.0239 16.5588 19.7079 17.1214 19.1453C17.684 18.5826 18.0001 17.8196 18.0001 17.0239V8.27393C18.0021 7.84949 17.9139 7.42947 17.7416 7.04161C17.5692 6.65375 17.3165 6.30689 17.0001 6.02393ZM11.0001 18.0239H7.00009V13.0239C7.00009 12.7587 7.10545 12.5044 7.29299 12.3168C7.48052 12.1293 7.73488 12.0239 8.00009 12.0239H10.0001C10.2653 12.0239 10.5197 12.1293 10.7072 12.3168C10.8947 12.5044 11.0001 12.7587 11.0001 13.0239V18.0239ZM16.0001 17.0239C16.0001 17.2891 15.8947 17.5435 15.7072 17.731C15.5197 17.9186 15.2653 18.0239 15.0001 18.0239H13.0001V13.0239C13.0001 12.2283 12.684 11.4652 12.1214 10.9026C11.5588 10.34 10.7957 10.0239 10.0001 10.0239H8.00009C7.20444 10.0239 6.44138 10.34 5.87877 10.9026C5.31616 11.4652 5.00009 12.2283 5.00009 13.0239V18.0239H3.00009C2.73488 18.0239 2.48052 17.9186 2.29299 17.731C2.10545 17.5435 2.00009 17.2891 2.00009 17.0239V8.27393C2.00027 8.13195 2.03069 7.99163 2.08931 7.86231C2.14794 7.73299 2.23343 7.61764 2.3401 7.52393L8.34009 2.27393C8.52258 2.11361 8.75719 2.0252 9.00009 2.0252C9.243 2.0252 9.47761 2.11361 9.66009 2.27393L15.6601 7.52393C15.7668 7.61764 15.8523 7.73299 15.9109 7.86231C15.9695 7.99163 15.9999 8.13195 16.0001 8.27393V17.0239Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex gap-[15px] justify-center items-center ml-[12px] ">
                        <div className=" ">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.0001 6.02393L11.0001 0.763932C10.4501 0.271977 9.73803 0 9.00009 0C8.26216 0 7.55012 0.271977 7.00009 0.763932L1.00009 6.02393C0.682463 6.30801 0.428995 6.65649 0.256567 7.04618C0.0841385 7.43586 -0.00329256 7.85781 9.47941e-05 8.28393V17.0239C9.47941e-05 17.8196 0.316165 18.5826 0.878775 19.1453C1.44138 19.7079 2.20445 20.0239 3.00009 20.0239H15.0001C15.7957 20.0239 16.5588 19.7079 17.1214 19.1453C17.684 18.5826 18.0001 17.8196 18.0001 17.0239V8.27393C18.0021 7.84949 17.9139 7.42947 17.7416 7.04161C17.5692 6.65375 17.3165 6.30689 17.0001 6.02393ZM11.0001 18.0239H7.00009V13.0239C7.00009 12.7587 7.10545 12.5044 7.29299 12.3168C7.48052 12.1293 7.73488 12.0239 8.00009 12.0239H10.0001C10.2653 12.0239 10.5197 12.1293 10.7072 12.3168C10.8947 12.5044 11.0001 12.7587 11.0001 13.0239V18.0239ZM16.0001 17.0239C16.0001 17.2891 15.8947 17.5435 15.7072 17.731C15.5197 17.9186 15.2653 18.0239 15.0001 18.0239H13.0001V13.0239C13.0001 12.2283 12.684 11.4652 12.1214 10.9026C11.5588 10.34 10.7957 10.0239 10.0001 10.0239H8.00009C7.20444 10.0239 6.44138 10.34 5.87877 10.9026C5.31616 11.4652 5.00009 12.2283 5.00009 13.0239V18.0239H3.00009C2.73488 18.0239 2.48052 17.9186 2.29299 17.731C2.10545 17.5435 2.00009 17.2891 2.00009 17.0239V8.27393C2.00027 8.13195 2.03069 7.99163 2.08931 7.86231C2.14794 7.73299 2.23343 7.61764 2.3401 7.52393L8.34009 2.27393C8.52258 2.11361 8.75719 2.0252 9.00009 2.0252C9.243 2.0252 9.47761 2.11361 9.66009 2.27393L15.6601 7.52393C15.7668 7.61764 15.8523 7.73299 15.9109 7.86231C15.9695 7.99163 15.9999 8.13195 16.0001 8.27393V17.0239Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center justify-center text-lg font-semibold translate-y-[1px]">
                          <p>Dashboard</p>
                        </div>
                      </div>
                    )}
                  </button>
                </a>
              </div>
            </div>
            <div className="flex mt-1 ">
              <div className={`w-full  rounded-[8px] ${orderbar === 1 ? 'pb-1 px-1 yellow ' : ''} duration-100`}>

                <div className={`${bar == 1
                  ? "justify-start items-center"
                  : " justify-center items-center"
                  } w-full  h-[40px] flex my-1  ps-1 gap-1
                            rounded-md hover:bg-amber-400 shrink-0 hover:text-white duration-200 ease-in-out ${mitra}`}>
                  <a href="/mitra" className="w-full">
                    <button
                    >
                      {bar === 0 ? (
                        <div className="flex w-10 justify-center justify-items-center pr-[3px] pt-[3px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6H14C13.7348 6 13.4804 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4804 7.89464 13.7348 8 14 8ZM14 12H15C15.2652 12 15.5196 11.8946 15.7071 11.7071C15.8946 11.5196 16 11.2652 16 11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10H14C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11C13 11.2652 13.1054 11.5196 13.2929 11.7071C13.4804 11.8946 13.7348 12 14 12ZM9 8H10C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8ZM9 12H10C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10H9C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12ZM21 20H20V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20ZM13 20H11V16H13V20ZM18 20H15V15C15 14.7348 14.8946 14.4804 14.7071 14.2929C14.5196 14.1054 14.2652 14 14 14H10C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15V20H6V4H18V20Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex gap-[15px] ml-5 justify-center items-center  ">
                          <div className="flex gap-2">

                            <div className=" ">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6H14C13.7348 6 13.4804 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4804 7.89464 13.7348 8 14 8ZM14 12H15C15.2652 12 15.5196 11.8946 15.7071 11.7071C15.8946 11.5196 16 11.2652 16 11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10H14C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11C13 11.2652 13.1054 11.5196 13.2929 11.7071C13.4804 11.8946 13.7348 12 14 12ZM9 8H10C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8ZM9 12H10C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10H9C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12ZM21 20H20V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20ZM13 20H11V16H13V20ZM18 20H15V15C15 14.7348 14.8946 14.4804 14.7071 14.2929C14.5196 14.1054 14.2652 14 14 14H10C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15V20H6V4H18V20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex items-center justify-center  text-lg font-semibold translate-y-[1px]">
                            <p>Mitra</p>
                          </div>
                        </div>
                      )}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-1 ">
                <div className={`w-full  rounded-[8px] ${orderbar === 1 ? 'pb-1 px-1 yellow ' : ''} duration-100`}>

                  <div className={`${bar == 1
                    ? "justify-start items-center"
                    : " justify-center items-center"
                    } w-full  h-[40px] flex my-1  ps-1 gap-1
                            rounded-md hover:bg-amber-400 shrink-0 hover:text-white duration-200 ease-in-out ${user}`}>
                    <a href="/detailuser" className="w-full">
                      <button
                      >
                        {bar === 0 ? (
                          <div className="flex w-10 justify-center justify-items-center pr-[3px] pt-[3px]">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0007 4.66667C12.3682 4.66637 10.7642 5.09424 9.34883 5.90757C7.93342 6.7209 6.75609 7.89124 5.93435 9.30178C5.11261 10.7123 4.6752 12.3137 4.66578 13.9461C4.65635 15.5786 5.07525 17.1849 5.88066 18.6048C6.42504 17.8973 7.12483 17.3245 7.92593 16.9306C8.72703 16.5368 9.60798 16.3324 10.5007 16.3333H17.5007C18.3934 16.3324 19.2743 16.5368 20.0754 16.9306C20.8765 17.3245 21.5763 17.8973 22.1207 18.6048C22.9261 17.1849 23.345 15.5786 23.3356 13.9461C23.3261 12.3137 22.8887 10.7123 22.067 9.30178C21.2452 7.89124 20.0679 6.7209 18.6525 5.90757C17.2371 5.09424 15.6331 4.66637 14.0007 4.66667ZM23.2675 21.0887C24.8274 19.0551 25.6711 16.5629 25.6673 14C25.6673 7.5565 20.4442 2.33334 14.0007 2.33334C7.55716 2.33334 2.334 7.5565 2.334 14C2.33015 16.5629 3.17389 19.0552 4.73383 21.0887L4.728 21.1097L5.14216 21.5915C6.23636 22.8708 7.59495 23.8975 9.12427 24.6011C10.6536 25.3046 12.3173 25.6682 14.0007 25.6667C16.3659 25.671 18.676 24.9526 20.6215 23.6075C21.4509 23.0344 22.203 22.3569 22.8592 21.5915L23.2733 21.1097L23.2675 21.0887ZM14.0007 7C13.0724 7 12.1822 7.36875 11.5258 8.02513C10.8694 8.68151 10.5007 9.57174 10.5007 10.5C10.5007 11.4283 10.8694 12.3185 11.5258 12.9749C12.1822 13.6313 13.0724 14 14.0007 14C14.9289 14 15.8192 13.6313 16.4755 12.9749C17.1319 12.3185 17.5007 11.4283 17.5007 10.5C17.5007 9.57174 17.1319 8.68151 16.4755 8.02513C15.8192 7.36875 14.9289 7 14.0007 7Z"
                                fill="currentColor" />
                            </svg>

                          </div>
                        ) : (
                          <div className="flex gap-[15px] ml-[18px] justify-center items-center  ">
                            <div className="flex gap-2">
                              <div className=" ">
                                <svg
                                  width="28"
                                  height="28"
                                  viewBox="0 0 28 28"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.0007 4.66667C12.3682 4.66637 10.7642 5.09424 9.34883 5.90757C7.93342 6.7209 6.75609 7.89124 5.93435 9.30178C5.11261 10.7123 4.6752 12.3137 4.66578 13.9461C4.65635 15.5786 5.07525 17.1849 5.88066 18.6048C6.42504 17.8973 7.12483 17.3245 7.92593 16.9306C8.72703 16.5368 9.60798 16.3324 10.5007 16.3333H17.5007C18.3934 16.3324 19.2743 16.5368 20.0754 16.9306C20.8765 17.3245 21.5763 17.8973 22.1207 18.6048C22.9261 17.1849 23.345 15.5786 23.3356 13.9461C23.3261 12.3137 22.8887 10.7123 22.067 9.30178C21.2452 7.89124 20.0679 6.7209 18.6525 5.90757C17.2371 5.09424 15.6331 4.66637 14.0007 4.66667ZM23.2675 21.0887C24.8274 19.0551 25.6711 16.5629 25.6673 14C25.6673 7.5565 20.4442 2.33334 14.0007 2.33334C7.55716 2.33334 2.334 7.5565 2.334 14C2.33015 16.5629 3.17389 19.0552 4.73383 21.0887L4.728 21.1097L5.14216 21.5915C6.23636 22.8708 7.59495 23.8975 9.12427 24.6011C10.6536 25.3046 12.3173 25.6682 14.0007 25.6667C16.3659 25.671 18.676 24.9526 20.6215 23.6075C21.4509 23.0344 22.203 22.3569 22.8592 21.5915L23.2733 21.1097L23.2675 21.0887ZM14.0007 7C13.0724 7 12.1822 7.36875 11.5258 8.02513C10.8694 8.68151 10.5007 9.57174 10.5007 10.5C10.5007 11.4283 10.8694 12.3185 11.5258 12.9749C12.1822 13.6313 13.0724 14 14.0007 14C14.9289 14 15.8192 13.6313 16.4755 12.9749C17.1319 12.3185 17.5007 11.4283 17.5007 10.5C17.5007 9.57174 17.1319 8.68151 16.4755 8.02513C15.8192 7.36875 14.9289 7 14.0007 7Z"
                                    fill="currentColor" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex items-center justify-center  text-lg font-semibold translate-y-[1px]">
                              <p>User</p>
                            </div>
                          </div>
                        )}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-1">
              <div className={`w-full  rounded-[8px] ${orderbar1 === 1 ? 'pb-1 px-1 yellow ' : ''} duration-100`}>

                <div className={`${bar == 1
                  ? "justify-start items-center"
                  : " justify-center items-center"
                  } w-full  h-[40px] flex my-1  ps-1 gap-1
                            rounded-md hover:bg-amber-400 shrink-0 hover:text-white duration-200 ease-in-out ${order}`}>
                  <button onClick={toggleOrderbar1} className="w-5">
                    <div >

                      <svg className={`${orderbar1 === 1 ? 'rotate-90 ' : ''} w-full duration-100 `} width="9" height="9" viewBox="0 0 11 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7L0.499999 13.0622L0.5 0.937822L11 7Z" fill="currentColor" />
                      </svg>

                    </div>
                  </button>

                  <a href="/order" className="w-full">
                    <button

                    >
                      {bar === 0 ? (
                        <div className="w-10 flex  justify-center justify-items-center pr-[5px] pt-[4px]">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10H15C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM15 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13C13 13.2652 13.1054 13.5196 13.2929 13.7071C13.4804 13.8946 13.7348 14 14 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12ZM9 6H15C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H9C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6ZM19 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H16C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM4 15C4 15.2652 3.89464 15.5196 3.70711 15.7071C3.51957 15.8946 3.26522 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V6H4V15ZM18 14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H5.82C5.93642 15.6793 5.9973 15.3411 6 15V2H18V14ZM9 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13C11 12.7348 10.8946 12.4804 10.7071 12.2929C10.5196 12.1054 10.2652 12 10 12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex gap-[15px] justify-center items-center  ">
                          <div className="flex gap-2">

                            <div className=" ">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10H15C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM15 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13C13 13.2652 13.1054 13.5196 13.2929 13.7071C13.4804 13.8946 13.7348 14 14 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12ZM9 6H15C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H9C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6ZM19 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H16C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM4 15C4 15.2652 3.89464 15.5196 3.70711 15.7071C3.51957 15.8946 3.26522 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V6H4V15ZM18 14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H5.82C5.93642 15.6793 5.9973 15.3411 6 15V2H18V14ZM9 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13C11 12.7348 10.8946 12.4804 10.7071 12.2929C10.5196 12.1054 10.2652 12 10 12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex items-center justify-center  font-[600] text-[18px] translate-y-[1px]">
                            <p>Order</p>
                          </div>
                        </div>
                      )}
                    </button>
                  </a>
                </div>
                {orderbar1 === 1 && (
                  <>
                    <div className="flex flex-col ms-6 grey rounded-md py-2 px-3 font-medium">
                      <a className="hover:text-[#E3B02B]" href="/order/belumbayar">Belum Bayar</a>
                      <a className="hover:text-[#E3B02B]" href="/order/diproses">Diproses</a>
                      <a className="hover:text-[#E3B02B]" href="/order/sudahbayar">Sudah Bayar</a>
                    </div>
                  </>
                )
                }

              </div>
            </div>

          </div>
          <div>
            <button
              className={`${bar == 1
                ? "ms-5 justify-start items-center"
                : "ms-2 justify-center items-center"
                } w-[155px] h-[58px] duration-100 hover:translate-x-[-5px]  `}
            // onClick={submitLogout}
            >
              {bar === 0 ? (
                <div className=" w-16  h-[50px] bg-red-600 text-white p-2 pe-3 shrink-0 rounded-md flex gap-2 items-center justify-center">
                  <svg
                    fill="none"
                    width="20px"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </svg>
                </div>
              ) : (
                <div
                  className=" bg-red-600 text-white p-2 pe-3 shrink-0 rounded-md flex gap-2 items-center justify-center 
                        w-[155px] h-[50px]"
                >
                  <div className="w-8">
                    <svg
                      fill="none"
                      width="20px"
                      height="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </svg>
                  </div>
                  <div className="flex items-center justify-center font-semibold">
                    Keluar
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
