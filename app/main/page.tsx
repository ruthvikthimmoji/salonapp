"use client";
import React, { useState } from 'react'
import './globals.css'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

    const router =useRouter();
    const [otp,SetOtp] = useState();


    const handleLogin = () => {



        router.push('./otp');
    };
  return (
    <div className='bg-red-300 w-screen max-h-screen '>
      <div>
      <a href='..'> 
      <button className='border rounded-btn px-8 py-2 m-8 bg-sky-50 bg-transparent hover:bg-sky-700'>Back</button>
      </a>
      </div>
      <div>
        {/* <h1 className='flex justify-center font-semibold font-sans text-center text-4xl'> Salon App </h1> */}
      </div>
      <div className='border border-Neutral-50 p-20 rounded-md bg-red-300 '>
        <div>
          <h1 className='m-12 text-center font-sans font-extrabold text-5xl '>LOGIN 😄</h1>
          </div>

          <div className='flex justify-center p-4 m-6'>
          <form className='border p-12 m-12 px-24 py-12' >


          <label className=' block mb-4 font-bold' htmlFor="Phone Number">PhoneNumber</label>
          <input className="block w-full px-4 py-2 mb-4 border rounded-md bg-transparent text-black" type='tel' id='phone' name='Phone Number' placeholder='Phone Number'></input>

          
            <button className="justify-center rounded-btn  my-2 bg-emerald-700 text-white hover:bg-sky-700 px-8 py-4 text-center font-bold" onClick={handleLogin}>Generate OTP</button>

             </form>

          </div>
      </div>
    </div>
  )
}

export default LoginPage