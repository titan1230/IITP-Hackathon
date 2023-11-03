"use client";

import mainLogo from "../../public/main_logo.png";
import LinePattern from "../../public/line_pattern-footer.png";
import Image from 'next/image'

export default function Footer() {
  return (

    <div>

		<div className="w-full bg-[#1D2869] absolute h-[430px] overflow-hidden">

			{/* Div ka maal */}
			<div className=" mx-4 my-2 flex place-content-around justify-center items-center space-x-16">
				<div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
					<Image src={mainLogo} className="h-16 w-40" alt='Main logo' />
				</div>

				<div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
					<span>Chat with us</span>
				</div>

				<div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
					<Image src={mainLogo} className="h-16 w-40" alt='Main logo' />
				</div>

				<div className=" mx-4 my-2 flex flex-col place-content-around justify-center items-center space-x-16">
					<Image src={mainLogo} className="h-16 w-40" alt='Main logo' />
				</div>
			</div>

			{/* <Image src={mainLogo} className="h-20 w-20" alt='Main logo'/> */}
			<Image src={LinePattern} height={289} width={488} alt="Lines" className=" relative top-72 left-20"/>
		</div>
    </div>
  )
}