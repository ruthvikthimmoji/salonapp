import React from 'react'
import './globals.css'



const home = () => {
  return (
   
    <div className='bg-red-300 w-screen' >
      <div>
        <h1 className='p-12  text-3xl  flex justify-start font-semibold text-emerald-50'>Salon App</h1>
      </div>
      
      <div className='flex justify-center'>
        {/* <img src='images.png'  className='max-h-screen max-w-screen-xl' alt='salon'></img> */}
        <img src='Asset-1-1.png' alt='image' className=' flex items-center p-8 '></img>
        </div>
        <div className='p-2 flex justify-center'>
        <a href='/login'> <button name='login' className="justify-center rounded-btn p-3 m-7 bg-emerald-700 text-white hover:bg-sky-700 px-20 py-4 text-center font-bold">Login</button></a>
        </div>
        <div className='m-2 flex justify-center '>
        <h2 className=' text-emerald-50  hover:text-sky-700'>Don't have an account? <a href='/signup'> SignUp</a></h2>
      </div>
      <div className='p-8'>
        <h1 className=' text-emerald-50 hover:text-sky-700 text-xs flex justify-center'>Need help to setup?<a href='tel:9148740550'><button>ContactUs.</button>
        </a></h1>
      </div>
    </div>
 
    
  )
}

export default home