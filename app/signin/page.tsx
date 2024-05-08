import React from 'react'

const sigIn = () => {
  return (
    <div>
    <h1>Salon App</h1>
      <h1>SIGN-IN</h1>
      <div className='container'>
      <form action="/submit" method="post">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email"/>
          <label htmlFor="Phone Number">PhoneNumber</label>
          <input type='tel' id='phone' name='Phone Number'></input>
          <label htmlFor="password">Password</label>
          <input type='password' id='password' name='password' placeholder='password'/>
          
          <input type="checkbox" id="checkbox" name="checkbox"/>
          <button type="submit">Submit</button>
          or
      </form>
      </div>
  </div>
)
}

export default sigIn