import React from 'react'
import { NavLink } from 'react-router-dom'

function NavList() {
    const links = [
        {
            name: "whatsapp web",
            link: "/"
        },
        {
            name: "download",
            link: "/"
        },
        {
            name: "security",
            link: "/"
        },
        {
            name: "help center",
            link: "/"
        },
        {
            name: "en",
            link: "/"
        },
    
    ]
  return (
    <>
    {
        links.map((link,i)=>(
          <li className='pl-4 whitespace-nowrap md:px-0 lg:px-4  md:uppercase border-b py-4 w-full border-[#128c7e] text-base' key={i}>
            <NavLink to={link.link} >{link.name}</NavLink>
          </li>  
        ))
    }
    </>
  )
}

export default NavList