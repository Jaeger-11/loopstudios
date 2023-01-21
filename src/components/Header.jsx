import React from 'react';
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import { useState } from 'react';
import MobileNav from './MobileNav';


const Header = () => {

  const [isSideMenu, setIsSideMenu] = useState(false);
  const openSideMenu = () => {
    setIsSideMenu(true)
  }
  const closeSideMenu = () => {
    setIsSideMenu(false)
  }

  return (
    <div className='bg-mobile-header bg-cover px-4 sm:py-6 md:homeback md:bg-desktop-header'>
      {isSideMenu ? <MobileNav close={closeSideMenu}/> : undefined }
        <section className='relative container pt-4 flex flex-col h-[100vh] mx-auto'>
          <nav className='absolute top-4 w-full flex justify-between px-2'>
              <img src={logo} alt="loopstudios logo" className='h-6 md:h-auto'/>

              <div className='md:hidden'>
                <img src={hamburger} alt="nav-icon" className='cursor-pointer' onClick={openSideMenu}/>
              </div>

              <ul className='gap-6 text-white font-alata hidden md:flex'>
                <li className='cursor-pointer menuitems'>About</li>
                <li className='cursor-pointer menuitems'>Careers</li>
                <li className='cursor-pointer menuitems'>Events</li>
                <li className='cursor-pointer menuitems'>Products</li>
                <li className='cursor-pointer menuitems'>Support</li>
              </ul>
          </nav>

          <article className='flex-1 flex flex-col justify-center content-center'>
              <h3 className='my-24 text-4xl text-white uppercase font-josefin font-light p-6 border-white border-2 md:w-1/2 md:text-5xl'>
                  Immersive <br /> experiences <br /> that deliver
              </h3>
          </article>
        </section>
    </div>
  )
}

export default Header