import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto flex flex-col">

            {/* Item */}
            <div className="flex items-center justify-center py-2">
            <div className='flex flex-wrap justify-between' data-aos="zoom-y-out" >
              <div className='w-full md:w-1/2 py-8'>
              <img src={require('../images/building.jpg').default} alt="" className='w-full h-full' />
              </div>
              <div className='w-full md:w-2/5 py-6 md:py-16 '>
              <span className='py-4 font-semibold text-xl'>Prefecture in Focus: Tottori</span>
              <p className='py-8'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <div className='flex'>
                <span className='mr-4'>VIEW PREFECTURE</span>
                <img src={require('../images/Shape.svg').default} alt="" />
              </div>
              </div>
            </div>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2">
            <div className='flex flex-wrap justify-between' data-aos="zoom-y-out" >
            <div className='w-full order-2 md:w-2/5  py-6 md:py-16 flex flex-col'>
              <span className='py-4 font-semibold text-xl'>Featured Neighborhood: Kyoto’s Arashiyama</span>
              <p className='py-8'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <div className='flex'>
                <span className='mr-4'>VIEW NEIGHBORHOOD</span>
                <img src={require('../images/Shape.svg').default} alt="" />
              </div>
              </div>
              <div className='w-full md:w-1/2 py-8 md:order-3'>
              <img src={require('../images/halls.jpg').default} alt="" className='w-full h-full' />
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;