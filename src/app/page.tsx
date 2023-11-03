"use client";

import mainLogo from "../../public/main_logo.png";
import Hero from "@assets/Frame 8.png";
import Image from "next/image";
import MainDoc from "@assets/HomeDoctor.png";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-white to-[#89D7FF] pb-20">
            <Image src={Hero} className=" w-full" alt="Main logo" />

            {/* <div className="blurredCircle1 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full top-14 right-2/4 circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div> */}
            <div className="mt-16 ml-5 flex">
                <Image src={MainDoc} alt="alt" />
                <div className="w-[596px] h-[416px] relative ml-20 mt-4">
                    <div className="w-[596px] left-0 top-0 absolute text-neutral-700 text-6xl font-bold font-['Helvetica'] leading-[66.50px]">
                        About Us
                    </div>
                    <div className="w-[554px] left-0 top-[84px] absolute text-zinc-700 text-[28px] font-normal font-['Helvetica Light'] leading-10">
                        Vita Ease provides you with a team of experienced
                        medical professionals to help you at your home!
                        <br />
                        Vita Ease is dedicated to delivering top-tier healthcare
                        services right to your doorstep, ensuring that you
                        receive the highest level of care in the comfort of your
                        own home.
                    </div>
                </div>
            </div>
        </div>
    );
}
