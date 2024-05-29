import React from 'react'
import './globals.css'
import Link from 'next/link'


const Profile = () => {



  return (
    <div>
    <header className=' m-6 mx-auto rounded-btn px-4 py-8'>
    <div className='flex justify-between'>
      <h1 className=' text-4xl font-semibold '>
        SALON APP</h1>
      <a href='..'><button className='px-6 py-4 m-2  bg-orange-500 rounded-badge  shadow-lg shadow-black'>
        LOGOUT</button></a>
      </div>
    </header>
  
    
    <main className= '  font-medium mx-auto flex flex-col px-12 py-8 mt-4 justify-center items-center' >
      <div className=' flex flex-col bg-orange-500 px-8 py-8 mt-6  
      relative bg-opacity-5 backdrop-blur-lg p-8 rounded-lg shadow-lg shadow-black' >
      <h1 className='font-extrabold flex justify-center'>
        PROFILE
      </h1 >
      <label className='py-4'
       htmlFor='text'> Name
      </label>
      <input className='border rounded-badge px-6 py-2  bg-transparent' 
      readOnly={true}>
      </input>

      <label className='py-4' 
      htmlFor='tel'> Phone Number
      </label>
      <input className=' border rounded-badge px-6 py-2 bg-transparent'
       readOnly={true}></input>
       
       <Link href="/profile/customers">
      <button className=" px-12 py-2 m-4 bg-amber-600 hover:bg-orange-300 hover:text-black rounded-badge">
        customers Page
      </button></Link>
   
      <Link href="/profile/offers">
      <button className=" px-16 py-2 m-4 bg-amber-600 hover:bg-orange-300 hover:text-black rounded-badge" >
        Offers Page
      </button></Link>
      </div>
    </main>
    
    
     <footer>
     <div className="text-center mt-4 font-extralight" >
        <span>&copy; SalonApp. All rights reserved.</span>
      </div>
     </footer>
    </div>
  )
}

export default Profile