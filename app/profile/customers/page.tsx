"use client";
import React, { useEffect, useState } from 'react';
import './globals.css';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newLastDate, setNewLastDate] = useState('');
  const [newServices, setNewServices] = useState('');
  const [newAttendent,setNewAttendent] = useState('');
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/customers.json');
      const jsonData = await response.json();
      setCustomers(jsonData);
    };

    fetchData();
  }, []);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const newCustomer = {
      Name: newName,
      Phone: newPhone,
      LastDate: newLastDate,
      Services: newServices,
      Attendant: newAttendent  
    };
    setCustomers([...customers, newCustomer]);
    setShowPopup(false);
    setNewName('');
    setNewPhone('');
    setNewLastDate('');
    setNewServices('');
    setNewAttendent('');
  };

  const handleToggleExpand = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className='min-h-screen'>
      <header className='m-6 mx-auto rounded-btn px-4 py-8'>
        <div className='flex justify-between items-center'>
          <a href='../profile'>
            <h1 className='text-4xl font-semibold'>◀ SALON APP</h1>
          </a>
          <a href='..'>
            <button className='px-5 py-3 m-2 mx-auto hover:border-orange-300 bg-orange-500 shadow-lg shadow-black rounded-badge'>
              LOGOUT
            </button>
          </a>
        </div>
      </header>
      <div className="container mx-auto">
        <table className='border w-[96%] my-6 mx-[2%]'>
          <thead className='border bg-orange-600 rounded-badge'>
            <tr>
              <th className='text-center'>Name</th>
              <th className='text-left'>Phone</th>
              <th className='text-center'>Last Date</th>
              <th className='text-center'></th> {/* Updated column header */}
            </tr>
          </thead>
          <tbody className='text-white py-4'>
            {customers.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className='text-center'>{item.Name}</td>
                  <td className='text-left'>{item.Phone}</td>
                  <td className='text-center'>{item.LastDate}</td>
                  <td className='text-center'>
                    <button onClick={() => handleToggleExpand(index)}>
                      {expandedRows[index] ? '▼' : '▶'}
                    </button> 
                  </td>
                </tr>
                {expandedRows[index] && (
                  <>
                    <tr>
                      <td colSpan="4" className='rounded bg-orange-600 bg-transparent border'>
                        <div className='flex justify-between px-4 py-2'>
                          <span>Services</span>
                          <span>Attendant</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" className='bg-gray-800 border bg-transparent'>
                        <div className='flex justify-between px-4 py-2'>
                          <span>{item.Services}</span>
                          <span>{item.Attendant}</span>
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className='flex justify-end items-end'>
        <button onClick={handleAddClick} className='rounded-btn bg-orange-500 px-6 py-2 flex justify-center '>Add</button>
        </div>
        {showPopup && (
          <div className="flex flex-col bg-orange-500 px-4 py-3 mt-6  
          relative bg-opacity-5 backdrop-blur-lg p-8 rounded-lg shadow-lg shadow-black">
            <form className='flex justify-center' onSubmit={handleSubmit}>
              <input className='border rounded-badge px-6 py-2 m-4 flex flex-col bg-transparent'
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input  className='border rounded-badge px-6 py-2 m-4 flex flex-col  bg-transparent'
                type="tel"
                placeholder="Phone"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
              <input  className='border rounded-badge px-6 py-2 m-4 flex flex-col  bg-transparent'
                type="date"
                placeholder="Date"
                value={newLastDate}
                onChange={(e) => setNewLastDate(e.target.value)}
              />
              <input  className='border rounded-badge px-6 py-2 m-4 flex flex-col bg-transparent'
                type="text"
                placeholder="Services"
                value={newServices}
                onChange={(e) => setNewServices(e.target.value)}
              />
              <input  className='border rounded-badge px-6 py-2 m-4 flex flex-col bg-transparent'
              type='text'
              placeholder='Attendent'
              value={newAttendent}
              onChange={(e) => setNewAttendent(e.target.value)}
              />

              <button type="submit" className='rounded-btn  hover:border px-6 py-2 m-4 bg-orange-600'>submit</button>
            </form>
          </div>
        
        )}
        <div className='py-4 m-8 rounded-badge border hover:bg-orange-600 flex justify-center items-center'>
          <a href='/offers'>
            <button className='text-2xl font-serif font-thin'>Offers ► </button>
          </a>
        </div>
      </div>

      <footer className='py-4 m-4'>
        <div className="text-center mt-4 font-serif">
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default CustomerPage;
