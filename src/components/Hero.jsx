import React from 'react'
import downloadButton from '../assets/download.svg'
import heroImg from '../assets/herodesk.png'
import {DiAndroid} from 'react-icons/di'
import {AiOutlineRight,AiFillApple,AiOutlineDesktop} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='bg-[#128c7e] md:bg-white h-3/5'>
        {/* mobile hero  */}
        <div className=" md:hidden flex flex-col justify-between text-center overflow-y-hidden h-[85vh] w-full pt-8  sm:px-10 px-4">
            <h2 className="text-base text-white font-bold ">Simple. Secure. </h2>
            <h2 className="text-base text-white font-bold">Reliable Messaging.</h2>
            <p className='font-semibold text-sm text-white py-3'>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
            <img className='h-10 my-3' src={downloadButton} alt="download from apple store" />
            <img className='w-80 sm:w-96 mx-auto mt-4' src={heroImg} alt="hero image" />
        </div>

        {/* desktop hero  */}
        <div className="hidden md:flex justify-center  xl:px-80 px-10 py-8">
            {/* left side  */}
            <div className='xl:px-20 px-10 mt-20'>
            <h2 className="text-3xl text-black font-normal pb-4">Simple. Secure. </h2>
            <h2 className="text-3xl text-black font-normal pb-6">Reliable Messaging.</h2>
            <p className='font-normal text-base text-black py-3 leading-6'>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
            <p className='opacity-90 text-gray-800 font-semibold'>*Data charges may apply.contact your provider for details</p> 
            
            <Link className='text-[#1cb39b] flex gap-3 mt-8 items-center font-semibold text-lg pt-3' to="/download"> 
              <DiAndroid /> 
               Android 
              <AiOutlineRight />
            </Link>
            <Link className='text-[#1cb39b] flex gap-3 mt-4 items-center font-semibold text-lg pt-3' to="/download"> 
              <AiFillApple /> 
                Iphone
              <AiOutlineRight />
            </Link>
            <Link className='text-[#1cb39b] flex gap-3 mt-4 items-center font-semibold text-lg pt-3' to="/download"> 
              <AiOutlineDesktop /> 
               Mac or Windows PC
              <AiOutlineRight />
            </Link>
            </div>
            {/* right side  */}
            <div className='h-full'>
            <img className='mx-auto mt-8' src={heroImg} alt="hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero