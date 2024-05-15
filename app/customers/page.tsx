"use client"
import React, { useState } from 'react';
import './globals.css';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([
    {
      key: 1,
      name: "Dheeraj",
      phone: "8669364716",
      lastDate: "05/02/2024",
      showMore: false,
      services: ["haircut", "beard trim"],
      attendant: "me"
    },
    {
      key: 2,
      name: "Supreet",
      phone: "8669364716",
      lastDate: "05/02/2024",
      showMore: false,
      services: ["haircut", "beard trim"],
      attendant: "me"
    },
  ]);

  const toggleExpanded = (indexToChange: number) => {
    setCustomers(customers.map((customer, index) => {
      if (index === indexToChange) {
        customer.showMore = !customer.showMore;
      }
      return customer;
    }));
  };


  return (
    <div className='min-h-screen'>
      <header className=' m-6 mx-auto rounded-btn px-4 py-8'>
        <div className='flex justify-between items-center'>
          <a href='../profile'>
          <h1 className=' text-4xl font-semibold'>
          ◀ SALON APP</h1>
            </a>
          <a href='..'><button className='px-5 py-3 m-2 mx-auto hover:border-orange-300 bg-orange-500  shadow-lg shadow-black rounded-badge'>
            LOGOUT</button></a>
        </div>
      </header>
      <div className="container mx-auto">
        <table className='border w-[96%] my-6 mx-[2%]'>
          <thead className=' border bg-orange-600 rounded-badge'>
            <tr>
              <th className='text-center'>Name</th>
              <th className='text-left' >Phone</th>
              <th className='text-center'>Last Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {customers.map((customer, index) => (
              <tr key={customer.key}>
                <td className='text-center'>{customer.name}</td>
                <td className='text-left'>{customer.phone}</td>
                <td className='text-center'>{customer.lastDate}</td>
                {/* <td>{edit?<input typeof='text'></input>:{customer.name}}</td> */}
                <td><button onClick={() => toggleExpanded(index)}>{customer.showMore ? "▴" : "▾"}</button></td>
              </tr>))}
          </tbody>
        </table>
        <div className='flex justify-end items-end '>
          <button className='px-6 py-2 m-2 rounded-badge bg-orange-500 shadow-lg hover:shadow-black'>Add
          </button></div>
        <div className='py-4 m-8 rounded-badge border hover:bg-orange-600 flex justify-center items center'>
          <a href='/offers'>
            <button className='text-2xl font-serif font-extralight'>Offers ► </button>
          </a>
        </div>
      </div>


      <footer className='py-4 m-4'>
        <div className="text-center mt-4 font-extralight" >
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>

      </footer>
    </div>
  )
}

export default CustomerPage

