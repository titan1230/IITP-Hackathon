"use client";

import mainLogo from "../../public/main_logo.png";
import LinePattern from "../../public/line_pattern-footer.png";
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="w-full h-[500px] bg-[#1D2869] bottom-0">
      {/* <Image src={mainLogo} className="h-20 w-20" alt='Main logo'/> */}
      <Image src={LinePattern} height={289} width={488} alt="Lines" className="ml-76 relative top-80 left-20"/>
    </div>
  )
}