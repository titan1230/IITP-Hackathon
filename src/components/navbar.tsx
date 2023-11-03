"use client";

import mainLogo from "../../public/main_logo.png";
import Image from 'next/image'
import LoginBtn from "./loginBtn";

export default function Navbar() {

  return (
    <div className="h-30 w-full flex bg-transparent justify-around items-center font-Helveltica">
      <div className=" mx-4 my-2 flex place-content-around justify-center items-center space-x-20">

        <div className="h-16 w-44 bg-white opacity-70 rounded-full backdrop-filter backdrop-blur-md flex items-center justify-around">
          <Image src={mainLogo} className="h-16 w-40" alt='Main logo'/>
        </div>

        <div className="w-[1030px] h-[60px] bg-white text-black opacity-70 rounded-full backdrop-filter backdrop-blur-md font-semibold text-xl flex items-center justify-around">
          <span>HOME</span>
          <span>CARE</span>
          <span>HEALTH</span>
          <span>Find Doctor</span>
          <div className="h-[44px] w-[235px] bg-white text-black  rounded-full backdrop-filter backdrop-blur-md font-semibold text-xl flex items-center justify-around">
          <div className='max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
		  </div>
        </div>

        {/* Button */}
        <LoginBtn />
      </div>
    </div>
  )
}