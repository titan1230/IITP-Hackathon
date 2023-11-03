"use client";
import Link from 'next/link'

import mainLogo from "../../public/main_logo.png";
import Image from "next/image";
import LoginBtn from "./loginBtn";
import SearchBtn from "@assets/Search Btn.png";

export default function Navbar() {
    return (
        <div className="h-30 w-full flex bg-transparent  justify-around items-center font-Helveltica">
            <div className=" mx-4 my-2 flex place-content-around justify-center items-center space-x-16">
                <div className="h-16 w-44 ml-10 bg-white opacity-70 rounded-full backdrop-filter backdrop-blur-md flex items-center justify-around">
                    <Image
                        src={mainLogo}
                        className="h-16 w-40"
                        alt="Main logo"
                    />
                </div>

                <div className="w-[950px] h-[60px] bg-white/30 text-black opacity-100 rounded-full backdrop-filter backdrop-blur-sm font-semibold text-xl flex items-center justify-around font-createRound">
                    <Link className="cursor-pointer" href="/">Home</Link>
                    <Link className="cursor-pointer" href={'/care'}>Care</Link>
                    <Link className="cursor-pointer" href={'/volunteering'}>Volunteer</Link>
                    <Link className="cursor-pointer" href={'/doctor'}>Find Doctor</Link>

                    <div className="flex space-x-3">
                        {/* SEARCH BAR */}
                        <div className="bg-white opacity-100 z-10 rounded-[500px] h-[44px]">
                            <input
                                type="text"
                                placeholder="Search"
                                className="font-createRound outline-none border-none text-black font-semibold bg-white px-4 py-2 rounded-lg"
                            />
                        </div>

                        {/* SEARCH BUTTON */}
                        <div className="h-[44px] w-[44px] bg-white opacity-100 rounded-full backdrop-filter backdrop-blur-md flex items-center justify-around">
                            <Image
                                src={SearchBtn}
                                className="h-[45px] w-[45px] cursor-pointer"
                                alt="Search logo"
                            />
                        </div>
                    </div>
                </div>
                {/* Button */}
                <LoginBtn />
            </div>
        </div>
    );
}
