"use client";

import mainLogo from "../../public/main_logo.png";
import Hero from "@assets/Frame 8.png";
import Image from "next/image";
import MainDoc from "@assets/HomeDoctor.png";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-white to-[#89D7FF]">
            <Image src={Hero} className=" w-full" alt="Main logo" />

            {/* <div className="blurredCircle1 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full top-14 right-2/4 circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div> */}
            <div className="mt-16 ml-5">
                <Image src={MainDoc} alt="alt" />
            </div>
        </div>
    );
}
