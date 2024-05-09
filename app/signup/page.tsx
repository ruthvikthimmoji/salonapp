"use client";
import React, { useState } from 'react'

const signUp = () => {

  const [phone, setPhone] = useState({
    phone =''
  });
  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  function createUser(event: any){
    event.preventDefault();
    // console.log(phone);
    // redirect to profile page
  }

  return (
    <div>
    <h1>Salon App</h1>
      <h1>SIGN-UP</h1>
      <div className='container'>
      <form onSubmit={createUser}>
          {/* <label htmlFor="email">Email</label> */}
          {/* <input type="email" id="email" name="email" placeholder="email"/> */}
          <label htmlFor="Phone Number">PhoneNumber</label>
          <input type='tel' id='phone' name='Phone Number' value={phone} onChange={handlePhoneChange}></input>
          <label htmlFor="otp">OTP</label>
          <input type="number" id='otp' name='otp' placeholder='otp'/>
          {/* <input type="checkbox" id="checkbox" name="checkbox"/> */}
          <button type="submit">Submit</button>
      </form>
      </div>
  </div>
)
}

export default signUp