"use client";
import React, { useEffect, useState } from 'react';
import './globals.css';



const OffersPage = () => {
  const [offer, setOffer] = useState([]);

  const [newOffer, setNewOffer] = useState({ key: '', number: '', Description: '', status: '' });

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedOffers = JSON.parse(localStorage.getItem('offers'));
    if (storedOffers) {
      setOffer(storedOffers);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever offer state changes
    localStorage.setItem('offers', JSON.stringify(offer));
  }, [offer]);

  const handleAddOffer = () => {
    const newItem = {
      key: offer.length + 1,
      number: newItemNumber,
      Description: newItemDescription,
      status: newItemStatus,
    };
    setOffer([...offer, newItem]);

    setShowEntryPopup(false);

    setNewItemNumber('');
    setNewItemDescription('');
    setNewItemStatus(false); // Changed to boolean value
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffers) => ({
      ...prevOffers,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setNewItemStatus(e.target.checked);
  };

  const [showEntryPopup, setShowEntryPopup] = useState(false);
  const [newItemNumber, setNewItemNumber] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemStatus, setNewItemStatus] = useState(false); // Changed to boolean value

  return (
    <div>
      <header className='m-6 mx-auto rounded-btn px-4 py-8'>
        <div className='flex justify-between items-center'>
          <a href='./customers'>
            <button className='px-4 py-2 m-2 shadow-lg shadow-black bg-orange-500 rounded-badge'>
              Back
            </button>
          </a>
          <h1 className='text-4xl font-bold'>
            Offers
          </h1>
          <button className='px-4 py-2 m-2 shadow-lg shadow-black bg-orange-500 rounded-badge'>
            Logout
          </button>
        </div>
      </header>
      <main>
        <table className='border w-[96%] my-6 mx-[2%]'>
          <thead className='bg-orange-500 border'>
            <tr>
              <th>Number</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {offer.map((offer) => (
              <tr key={offer.key}>
                <td className='text-center'>{offer.number}</td>
                <td className='text-center'>{offer.Description}</td>
                <td className='text-center'>{offer.status} <input type="checkbox" /></td>
                {/* <td><button>delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center '>
          {showEntryPopup && (
            <div className='border m-4 px-8 py-6 rounded-badge border-orange-400 shadow-lg hover:shadow-orange-400'>
              <h2 className='flex justify-center text-2xl'>Add New Item</h2>
              <input className='border rounded-btn px-4 py-2 m-4 bg-transparent focus:outline-none focus:border-orange-500'
                type="number"
                placeholder="Number"
                value={newItemNumber}
                onChange={(e) => setNewItemNumber(e.target.value)}
              />
              <textarea className='border rounded-btn px-4 py-2 m-4 bg-transparent focus:outline-none flex justify-center  focus:border-orange-500'
                placeholder="Description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
              />
              <input className='border rounded-btn m-4 flex justify-start bg-transparent focus:border-orange-500'
                type="checkbox"
                checked={newItemStatus}
                onChange={handleCheckboxChange}
              />
              <div className='flex justify-center items-center ' >
                <button className='border rounded-badge  px-4 py-2 m-4 hover:bg-orange-500' onClick={handleAddOffer}>Add Item</button>
                {/* <button onClick={() => setShowEntryPopup(true)}>Add Item</button> */}
              </div>
            </div>
          )}
        </div>
        <div className='flex justify-end items-end '>
          <button className='rounded-badge px-4 py-2 m-4 border hover:border-none hover:bg-orange-500 shadow-lg hover:shadow-black'
            onClick={() => setShowEntryPopup(true)}> ADD</button>
        </div>
      </main>
      <footer>
        <div className="text-center mt-4 font-thin" >
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default OffersPage;
