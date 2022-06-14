import React from "react";

function Android() {
  return (
    <div className="pt-20 pb-10 flex flex-col justify-center items-center">
      <h1 className="text-lg px-4 py-8 text-center">
        Please download the latest version of WhatsApp Messenger.
      </h1>
      <a
        href=""
        className="bg-[#128c7e] py-4 px-8 text-lg text-white font-semibold rounded-full"
      >
        Download now 
      </a>
      <p className="py-3">Version 2.22.13.70
</p>
<div className="border-t pt-8 w-4/5 flex flex-col justify-center ">
<h1 className="text-center text-black font-bold text-lg">Minimum Requirements</h1>
 <ul className="py-4 grid gap-2 list-disc">
  <li>Android OS 4.0.3 or above</li>
  <li>Unlimited internet data plan recommended</li>
  <li>Tablet devices are not supported
</li>
 </ul>
<h1 className="text-center text-black font-bold text-lg">Third-Party Sources</h1>
<ul className="py-4 grid gap-2 list-disc">
  <li>qcom.c: LGPL 2.1 (WhatsApp Modifications)
</li>
 
 </ul>
</div>
    </div>
  );
}

export default Android;
