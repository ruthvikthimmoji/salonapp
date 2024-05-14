import React from 'react'
import './globals.css';

const offerPage = () => {
  return (
    <div>
      <header className='flex justify-between items-center m-6 mx-auto rounded-btn px-4 py-8'>
        <a href='./profile'>
        <button className='rounded-btn px-4 py-2 border border-white bg-transparent hover:bg-amber-600'>
          Back
        </button>
        </a>
        <h1 className='text-4xl font-semibold'>Offers</h1>
        <button className='rounded-btn px-4 py-2 border border-white  bg-amber-600'>
          Logout
        </button>
      </header>

      <main >
        <div>
          {/* <h2>Customers Details</h2> */}

        </div>

        {/* <div className='font-bold flex justify-start px-4'>
          <h1>OFFERS /-</h1> 
          <div> */}

          {/* </div> */}
        


        
      
<div className='bg-transparent'>
<div className="w-full overflow-x-scroll snap snap-x snap-mandatory flex scroll-py-12">
      <div className="w-1/2 h-screen flex-shrink-0 flex justify-center items-center snap-start border border-red-300">
        <h1 className="text-5xl m-4">50% off on haircut </h1>
      </div>
      <div className="w-1/2 flex-shrink-0 flex justify-center items-center snap-start border border-pink-700">
        <h1 className="text-4xl">Section 2</h1>
      </div>
      <div className="w-1/2 flex-shrink-0 flex justify-center items-center snap-start border border-yellow-500 ">
        <h1 className="text-4xl">Section 3</h1>
      </div>
    </div>
    </div>








        
      </main>


      <footer className='py-4'>
      <div className="text-center mt-4 font-extralight" >
        <span>&copy; SalonApp. All rights reserved.</span>
      </div>
      </footer>
        

        
    </div>


  )
}

export default offerPage