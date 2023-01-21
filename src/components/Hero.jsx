import React from 'react';
import vrguy from "/mobile/image-interactive.jpg"

const Hero = () => {
  return (
    <section className='container mx-auto px-6 py-8 md:px-0'>
      <section className='flex flex-col my-12 gap-8 md:relative md:my-24'>
        <div>
          <img src={vrguy} alt="interaction photo" />
        </div>
        <article className='text-center md:w-1/2 md:pt-[7%] md:text-left md:pl-[7%] md:absolute md:bg-white md:bottom-0 md:right-0'>
          <h3 className='uppercase text-3xl text-black font-josefin font-light md:text-4xl'>
            The leader in interactive VR
          </h3>
          <p className='py-6 px-4 text-veryDarkGray font-alata text-[15px] md:p-0'>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. 
          Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </article>
      </section>

    </section>
  )
}

export default Hero