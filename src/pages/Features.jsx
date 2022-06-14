import React from "react";
import textImg from '../assets/herodesk.png'
import webImg from '../assets/whatsweb.png'

function Features() {
  return (
    <section className="md:columns-2 w-full gap-4 space-y-4 ">
      {/* texts section */}
      <div className="flex flex-col items-center break-inside-avoid pt-16 bg-[#fcf2c6] px-8">
        <h1 className="uppercase text-lg text-center font-bold text-[#5e5e5e]">texts</h1>
        <h1 className="capitalize text-3xl text-center leading-10">
          simple , reliable messaging
        </h1>
        <p className="text-center py-4 leading-7">
          Message your friends and family for free*. WhatsApp uses your phone's
          Internet connection to send messages so you can avoid SMS fees
        </p>
        <img src={textImg} alt="" className="px-6"/>
        <p className="text-base text-center py-4 leading-7">* Data charges may apply. Contact your provider for details.</p>
      </div>
      {/* group chat */}
      <div className="flex flex-col items-center break-inside-avoid pt-16 bg-[#E7F0E4] px-8">
        <h1 className="uppercase text-lg text-center font-bold text-[#5e5e5e]">group chat</h1>
        <h1 className=" text-2xl text-center leading-10">
        Groups to keep in touch
        </h1>
        <p className="text-center py-4 leading-7">
        Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.
        </p>
      </div>
      {/* whats on web and desktop */}
      <div className="flex flex-col items-center break-inside-avoid pt-16 bg-[#F0F4F9] px-4">
        <h1 className="uppercase text-lg text-center font-bold text-[#5e5e5e]">WHATSAPP ON WEB AND DESKTOP
</h1>
        <h1 className=" text-2xl text-center leading-10">
        Keep the Conversation Going
        </h1>
        <p className="text-center py-4 leading-7">
        With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you.<a href="" className="hover:underline text-[#39b3ed]"> Download the desktop app</a> or visit <a href="" className="hover:underline text-[#39b3ed]">web.whatsapp.com</a> to get started
        </p>
        <img src={webImg} alt="" className="" />
      </div>
      {/* whatsapp voice and video calls */}
      <div className="flex flex-col items-center break-inside-avoid flex-nowrap pt-16 bg-[#D8E8EA] px-4">
        <h1 className="uppercase text-lg text-center font-bold text-[#5e5e5e]">WHATSAPP VOICE AND VIDEO CALLS
</h1>
        <h1 className=" text-2xl text-center leading-10">
        Speak Freely
        </h1>
        <p className="text-center py-4 leading-5">
        With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.
        </p>
        <p className="text-center py-2">*Data charges may apply. Contact your provider for details.</p>
        <div className="flex justify-center">
        <img src={webImg} alt=""  />
        {/* <img src={webImg} alt=""  /> */}
        </div>
      </div>
      {/* end to end encryption */}
      <div className="pt-4 bg-[#e7f0e4] flex break-inside-avoid flex-col lg:justify-center  items-center">
        <div className='bg-[#77d7c8] mt-10 rounded-full  w-[17rem] h-[17rem] flex items-center justify-center '></div>
        <div className='mt-10'>
          <h3 className='text-[#5e5e5e] font-semibold uppercase text-center text-xl'>end-to-end encryption</h3>
          <h1 className='font-bold text-black text-2xl py-3 text-center '>Security by Default</h1>
          <p className='text-[#1c1e21] text-base font-normal leading-loose text-center mt-6 lg:mt-3 px-6 pb-12 lg:pb-8 lg:pt-10 lg:px-10 lg:text-lg '>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
