import React from 'react'
import '/app/globals.css'



const home = () => {
  return (
 
    
    <div className="">
      <h1> Salon App </h1>
  <figure><img src="salon1.png" alt="salon" /></figure>
  <div className=""> 
      <a href='/login'> 
       <button> 
        Login
       </button>
       </a>
       <a href='/signin'> 
       <button> 
        Signin
       </button>
       </a>
       <a href='tel:6361906550'> <button> contact Us</button></a>
  </div>
</div>



  )
}

export default home