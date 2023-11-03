import React from "react";
import Image from "next/image";

import Aunty from "@assets/Aunty.png";
import Uncle from "@assets/Uncle.png";
import card1 from "@assets/Blood.png";
import card2 from "@assets/Funds.png";
import card3 from "@assets/CheckUp.png";

export default function Volunteering() {
    return (
        <div className="flex flex-col">
            <Image src={Aunty} className="w-[screen]" alt="Aunty" />
            <div className="w-screen px-[100px] text-center text-white text-[64px] font-bold font-['Helvetica'] uppercase absolute z-10 top-[150px]">
                Small acts, big impact volunteering changes lives
            </div>
            <div className="absolute w-screen flex justify-center top-[400px]">
                <button className="w-[280px] h-[70px] bg-[#C0E9FFD9] opacity-80 rounded-xl font-bold text-xl text-black">
                    Register Now
                </button>
            </div>

            <div className="w-screen h-[138px] relative justify-center items-center flex">
                <div className="w-screen h-[138px] left-0 top-0 absolute bg-sky-200 rounded-[20px]" />
                <Image
                    className="w-screen h-[138px] left-0 top-[0px] absolute"
                    src={Uncle}
                    alt="Aunty"
                />
                <div className="w-screen h-[138px] left-0 top-0 absolute bg-white bg-opacity-60 backdrop-blur-[35px]" />
                <div className="left-[88px] top-[15px] absolute justify-center items-center flex item">
                    <div className="w-[194px] h-[108px] left-0 top-0 absolute">
                        <div className="left-[33px] top-0 absolute text-neutral-800 text-[64px] font-bold font-['Inter']">
                            50+
                        </div>
                        <div className="left-0 top-[84px] absolute text-neutral-800 text-xl font-bold font-['Inter']">
                            Years of experience
                        </div>
                    </div>
                    <div className="w-[205px] h-[108px] left-[360px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-neutral-800 text-[64px] font-bold font-['Inter']">
                            100K+
                        </div>
                        <div className="left-[54px] top-[84px] absolute text-neutral-800 text-xl font-bold font-['Inter']">
                            Volunteer
                        </div>
                    </div>
                    <div className="w-[118px] h-[108px] left-[731px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-neutral-800 text-[64px] font-bold font-['Inter']">
                            190
                        </div>
                        <div className="left-[10px] top-[84px] absolute text-neutral-800 text-xl font-bold font-['Inter']">
                            Countries
                        </div>
                    </div>
                    <div className="w-44 h-[108px] left-[1015px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-neutral-800 text-[64px] font-bold font-['Inter']">
                            $10M
                        </div>
                        <div className="left-[2px] top-[84px] absolute text-neutral-800 text-xl font-bold font-['Inter']">
                            Donations Raised
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen flex flex-col bg-[#1D2869]">
                <div className="w-screen text-center text-white text-4xl font-normal font-['Black Han Sans'] mt-12">
                    UPCOMING EVENTS
                </div>
                <div className="flex lg:flex-row flex-col justify-center">
                    <Image
                        src={card1}
                        className="p-12 cursor-pointer w-[363px] h-[328px]"
                        alt="Card1"
                    />
                    <Image
                        src={card2}
                        className="p-12 cursor-pointer w-[363px] h-[328px]"
                        alt="Card2"
                    />
                    <Image
                        src={card3}
                        className="p-12 cursor-pointer w-[363px] h-[328px]"
                        alt="Card3"
                    />
                </div>
                <div className="w-screen flex justify-center mb-12">
                    <button className="w-[280px] h-[70px] bg-[#C0E9FFD9] opacity-80 rounded-xl text-black">
                        SHOW MORE
                    </button>
                </div>
            </div>
        </div>
    );
}
