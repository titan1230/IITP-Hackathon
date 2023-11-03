"use client";

import mainLogo from "../../public/main_logo.png";
import LinePattern from "../../public/line_pattern-footer.png";
import Image from "next/image";

import {
    RiTwitterXFill,
    RiInstagramLine,
    RiLinkedinBoxLine,
    RiFacebookBoxLine,
} from "react-icons/ri";

export default function Footer() {
    return (
        <div>
            <div className="w-full bg-[#1D2869] absolute h-[430px] overflow-hidden">
                {/* Div ka maal */}
                <div className=" mx-4 my-16 flex place-content-around justify-center items-center space-x-40">
                    <div className="px-4 mx-10 my-2 flex flex-col place-content-around justify-center items-center space-x-16 bg-white rounded-full">
                        <Image
                            src={mainLogo}
                            className="h-16 w-40"
                            alt="Main logo"
                        />
                    </div>

                    <div className=" mx-4 my-2 flex flex-col place-content-around items-center space-x-16 justify-start">
                        <span className="font-white font-bold text-xl">
                            Chat with us
                        </span>
                        <div className="flex justify-start gap-x-4">
                            <RiTwitterXFill className="text-white w-[40px] h-[40px] cursor-pointer pt-1" />
                            <RiInstagramLine className="text-white w-[40px] h-[40px] cursor-pointer" />
                            <RiLinkedinBoxLine className="text-white w-[43px] h-[43px] cursor-pointer" />
                            <RiFacebookBoxLine className="text-white w-[43px] h-[43px] cursor-pointer" />
                        </div>
                    </div>

                    <div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
                        <span className="font-white font-bold text-xl">
                            Useful Links
                        </span>
                        <div className="flex flex-col w-40 justify-start">
                            <div>HealthCare Services</div>
                            <div>VitalEase Care Solutions</div>
                            <div>Find Doctors</div>
                            <div>Volunteer with us</div>
                        </div>
                    </div>

                    <div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
                        <span className="font-white font-bold text-xl">
                            Contacts
                        </span>
                        <div className="flex flex-col w-40">
                            <span>Address : 4-5 Main Road , Patna</span>
                            <span>Email : contact@vitalease.com</span>
                            <span>Phone Number : +91 4533XXXXXX</span>
                        </div>
                    </div>
                </div>

                {/* Testing Locofy plugin - Dinner krke test krta hu*/}

                {/* <Image src={mainLogo} className="h-20 w-20" alt='Main logo'/> */}
                <Image
                    src={LinePattern}
                    height={289}
                    width={488}
                    alt="Lines"
                    className="absolute bottom-0 left-20"
                />
            </div>
        </div>
    );
}
