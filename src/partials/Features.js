import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function Features() {

  return (
    <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg -mt-40 md:-mt-40"
      >
        <div className=" w-4/5 mx-auto py-10 md:py-20">
          <div className="flex flex-wrap justify-start">
              <div className="flex justify-center py-8">
                <span className='text-2xl go'>Benefits of Odigo</span>
              </div>
          </div>
          <div className="grid md:grid-cols-3 gap-x-4">
            <div className='flex flex-col justify-start py-10 md:py-0' data-aos="zoom-y-out" >
              <div className='w-12 py-8'>
              <img src={require('../images/jap.svg').default} alt="" className='w-full h-full' />
              </div>
              <span className='py-4'>Welcome to Odigo</span>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <div className='flex'>
                <span className='mr-4'>LEARN MORE</span>
                <img src={require('../images/Shape.svg').default} alt="" />
              </div>
            </div>
            <div className='flex flex-col justify-start py-10 md:py-0' data-aos="zoom-y-out" data-aos-delay='500'>
            <div className='w-12 py-8'>
              <img src={require('../images/avatar.svg').default} alt="" className='w-full h-full' />
              </div>
              <span className='py-4'>Your Personal Japan Guide</span>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <div className='flex'>
                <span className='mr-4'>LEARN MORE</span>
                <img src={require('../images/Shape.svg').default} alt="" />
              </div>
            </div>
            <div className='flex flex-col justify-start py-10 md:py-0' data-aos="zoom-y-out" data-aos-delay='1000'>
            <div className='w-12 py-8'>
              <img src={require('../images/Icon.svg').default} alt="" className='w-full h-full' />
              </div>
              <span className='py-4'>Promoting Local Businesses</span>
              <p className='py-4'>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
              <div className='flex'>
                <span className='mr-4'>LEARN MORE</span>
                <img src={require('../images/Shape.svg').default} alt="" />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </section>
  );
}

export default Features;
