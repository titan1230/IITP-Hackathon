import React from "react";
import Image from "next/image";

import Aunty from "@assets/Aunty.png";

export default function Diet() {
    return (
        <div className="flex flex-col">
            <img className="w-screen h-[700px]" src="/nutrition.png" />
            <div className="flex m-[50px] mb-20">
                <div className="w-[1000px] h-[241px] text-black text-5xl font-normal font-['Helvetica']">
                    Discover a healthier you with VitalEase, offering tailored
                    nutrition suggestions for all age for lifelong vitality and
                    well- being
                </div>
                <div className="w-screen flex justify-center mt-[100px]">
                    <button className="w-[350px] h-[70px] bg-[#C0E9FFD9] opacity-80 rounded-sm font-bold text-xl text-black">
                        Start Your Healthy Journey
                    </button>
                </div>
            </div>
            <div className="flex flex-col bg-[#1D2869] p-10">
                <div className="text-white text-[90px] font-normal font-['Patua One']">
                    Features
                </div>
                <div className="flex w-screen gap-x-8 justify-center">
                    <img
                        className="w-[390px] h-[494px] rounded-[30px]"
                        src="/D1.png"
                    />
                    <img
                        className="w-[390px] h-[494px] rounded-[30px]"
                        src="/D2.png"
                    />
                    <img
                        className="w-[390px] h-[494px] rounded-[30px]"
                        src="/D3.png"
                    />
                </div>
            </div>
        </div>
    );
}
