import React from 'react'
import './globals.css'


const Profile = () => {



  return (
    <div>
    <header className=' m-6 mx-auto rounded-btn px-4 py-8'>
    <div className='flex justify-between'>
      <h1 className=' text-4xl font-semibold'>
        SALON APP</h1>
      <a href='..'><button className='px-2 py-4px-6 py-2 m-2  border border-yellow-900   hover:border-amber-600 bg-amber-600 rounded-md'>
        LOGOUT</button></a>
      </div>
    </header>
  
    
    <main className= '  font-medium mx-auto flex flex-col px-12 py-8 mt-4 justify-center items-center' >
      <div className=' flex flex-col border border-amber-600 rounded-btn px-8 py-8 mt-6 '  >
      <h1 className='font-extrabold flex justify-center'>
        PROFILE
      </h1 >
      <label className='py-4'
       htmlFor='text'> Name
      </label>
      <input className='border rounded-btn px-6 py-2  bg-transparent' 
      readOnly={true}>
      </input>

      <label className='py-4' 
      htmlFor='tel'> Phone Number
      </label>
      <input className=' border rounded-btn px-6 py-2 bg-transparent'
       readOnly={true}></input>
       
       <a href='./customers'>
      <button className=" px-12 py-2 m-4 bg-amber-600 hover:bg-cyan-900 rounded-md">
        customers Page
      </button></a>
   
      <a href='./offers'>
      <button className=" px-16 py-2 m-4 bg-amber-600 hover:bg-cyan-900 rounded-md" >
        Offers Page
      </button></a>
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