"use client"
import React, { useState } from 'react'
import './globals.css';

const EditableTable =() => {
  const[edit,setEdit] =useState(false);
}
const customerPage = () => {
  const customers = [
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
  ];
  const toggleExpanded = (customer: any) => {
    customer.showMore = !customer.showMore;
  };



  const addToTable = () => {
    // setEdit(!edit);

  };


  return (
    <div className='min-h-screen'>
      <header className=' m-6 mx-auto rounded-btn px-4 py-8'>
        <div className='flex justify-between items-center'>
          <h1 className=' text-4xl font-semibold'>
            SALON APP</h1>
          <a href='..'><button className='px-6 py-4 m-2 mx-auto border border-yellow-900   hover:border-amber-600 bg-amber-600 rounded-md'>
            LOGOUT</button></a>
        </div>
      </header>
      <div className="container mx-auto">
        <table className='w-[96%] my-6 mx-[2%]'>
          <thead className=' bg-cyan-800'>
            <tr>
              <th className='text-center'>Name</th>
              <th className='text-left' >Phone</th>
              <th className='text-center'>Last Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-black'>
            {customers.map((customer) => (
            <tr key={customer.key}>
              <td className='text-center'>{customer.name}</td>
              <td className='text-left'>{customer.phone}</td>
              <td className='text-center'>{customer.lastDate}</td>
              {/* <td>{edit?<input typeof='text'></input>:{customer.name}}</td> */}
              <td><button onClick={()=>toggleExpanded(customer)}>{customer.showMore ? "▴" : "▾"}</button></td>
            </tr>))}
          </tbody>
        </table>
        <div className='flex justify-end items-end '>
          <button  onClick={addToTable}  className='px-6 py-2 m-2 rounded-btn border border-yellow-900 hover:bg-amber-600'>Add
          </button></div>
      </div>


      <footer className='py-4'>
      <div className="text-center mt-4 font-extralight" >
        <span>&copy; SalonApp. All rights reserved.</span>
      </div>

      </footer>
      </div>
  )
}

export default customerPage

function setEdit(arg0: boolean) {
  throw new Error('Function not implemented.');
}
