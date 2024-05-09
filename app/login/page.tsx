import React from 'react'
import './globals.css'

const LoginPage = () => {
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
      <div className='border border-Neutral-50 p-10 rounded-md bg-red-300 '>
        <div>
          <h1 className='m-12 text-center font-sans font-extrabold text-5xl '>LOGIN 😄</h1>
          </div>

          <div className='flex justify-center p-4 m-6'>
          <form className='border p-12 m-12 px-24 py-12' action="/submit" method="post">


          <label className=' block mb-4 font-bold' htmlFor="Phone Number">PhoneNumber</label>
          <input className="block w-full px-4 py-2 mb-4 border rounded-md bg-transparent text-black" type='tel' id='phone' name='Phone Number' placeholder='Phone Number'></input>


          <label className='block mb-4 font-bold' htmlFor="password">Password </label>
          <input className="block w-full px-4 py-2 mb-4 border rounded-md bg-transparent text-black"  type='password' id='password' name='password' placeholder='password' />


          {/* <a href='/profile'></a> */}
            <button className="justify-center rounded-btn p-3 m-7 bg-emerald-700 text-white hover:bg-sky-700 px-20 py-4 text-center font-bold">Login</button>


            <h1 className='text-center'> or New user? create a account</h1>
             <a className='flex justify-center' href='/signup'>signup</a>
             </form>

          </div>
      </div>
    </div>
  )
}
    

















    
    <div>
      <h1 className="mb-3 text-s font-semibold " >Salon App</h1>
        <h1>LOGIN PAGE</h1>
        <div className='container'>
        <form action="/submit" method="post">
            {/* <label htmlFor="email">Email</label> */}
            {/* <input type="email" id="email" name="email" placeholder="email"/> */}
            <label htmlFor="Phone Number">PhoneNumber</label>
            <input type='tel' id='phone' name='Phone Number'></input>
            <label htmlFor="password">Password </label>
            <input  type='password' id='password' name='password' placeholder='password'/>
            <a href='/profile'>
              <button >Login</button></a>
            or New user? create a account <a href='/signup'> signup</a>
        </form>
        </div>
    </div>
    
 

export default LoginPage