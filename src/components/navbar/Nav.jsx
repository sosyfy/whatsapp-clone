import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const homeLocation = useLocation();
  const [inHomepage, setInHomepage ] = useState(homeLocation.pathname);

  useEffect(()=>{
     setInHomepage(homeLocation.pathname)
  },[homeLocation])

  const [navOpen, setNavOpen] = useState(false);
  const mobilelinks = [
    {
      name: "download",
      link: "/download",
    },
    {
      name: "features",
      link: "/features",
    },
    {
      name: "security",
      link: "/security",
    },
    {
      name: "help center",
      link: "https://faq.whatsapp.com/",
    },
    {
      name: "get in touch",
      link: "/contact",
    },
  ];
  const desklinks = [
    {
      name: "whatsapp web",
      link: "/",
    },
    {
      name: "features",
      link: "/features",
    },
    {
      name: "download",
      link: "/download",
    },
    {
      name: "security",
      link: "/security",
    },
    {
      name: "help center",
      link: "/contact",
    },
    {
      name: "en",
      link: "/",
    },
  ];

  const removeSidebar = ()=>{
    setNavOpen(false)
    console.log("hbjkc");
  }

  return (
    <nav
      className={`flex justify-between container mx-auto  relative w-full items-center  px-4 md:py-3 md:justify-around  top-0 ${
        inHomepage ==="/" ? "py-[3rem]" : "py-2"
      } bg-[#128c7e]`}
    >
      {/*mobile logo */}
      {/*mobile logo on homepage  */}
      { inHomepage ==="/" && (
        <div className="ml-[40vw] absolute  top-12 md:hidden">
          <Link to='/'>
          <img className="h-16" src={logo} alt="Whatsappp logo" />
          </Link>
        </div>
      )}
      {/* mobile logo on other pages */}
      { ( inHomepage !== "/") && (
        <div className="md:hidden">
          <Link to='/'>
          <img className="h-8" src={logo} alt="Whatsappp logo" />
          </Link>
        </div>
      )}
      {/* desktop logo */}
      <div className="hidden md:flex items-center pl-12">
      <Link className="md:flex items-center" to='/'>
        <img className="h-10" src={logo} alt="Whatsappp logo" />
        <h2 className="font-bold text-xl text-white ml-1">Whatsapp</h2>
      </Link>
      </div>

      {/*desktop navbar  */}

      <ul className="hidden md:flex text-base pl-4 md:gap-4 lg:gap-6 font-semibold text-white justify-between">
        <NavList links={desklinks} />
      </ul>

      {/* mobile  navbar  */}

      <ul
        className={`fixed ${
          navOpen ? "right-0" : "right-[-100%]"
        } duration-500 top-0  z-50 w-full h-screen px-6 pt-6 text-white font-semibold capitalize flex items-start  flex-col lg:hidden bg-[#075e54]`}
      >
        <li className="w-full flex justify-between items-center mb-6">
          <Link to='/'> <img className=""  onClick={() => setNavOpen(false)} src={logo} alt="Whatsappp logo" /></Link>
          <AiOutlineClose
            onClick={() => setNavOpen(false)}
            className="text-2xl text-white"
          />
        </li>
        <NavList links={mobilelinks} removeSidebar={removeSidebar} />
        <li className="pl-4">
          <select
            name="langauge"
            className="border-none mt-8 outline-none ring-2 ring-white bg-transparent p-4 pr-16  rounded-sm py-1 text-white font-semibold"
          >
            <option value="English">English</option>
          </select>
        </li>
      </ul>

      {/* humburger menu  */}
      <div>
        <AiOutlineMenu
          onClick={() => setNavOpen(true)}
          className="md:hidden absolute right-0 mr-3 top-3 text-xl md:text-2xl text-white"
        />
      </div>
    </nav>
  );
}

export default Nav;
