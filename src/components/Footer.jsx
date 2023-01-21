import React from 'react';
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className=' bg-black text-white font-alata text-center'>
        <div className='container mx-auto py-12 md:flex md:justify-between'>
            <section>
                <img src={logo} alt="" className='mx-auto md:mx-0 md:h-6' />
                <div className='flex flex-col gap-4 my-8 md:flex-row md:my-4 md:text-[15px] md:gap-8 md:font-light'>
                    <p ><a href='/' className='menuitems pb-2'>About</a></p>
                    <p ><a href='/' className='menuitems pb-2'>Careers</a></p>
                    <p ><a href='/' className='menuitems pb-2'>Events</a></p>
                    <p ><a href='/' className='menuitems pb-2'>Products</a></p>
                    <p ><a href='/' className='menuitems pb-2'>Support</a></p>
                </div>
            </section>
            <section className='md:text-right'>
                <div className='flex gap-4 justify-center mb-4 md:justify-end'>
                    <a href='/'> <img src={facebook} alt="facebook" /></a>
                    <a href='/'> <img src={twitter} alt="twitter" /></a>
                    <a href='/'> <img src={pinterest} alt="pinterest" /></a>
                    <a href='/'> <img src={instagram} alt="instagram" /></a>
                </div>
                <p className='text-veryDarkGray'> &copy; 2021 Loopstudios. All rights reserved. </p>
            </section>
        </div>
    </footer>
  )
}

export default Footer