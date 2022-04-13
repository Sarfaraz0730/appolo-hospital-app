import React from 'react'
import './Home.css'




const Home = () => {
  
  return (
    <div>
     
      <div className='main-box'>
          

              <div className="input-group">
  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" required>
  <option value="#" >What are you Looking for</option>
                <option value="#">Audiologist</option>
                <option value="#">Cardiologist</option>
                <option value="#">Dermologist</option>
                <option value="#">Dentist</option>
                <option value="#">Eye Specialist</option>
                <option value="#"> ENT specialist</option>
                <option value="#">Orthopaedic surgeon</option>
  </select>
 
</div>


<div className="input-group" required>
  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
  <option value="#" >Search City</option>
                <option value="#">Delhi NCR</option>
                <option value="#">Bhopal</option>
                <option value="#">Chandigharh</option>
                <option value="#">Mohali</option>
                <option value="#">Patna</option>
                <option value="#"> Jaipur</option>
                <option value="#">Indore</option>
  </select>
 
</div>






             <div>
                 <button className="btn btn-primary">  Book Appointment</button>
             </div>



      </div>


    </div>
  )
}

export default Home
