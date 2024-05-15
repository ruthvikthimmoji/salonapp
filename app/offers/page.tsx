import React from 'react'
import './globals.css'

const offersPage = () => {
  const offers = [
    {
      key: 1,
      SNumber: "Dheeraj",
      Description: "25%off on Haircut",
      status: true
    }

  ];

  return (
    <div className='min-h-screen'>
      <header className=' m-6 mx-auto rounded-btn px-4 py-8'>
        <div className='flex justify-between items-center'>
          <a href='./customers'>
          <button className='px-6 py-4 m-2 shadow-lg shadow-black bg-orange-500 rounded-badge'>
            Back
          </button></a>
          <h1 className='text-4xl font-bold'>
            Offers
          </h1>
          <button className='px-6 py-4 m-2 shadow-lg shadow-black bg-orange-500 rounded-badge'>
            Logout
          </button>
        </div>
      </header>
      <main>
        <div className="container py-4  mx-auto">
          <table className='border w-[96%] my-6 mx-[2%]'>
            <thead className='bg-orange-500 border'>
              <tr>
                <th>SNumber</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {offers.map((offer) => (
              <tr key={offer.key}>
                <td className='text-center'>{offer.SNumber}</td>
                <td className='text-center'>{offer.Description}</td>
                <td className='text-center'>{offer.status} <input type="checkbox"/></td>
              </tr>))}
            </tbody>
          </table>
        </div>

        <div className="w-screen h-screen overflow-x-scroll snap snap-x snap-mandatory m-5 flex rounded-box">
          <div className="w-1/2 flex-shrink-0 flex justify-center items-center snap-start">
            <h1 className="text-4xl">Section 1</h1>
          </div>
          <div className="w-1/2 flex-shrink-0 flex justify-center items-center snap-start">
            <h1 className="text-4xl">Section 2</h1>
          </div>
          <div className="w-1/2  flex-shrink-0 flex justify-center items-center snap-start">
            <h1 className="text-4xl">Section 3</h1>
          </div>
        </div>


      </main>
      <footer>
        <div className="text-center mt-4 font-extralight" >
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default offersPage