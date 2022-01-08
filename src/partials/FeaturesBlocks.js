import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className=" mx-auto pb-8 flex justify-between">
          <span className='text-2xl hunderline'>Benefits of Odigo</span>
            <div className='flex'>
                <span className='mr-4 flex items-center'>LEARN MORE</span>
                <img src={require('../images/Shape.svg').default} alt="" className='w-8'/>
              </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-10 md:gap-2 md:grid-cols-6 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-start justify-start py-4 px-6 bg-fuji rounded shadow-xl col-start-1 col-end-7 md:col-end-4" data-aos="zoom-y-out">
          
              <h3 className='min-h-48 flex justify-end items-end text-xl text-white'>Mount Fuji</h3>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start justify-start px-6 py-4 bg-kyoto bg-cover rounded shadow-xl col-start-1 md:col-start-4 col-end-7" data-aos="zoom-y-out" data-aos-delay='400'>
              
            <h3 className='min-h-48 flex justify-end items-end text-xl text-white'>Kyoto</h3>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-start justify-start px-6 py-4 bg-tokyo bg-cover rounded shadow-xl col-start-1 col-end-7 md:col-end-3" data-aos="zoom-y-out" data-aos-delay='800'>
              
            <h3 className='min-h-48 flex justify-end items-end text-xl text-white'>Tokyo</h3>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-start justify-start px-6 py-4 bg-niigata bg-cover rounded shadow-xl col-start-1 col-end-7 md:col-start-3 md:col-end-5" data-aos="zoom-y-out" data-aos-delay='1200'>
                      
            <h3 className='min-h-48 flex justify-end items-end text-xl text-white'>Niigata</h3>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-start justify-start px-6 py-4 bg-sapporo bg-cover rounded shadow-xl col-start-1 md:col-start-5 col-end-7" data-aos="zoom-y-out" data-aos-delay='1600'>
            <h3 className='min-h-48 flex justify-end items-end text-xl text-white'>Sapporo</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
