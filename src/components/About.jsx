import React from 'react'
import about from '../assets/about.png'

function About() {
  return (
    <section className=' grid md:grid-cols-2 md:gap-6 overflow-x-hidden'>
      {/* left side  */}
      <div className="pt-10 px-12 flex items-center flex-col bg-[#d8e8ea]">
        <h1 className='font-semibold py-6 text-center text-2xl'>WhatsApp Business App</h1>
        <p className='text-center lg:px-16 lg:text-lg text-base font-normal text-[#1c1e21] pb-8'> <a href='#' className='text-[#39b3ed]'> WhatsApp Business </a> is a free to download app that was built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</p>
        <p className='text-[#1c1e21] text-base text-center font-normal pb-6 lg:px-16 lg:text-lg'>
        WhatsApp can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about  <a href='#' className='text-[#39b3ed]'> WhatsApp Business API</a>.
        </p>
        <div className='lg:px-28'>
        <img src={about} alt="about img" />
        </div>
      </div>
      {/* right side */}
      <div className="pt-4 bg-[#e7f0e4] flex flex-col lg:justify-center  items-center">
        <div className='bg-[#77d7c8] mt-10 rounded-full  w-[17rem] h-[17rem] flex items-center justify-center '></div>
        <div className='mt-10'>
          <h3 className='text-[#5e5e5e] font-semibold uppercase text-center text-xl'>end-to-end encryption</h3>
          <h1 className='font-bold text-black text-2xl py-3 text-center '>Security by Default</h1>
          <p className='text-[#1c1e21] text-base font-normal leading-loose text-center mt-6 lg:mt-3 px-6 pb-12 lg:pb-8 lg:pt-10 lg:px-10 lg:text-lg '>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}

export default About