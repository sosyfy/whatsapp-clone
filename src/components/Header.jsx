import Nav from './navbar/Nav'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
  const homeLocation = useLocation();
  const [inHomepage, setInHomepage ] = useState(homeLocation.pathname);

  useEffect(()=>{
     setInHomepage(homeLocation.pathname)
  },[homeLocation])

  return (
    <header className={`bg-[#128c7e] border-b  ${inHomepage !== '/' ? "fixed" : "relative"} lg:border-none md:sticky  w-screen md:top-0`}>
        <Nav />
    </header>
  )
}

export default Header