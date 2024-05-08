import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <h1>Salon App</h1>
        <h1>LOGIN PAGE</h1>
        <div className='container'>
        <form action="/submit" method="post">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="email"/>
            {/* <label htmlFor="Phone Number">PhoneNumber</label> */}
            {/* <input type='tel' id='phone' name='Phone Number'></input> */}
            <label htmlFor="password">Password </label>
            <input type='password' id='password' name='password' placeholder='password'/>
            <button type="submit">Submit</button>
            or New user? create a account <a href='/signin'> signin</a>
        </form>

          
        </div>




    </div>
  )
}

export default LoginPage