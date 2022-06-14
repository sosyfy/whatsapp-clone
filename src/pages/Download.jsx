import React from "react";
import androidimg from "../assets/downloadAndroid.png";
import iosimg from "../assets/downloadIos.png";
import desktopimg from "../assets/downloadDesk.png";
import getfrommicrosoft from "../assets/downloadMicrosoft.png";

function Download() {
  return (
    <section className="grid sm:grid-cols-2 sm:gap-6 md:px-10">
      {/* left side ==> mobile side*/}
      <div className="bg-[#E7F0E4] flex flex-col items-center px-5">
        <h1 className="text-2xl font-normal my-12">Phones</h1>
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row items-center justify-between w-full">
          <div className="flex items-center justify-start flex-col gap-5">
            <img src={androidimg} alt="android" />
            <a
              href=""
              className="bg-[#128c7e] py-4 px-8 text-lg text-white font-semibold rounded-full"
            >
              {" "}
              android{" "}
            </a>
          </div>
          <div className="flex items-center justify-start flex-col gap-5">
            <img src={iosimg} alt="ios" />
            <a
              href=""
              className="bg-[#128c7e] py-4 px-8 text-lg text-white font-semibold rounded-full"
            >
              iPhone
            </a>
          </div>
        </div>
        <div className="my-12 sm:px-20">
          <h2 className="text-lg text-black text-center">
            Visit{" "}
            <a href="" className="text-[#39b3ed]">
              whatsapp.com/dl
            </a>{" "}
            on your mobile phone and install.
          </h2>
          <p className="text-base font-normal mt-6 text-center">
            By installing WhatsApp, you agree to our{" "}
            <a href="" className="text-[#39b3ed]">
              terms & privacy policy
            </a>
          </p>
        </div>
      </div>
      {/* right side ==> desktop side */}
      <div className="bg-[#FCF2C6] flex flex-col items-center px-6 pb-8">
        <h1 className="text-2xl font-normal my-12">Mac or Windows PC</h1>
        <div className="flex flex-col items-center px-4 sm:px-10">
          <img src={desktopimg} alt="desktop" />
          <p className="text-base mt-6 text-center">Windows 8 and higher. WhatsApp must be installed on your phone.</p>
          <p className="mt-2 mb-6 text-center">
            By clicking the Download button, you agree to our{" "}
            <a href="" className="text-[#39b3ed]">
              terms & privacy policy
            </a>
          </p>
        </div>
        <a href="" className="bg-[#128c7e] py-4 px-8 text-lg text-white font-semibold rounded-full"> download for windows</a>
       <a href=""><img src={getfrommicrosoft} alt="" className="h-10 my-4" /></a>
        <div className="flex flex-col ">
          <a href="" className="text-[#39b3ed] text-lg">
            Download for Windows 8 and higher (64-bit)
          </a>
          <a href="" className="text-[#39b3ed] text-lg">
            Download for Windows 8 and higher (32-bit)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Download;
