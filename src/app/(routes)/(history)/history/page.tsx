import React from "react";
import Image from "next/image";
import medical from "@assets/medical.png";
import medicine from "@assets/medicine.png";
import old from "@assets/old.png";

export default function History() {
    return (
        <div className="bg-[#E5F6FF]">
            <div className="flex justify-center">
                <Image
                    className="w-[590px] h-[716px] p-8"
                    src={medical}
                    alt="medical"
                />

                <div className="flex flex-col">
                    <div className="text-center text-neutral-600 text-3xl font-bold font-['Helvetica'] leading-[72px]">
                        PRESCIPTIONS
                    </div>
                    <Image
                        src={medicine}
                        className="w-[582px] h-[288px] p-4"
                        alt="medicine"
                    />
                    <Image
                        src={medicine}
                        className="w-[582px] h-[288px] p-4"
                        alt="medicine"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <Image
                    src={old}
                    className="w-screen h-[700px]"
                    alt="medicine"
                />

                <div className="w-screen text-center text-neutral-600 text-4xl font-bold font-['Helvetica'] leading-[72px] absolute top-[830px]">
                    AI GENERATED RECMMENDATIONS
                </div>

                <div className="flex absolute top-[950px] w-screen justify-center">
                    <div className="w-[511px] h-[217px] relative px-8 mx-8">
                        <div className="w-[511px] h-[217px] left-0 top-0 absolute bg-white rounded-3xl" />
                        <div className="w-[473px] h-[163px] left-[19px] top-[34px] absolute">
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Regular Checkups:
                                <br />
                            </span>
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Schedule regular checkups with your healthcare
                                provider to monitor your health and catch issues
                                early.
                                <br />
                                Early detection can lead to more effective
                                treatments and better health outcomes.
                            </span>
                        </div>
                    </div>
                    <div className="w-[511px] h-[217px] relative px-8 mx-8">
                        <div className="w-[511px] h-[217px] left-0 top-0 absolute bg-white rounded-3xl" />
                        <div className="w-[473px] h-[163px] left-[19px] top-[34px] absolute">
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Regular Checkups:
                                <br />
                            </span>
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Schedule regular checkups with your healthcare
                                provider to monitor your health and catch issues
                                early.
                                <br />
                                Early detection can lead to more effective
                                treatments and better health outcomes.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex absolute top-[1200px] w-screen justify-center">
                    <div className="w-[511px] h-[217px] relative px-8 mx-8">
                        <div className="w-[511px] h-[217px] left-0 top-0 absolute bg-white rounded-3xl" />
                        <div className="w-[473px] h-[163px] left-[19px] top-[34px] absolute">
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Regular Checkups:
                                <br />
                            </span>
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Schedule regular checkups with your healthcare
                                provider to monitor your health and catch issues
                                early.
                                <br />
                                Early detection can lead to more effective
                                treatments and better health outcomes.
                            </span>
                        </div>
                    </div>
                    <div className="w-[511px] h-[217px] relative px-8 mx-8">
                        <div className="w-[511px] h-[217px] left-0 top-0 absolute bg-white rounded-3xl" />
                        <div className="w-[473px] h-[163px] left-[19px] top-[34px] absolute">
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Regular Checkups:
                                <br />
                            </span>
                            <span className="text-black text-xl font-normal font-['Helvetica Light']">
                                Schedule regular checkups with your healthcare
                                provider to monitor your health and catch issues
                                early.
                                <br />
                                Early detection can lead to more effective
                                treatments and better health outcomes.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
