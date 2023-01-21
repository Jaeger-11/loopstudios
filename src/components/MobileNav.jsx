import React from 'react';
import closeIcon from "../assets/icon-close.svg"
import logo from "../assets/logo.svg";

const MobileNav = ({close}) => {
  return (
    <section className='fixed top-0 left-0 px-6 flex flex-col justify-center content-center z-10 bg-black h-screen w-screen'>
        <div className='absolute top-4 left-6 right-6 flex justify-between'>
            <img src={logo} alt="loopstudios logo" className='h-6 md:h-auto'/>
            <img src={closeIcon} alt="nav-icon" className='cursor-pointer w-6' onClick={close}/>
        </div>

        <ul className='flex flex-col gap-6 w-full text-white font-josefin uppercase text-3xl'>
            <li className='cursor-pointer' onClick={close}>About</li>
            <li className='cursor-pointer' onClick={close}>Careers</li>
            <li className='cursor-pointer' onClick={close}>Events</li>
            <li className='cursor-pointer' onClick={close}>Products</li>
            <li className='cursor-pointer' onClick={close}>Support</li>
        </ul>
    </section>
  )
}

export default MobileNav