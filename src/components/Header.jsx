import React from 'react'
import Nav from './navbar/Nav'

function Header() {
  return (
    <header className='bg-[#128c7e] border-b lg:border-none md:sticky md:top-0'>
        <Nav />
    </header>
  )
}

export default Header