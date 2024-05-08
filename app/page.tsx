import React from 'react'
import '/app/globals.css'



const home = () => {
  return (
 
    
    <div className="card">
      <h1> Salon App </h1>
  <figure><img src="salon1.png" alt="salon" /></figure>
  <div className="card-body"> 
      <a href='/login'> 
       <button> 
        Login
       </button>
       </a>
       or
       <a href='/signin'> 
       <button> 
        Signin
       </button>
       </a>
  </div>
</div>



  )
}

export default home