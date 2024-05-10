import React from 'react'
import './globals.css'



const home = () => {
  return (
    <div>


      <header className='container mx-auto flex m-4'>
        <div>
          <h1 className=' px-8 mt-8 text-5xl font-serif font-extrabold text-white'>SALON APP</h1>
        </div>
      </header>


      <main className='m-12'>
        <div className="container mx-auto mt-4 flex flex-wrap justify-between items-center">
          <div className=' bg- flex flex-col px-12 py-8 mt-4 justify-center'>
          <h1 className='font-serif  font-extrabold text-4xl  px-8 text-white' > Welcome 👋 </h1>
          <a href='./register' className="text-center"> 
          <button className='m-8 rounded-btn px-12 py-4 bg-emerald-600 hover:bg-cyan-600 text-white hover:text-gray-950 '> Register</button> 
          </a> 
          <h3 className='flex justify-center  text-s text-white py-2'> Need help to Setup?
          <a href='tel:6361906550' className='hover:text-gray-600' > contact us </a></h3>
          </div>
          <div className='flex flex-col mt-8'>
            <img className='p-4 scroll-py-12' src='Asset-1-1.png'></img>
          </div>
        </div>
      </main>




      <footer className=" text-white m-9">
         <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-col p-4">
            <span>Contact us:</span>
            <span>Email: salonapp@exc.com</span>
            <span>Phone: +1 123-456-7890</span>
             </div>

             <div className="flex flex-col p-4">
                <span></span>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="flex flex-col p-4">
                <span>Connect with us:</span>
                <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
              </div>

              <div className="text-center mt-4">
                <span>&copy; SalonAPP. All rights reserved.</span>
              </div>
          </div>
       </footer>
    
</div>
  )
}

export default home



