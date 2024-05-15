"use client";
import { useEffect, useState } from 'react'
import './globals.css';
import { NextResponse } from 'next/server';


const RegisterPage = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const [hasAccount, setHasAccount] = useState(false);
  const [name, SetName] = useState('');

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const handleNameChange = (event: any) => {
    SetName(event.target.value);
  }
  const handleRequestOTP = () => {
    console.log("OTP requested for the PhoneNumber:", phoneNumber);
    generateOTP();
    console.log('Generated OTP:', generatedOtp);
    setOtpRequested(true);
    sendOTP(phoneNumber);
  };

  const sendOTP = (PhoneNumber: string) => {
    console.log(`OTP is sent to ${PhoneNumber} : ${generatedOtp}`);
  };

  const generateOTP = () => {
    var value = "";
    for (var i = 0; i < 4; i++) {
      value += Math.floor(Math.random() * 10).toString();
    }
    console.log(value);
    setGeneratedOtp(value);
  };


  const handleVerifyOTP = () => {

    if (generatedOtp === enteredOtp) {
      console.log('OTP verified successfully');
      setOtpVerified(true); // Set OTP verification flag
      setHasAccount(false);
    } else {
      console.log('Incorrect OTP. Please try again.');
    }
  };

  async function handleSave(event: any) {
    console.log(name);
    
  }

  return (
    <div>
      <header>
        <div className='flex justify-between items-center'>
          <a href='..'>
            <button className='hover:bg-orange-300  bg-orange-500 rounded-badge px-4 py-2 m-6 hover:text-black'> 👈 BACK </button>
          </a>
          <h2 className='flex justify-end font-sans text-2xl font-semibold text-orange-300 px-12 '>SALON APP</h2>
        </div>
      </header>



      <main className='m-4 px-8 py-6'>
        <div className='container mx-auto flex justify-center items-center'>
          <div className=' flex flex-col font-thin text-4xl m-12'>
            <h1>WELCOME!</h1>
            <h2 className=' text-xs flex justify-center px-5 py-4'>Login to your Account.</h2>
          </div>
        </div>



        <div className='container mx-auto flex justify-center items-center'>
          <div className='flex flex-col font-sans font-medium'>

            {(otpVerified) ?
              <>
                <label htmlFor='Name' className="mb-2" > {!hasAccount ? "Enter your" : ""} Name</label>
                <input
                  className='border rounded-badge px-6 py-2 m-4 bg-transparent'
                  type="Name"
                  id="Name"
                  name="Name"
                  autoFocus={true}
                  value={name}
                  readOnly={hasAccount}
                  onChange={handleNameChange}
                  autoComplete='on'
                />
              </>
              : null
            }

            <label htmlFor="phone" className="mb-2">Phone Number</label>
            <input
              className='border rounded-badge px-6 py-2 m-4 bg-transparent'
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              readOnly={otpRequested || otpVerified}
              onChange={handlePhoneNumberChange}
              autoComplete='on'
            />
            {!otpRequested ?
              <button onClick={handleRequestOTP} className=" px-6 py-2 m-2 bg-orange-500  rounded-badge">
                Request OTP
              </button>
              : null}
            <div>
              {otpRequested && !otpVerified ?
                <div>
                  <label htmlFor="otp">Enter OTP</label>
                  <input className=' border rounded-btn px-4 py-2 m-4 bg-transparent focus:outline-none  focus:border-orange-500'
                    type="text"
                    id="otp"
                    name="otp"
                    autoFocus={true}
                    value={enteredOtp}
                    onChange={(event) => setEnteredOtp(event.target.value)}
                  />
                </div>
                : null}
            </div>
            {otpRequested && !otpVerified ?
              <button onClick={handleVerifyOTP} className="mt-2 px-4 py-2 bg-orange-500 rounded-badge">
                Verify OTP
              </button>
              : null}
              {otpVerified && !hasAccount?
              <button onClick={handleSave} className="mt-2 px-4 py-2 bg-orange-500 rounded-badge">
                Save
              </button>
              : null}
          </div>
        </div>
      </main>
      <footer>
        <div className='flex justify-center items-center font-thin text-m '>
          <h2> Need to setup? <a href='tel:6361906550' className='hover:underline'>Contact us</a></h2>
        </div>
      </footer>
    </div>
  )
}
export default RegisterPage;