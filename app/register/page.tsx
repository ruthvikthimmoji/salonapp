"use client";
import React, { useState } from 'react'
import './globals.css';

const RegisterPage = () => {

  const [PhoneNumber,setPhoneNumber] = useState('');
  const [OtpRequested,setOtpRequested] = useState(false);
  const [OtpVerified,setOtpVerified] = useState(false);
  const [otp,setOTP] =useState('');


  const handlePhoneNumberChange = (event:any) => {
    setPhoneNumber(event.target.value); 

  };
  const handleRequestOTP =() =>{  
    console.log("OTP requested for the PhoneNumber:",PhoneNumber);
    console.log('Generated OTP:', enteredOTP);
    setOtpRequested(true);
    sendOTP(PhoneNumber);
  };

  const sendOTP = (PhoneNumber:string) => {
    const enteredOTP = Math.floor(100000 + Math.random() * 900000); 
    console.log('OTP is send  to ${PhoneNumber} : ${enteredOTP}')

  };

  const enteredOTP = () => {};

  
  const handleVerifyOTP = () =>{

    if (enteredOTP === enteredOTP ) {
      console.log('OTP verified successfully');
      setOtpVerified(true); // Set OTP verification flag
    } else {
      console.log('Incorrect OTP. Please try again.');
    }


    const otp = prompt('Enter OTP');
    if (otp === '123456') { // Replace '123456' with the actual OTP
      console.log('OTP verified successfully');
      setOtpVerified(true); // Set OTP verified flag
    } else {
      prompt('Invalid OTP');
      setOtpVerified(false);
  }
};



  return (
    <div>
      <header> 
        <div className='flex justify-between items-center'>
        <a href='..'>
          <button className='border border-emerald-600 rounded-btn px-4 py-2 m-6'> 👈BACK </button>
          </a>
        <h2 className='flex justify-end font-sans text-2xl font-semibold px-12 '>SALON APP</h2>
        </div>
      </header>



      <main className='m-4 px-8 py-6'>
       <div className='container mx-auto flex justify-center items-center'>
        <div  className=' flex flex-col font-thin text-4xl m-12'>
        <h1>WELCOME BACK!</h1>
        <h2 className=' text-xs flex justify-center px-5 py-4'>Login to your Account.</h2>
        </div> 
        </div>
       
        

        <div className='container mx-auto flex justify-center items-center'>
  <div className='flex flex-col font-sans font-medium'>
    <label htmlFor="phone" className="mb-2">Phone Number</label>
    
    <input 
      className='border rounded-btn px-6 py-2 m-4 bg-transparent'
      type="tel" 
      id="phone" 
      name="phone" 
      value={PhoneNumber} 
      onChange={handlePhoneNumberChange} 
      autoComplete='on'
    />
    {!OtpRequested && <button onClick={handleRequestOTP} className=" px-6 py-2 m-2 bg-emerald-600 text-white rounded-md">Request OTP</button>}
    <div>
    {OtpRequested && (
        <div>

          <label htmlFor="otp">Enter OTP</label>
          <input className=' border rounded-btn px-4 py-2 m-4 bg-transparent focus:outline-none  focus:border-blue-300' 
            type="text" 
            id="otp" 
            name="otp" 
            value={otp}
            onChange={(event) => setOTP(event.target.value)}
          />
        </div>
         )}
    </div>
    {OtpRequested && !OtpVerified && <button onClick={handleVerifyOTP} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Verify OTP</button>}
    </div>
    </div>
      </main>
      

      
      <footer>
        <div className='flex justify-center items-center font-thin text-m '>
        <h2> Need to setup? <a href='tel:6361906550' className='hover:text-black'>contact us</a></h2>
        </div>
      </footer>























    </div>
  )
}

export default RegisterPage