import React from 'react'



const LoginPage = () => {
  return (
    <div className='card'>
      <a href='..'> <button>back</button></a>
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
            <input  className='px-12 py-4' type='password' id='password' name='password' placeholder='password'/>
            <a href='/profile'>
              <button >Login</button></a>
            or New user? create a account <a href='/signin'> signin</a>
        </form>
        </div>
    </div>
    </div>
  )
}

export default LoginPage