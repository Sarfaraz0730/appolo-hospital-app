import React from 'react'
import "./DoctorDetails.css"
import pic4 from "../images/pic4.jpg"
import Time from "../Appontment/Time"

const Sarfaraz = () => {
  return (
    <div className='color' >
   {/* div suru  */}

   <div className='drDetails'>
    <div>   <img  className='img1' src={pic4} alt="" /></div>
    <div> <h3 className='drtext'>Dr. Sarfaraz Sheikh</h3> <br />
    
     <h5  className='drtext1'>Associate Director - Surgon and Consultant, Lasers and Aesthetic Medicines </h5>
     <br />
     <h6  className='drtext1'> Surgon</h6>
     </div>


    <div style={{color:"white"}} > <h3 className='drtext'>Time Slot Available</h3> <br /><br />{Date()}</div>


    <div className='drtex'>
   
    <div style={{color:"green"}}>10:00 - 10:20</div>
      <div style={{color:"green"}}>10:30 - 10:50</div>
      <div style={{color:"green"}}>11:00 - 11:20</div>
      <div style={{color:"red"}}> 11:30 - 11:50</div>
      <div style={{color:"green"}}>12:00 - 10:50</div>
      <div style={{color:"green"}}>01:00 - 01:20</div>
      <div style={{color:"red"}}>02:00 - 02:20</div>
      <div style={{color:"green"}}>03:30 - 03:50</div>
      <div style={{color:"green"}}>04:00 - 04:20</div>
      <div style={{color:"red"}}>10:00 - 10:20</div>
      <div style={{color:"green"}}>10:30 - 10:50</div>
      <div style={{color:"red"}}>11:00 - 11:20</div>
      <div style={{color:"green"}}>10:00 - 10:20</div>
      <div style={{color:"green"}}>04:30 - 04:50</div>
      <div style={{color:"red"}}>05:00 - 05:20</div>
     
    
    </div>
   </div>




{/* div khatam */}
    </div>
  )
}

export default Sarfaraz
