
function HeroHome() {

  return (
    <section class="relative block h-screen">
        <div
        data-aos="zoom-y-out"
          class="absolute top-0 w-full h-full bg-center bg-cover"
        >
          <span
            class="w-full h-full absolute bg-hero bg-center bg-cover text-white"
          >
            <div className="h-full flex flex-col items-start justify-center px-4 md:w-4/5 md:px-10 mx-auto">
            <h1 className="text-3xl md:text-4xl">Discover amazing places in <br /> japan</h1>
            <p className='w-full lg:w-big my-4'>jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
            <div className="flex mt-4 flex-wrap">
            <div className='flex border-b-2 mr-4 w-full md:w-2/5 lg:w-1/3 my-4 md:my-0'>
            <img src={require('../images/rec.png').default} alt="" className='w-8 h-8 mr-4'/>
              <input type="text" className="bg-transparent appearance-none border-none placeholder-white focus:ring-0 w-big" placeholder="What would you like to do?"/>
            </div>
            <div className='flex border-b-2 mr-4 w-full md:w-2/5 lg:w-1/3 my-4 md:my-0'>
            <img src={require('../images/rec.png').default} alt="" className='w-8 h-8 mr-4'/>
              <input type="text" className="bg-transparent appearance-none border-none placeholder-white focus:ring-0 w-big" placeholder="Where would you like to go?" />
            </div>
            <button className="bg-blue-700 hover:bg-white hover:text-blue-700 transition duration-150 ease-in-out md:mt-6 lg:mt-0 px-10 py-2 lg:py-0">Search</button>
            </div>
            </div>
          </span>
        </div>
      </section>
  );
}

export default HeroHome;