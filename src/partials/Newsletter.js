import React from 'react';

function Newsletter() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto pb-8 flex justify-between">
          <span className='text-2xl hunderline'>Top places to visit</span>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/nagoyabg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>

            {/* 2nd item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/niigatabg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>

            {/* 3rd item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/osakabg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>

            {/* 4th item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/saitamabg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>

            {/* 5th item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/uenobg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>

            {/* 6th item */}
            <div className='flex flex-col justify-start' data-aos="zoom-y-out" >
              <div className='w-full h-80 py-8'>
              <img src={require('../images/shibuyabg.jpg').default} alt="" className='w-full h-full z-10 object-cover object-center' />
              </div>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <button className='py-2 px-2 w-28 bg-blue-700 text-white'>See More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
