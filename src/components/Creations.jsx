import React from 'react';

const Creations = () => {
  return (
    <div className='container mx-auto px-6 py-8 md:px-0'>
        <div className='text-center font-alata mb-12 md:text-left md:flex md:justify-between md:content-end'>
            <h2 className='font-josefin text-3xl md:text-4xl'>OUR CREATIONS</h2>
            <button className='hidden px-8 border-black font-alata border transition-all duration-500 md:block hover:text-white hover:bg-black'>SEE ALL</button>
        </div>
        
        <section className='my-8 flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-4 md:mb-24'>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-deep-earth.jpg" alt="deep earth" className='md:hidden'/>
            <img src="/desktop/image-deep-earth.jpg" alt="deep earth" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl  md:text-3xl md:left-6'>DEEP <br /> EARTH</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-night-arcade.jpg" alt="night-arcade" className='drop-shadow md:hidden'/>
            <img src="/desktop/image-night-arcade.jpg" alt="night-arcade" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 bg-black/5 text-2xl md:text-3xl md:left-6'>NIGHT <br /> ARCADE</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-soccer-team.jpg" alt="soccer team" className='md:hidden'/>
            <img src="/desktop/image-soccer-team.jpg" alt="soccer team" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 bg-black/5 text-2xl md:text-3xl md:left-6'> SOCCER<br /> TEAM VR</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-grid.jpg" alt="THE-grid" className='md:hidden'/>
            <img src="/desktop/image-grid.jpg" alt="THE-grid" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl md:text-3xl md:left-6'>THE <br /> GRID</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-from-above.jpg" alt="from-above" className='md:hidden'/>
            <img src="/desktop/image-from-above.jpg" alt="from-above" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl md:text-3xl md:left-6'>FROM UP <br /> ABOVE VR</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-pocket-borealis.jpg" alt="pocket-borealis" className='md:hidden'/>
            <img src="/desktop/image-pocket-borealis.jpg" alt="pocket-borealis" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl md:text-3xl md:left-6'>POCKET <br /> BOREALIS</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-curiosity.jpg" alt="curiosity" className='md:hidden'/>
            <img src="/desktop/image-curiosity.jpg" alt="curiosity" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl md:text-3xl md:left-6'>THE <br /> CURIOSITY</h2>
          </div>

          <div className='text-white font-josefin relative cursor-pointer hover:opacity-40'>
            <img src="/mobile/image-fisheye.jpg" alt="fisheye" className='md:hidden'/>
            <img src="/desktop/image-fisheye.jpg" alt="fisheye" className='hidden md:block'/>
            <h2 className='absolute bottom-4 left-4 text-2xl md:text-3xl md:left-6'>MAKE IT <br /> FISHEYE</h2>
          </div>
        </section>

        <div className='block text-center mb-8 md:hidden'>
          <button className='py-2 px-12 border-black border font-alata transition-all duration-500  hover:text-white hover:bg-black'>SEE ALL</button>
        </div>
    </div>
  )
}

export default Creations