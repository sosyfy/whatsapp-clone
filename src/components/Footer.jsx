import React from "react";

function Footer() {
  const whatsapp = [
    {
      name: "features",
      link: "/features",
    },
    {
      name: "security",
      link: "/security",
    },
    {
      name: "download",
      link: "/download",
    },
    {
      name: "whatsapp web",
      link: "/",
    },
    {
      name: "business",
      link: "https://business.whatsapp.com/",
    },
    {
      name: "privacy",
      link: "https://www.whatsapp.com/privacy",
    },
  ];
  const company = [
    {
      name: "about",
      link: "/about",
    },
    {
      name: "careers",
      link: "https://www.whatsapp.com/join",
    },
    {
      name: "brand center",
      link: "https://web.facebook.com/brand/resources/whatsapp/whatsapp-brand?_rdc=1&_rdr",
    },
    {
      name: "get in touch",
      link: "/contact",
    },
    {
      name: "blog",
      link: "https://blog.whatsapp.com/",
    },
    {
      name: "whatsapp stories",
      link: "/",
    },
  ];
  const download = [
    {
      name: "mac/Pc",
      link: "https://play.google.com/store/apps/details?id=com.whatsapp",
    },
    {
      name: "android",
      link: "/android",
    },
    {
      name: "iphone",
      link: "https://apps.apple.com/us/app/whatsapp-messenger/id310633997",
    },

  ];
  const help = [
    {
      name: "help center",
      link: "https://faq.whatsapp.com/",
    },
    {
      name: "twitter",
      link: "https://twitter.com/whatsapp",
    },
    {
      name: "facebook",
      link: "https://web.facebook.com/WhatsApp?_rdc=1&_rdr",
    },
    {
      name: "coronavirus",
      link: "https://www.whatsapp.com/coronavirus",
    },
 
  ];

  return (
    <section className="bg-[#273443] bottom-0 w-full ">
      {/* links div */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 px-6 md:px-12 lg:px-40">
        {/* whatsa */}
        <div>
          <h1 className="uppercase text-white font-bold my-3 md:text-xl tracking-wider ">WhatsApp</h1>
          <ul>
            {whatsapp.map((link, i) => (
              <li
                className="whitespace-nowrap md:text-lg font-semibold  text-white capitalize  py-2"
                key={i}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* company */}
        <div>
          <h1 className="uppercase text-white font-bold my-3 md:text-xl tracking-wider ">company</h1>
          <ul>
          {company.map((link, i) => (
              <li
                className=" whitespace-nowrap md:text-lg font-semibold  text-white capitalize  py-2"
                key={i}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* download */}
        <div>
            <h1 className="uppercase text-white font-bold my-3 md:text-xl tracking-wider ">download</h1>
          <ul>
          {download.map((link, i) => (
              <li
                className=" whitespace-nowrap md:text-lg font-semibold  text-white capitalize  py-2"
                key={i}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* help */}
        <div>
            <h1 className="uppercase text-white font-bold my-3 md:text-xl tracking-wider ">help</h1>
          <ul>
          {help.map((link, i) => (
              <li
                className=" whitespace-nowrap md:text-lg font-semibold  text-white capitalize  py-2"
                key={i}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* signing  */}
      <div className="bg-[#1c1e21] py-4 px-6 md:flex md:justify-between md:items-center">
        <h2 className="text-white font-medium text-sm capitalize">created by <a href="https://www.linkedin.com/in/sosyfy" className="text-green-400/70">@sospeter</a></h2>
        <a href="" className="text-white  capitalize text-sm">privacy & terms <span className="ml-1 font-bold text-gray-50">{'>'}</span></a>
      </div>
    </section>
  );
}

export default Footer;
