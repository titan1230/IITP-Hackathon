import Image from "next/image";

import Card1 from "@assets/Card1.png";
import Card2 from "@assets/Card2.png";
import Card3 from "@assets/Card3.png";
import ECG from "@assets/ECG.png";
import Reminders from "@assets/Reminders.png";
import Pro from "@assets/Pro.png";
import Calender from "@assets/Calender.png";

export default function Dash() {
    return (
        <div className="flex flex-col pb-8">
            <div className="flex w-full px-8 pt-4 gap-x-12 justify-center">
                <Image src={Card1} className="w-[378px] h-[109px]" alt=""/>
                <Image src={Card2} className="w-[378px] h-[109px]" alt="" />
                <Image src={Card3} className="w-[378px] h-[109px]" alt="" />
            </div>
            <div className="flex px-12 mt-8 gap-x-16 justify-center">
                <Image
                    className="w-[799px] h-[269px] rounded-[25px]"
                    src={ECG}
                    alt=""
                />
                <div className="flex flex-col gap-y-4">
                    <Image className="w-[376px] h-[126x]" src={Reminders} alt="" />
                    <Image className="w-[376px] h-[126x]" src={Reminders} alt="" />
                </div>
            </div>
            <div className="flex px-12 mt-8 gap-x-16 justify-center">
                <Image
                    className="w-[288px] h-[351px] rounded-[25px]"
                    src={Pro}
                    alt=""
                />
                <Image
                    className="w-[288px] h-[351px] rounded-[25px]"
                    src={Pro}
                    alt=""
                />
                <Image
                    className="w-[560px] h-[351px] rounded-[25px]"
                    src={Calender}
                    alt=""
                />
            </div>
        </div>
    );
}
