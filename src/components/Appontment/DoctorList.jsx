import React from 'react'
import './DoctorList.css'
import p from "../images/p.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"
import pic6 from "../images/pic6.jpg"
import pic7 from "../images/pic7.jpg"
import pic8 from "../images/pic8.jpg"
import pic9 from "../images/pic9.jpg"
import pic10 from "../images/pic10.jpg"
import Time from './Time'


const DoctorList = () => {
  return (
    <div>

        {/* //doctor list div  */}

<Time/>

      <div className='doctorDiv'>
          <div> <img className='img' src={pic3} alt=""   />
          <br />
          <h6 className='text'> Dr.Shubhiksha Gond</h6> </div>
         
         
          <div> <h>Head of Dept and Consultant</h>
          <h6 className='tex'>Cardiologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 12:40PM</b></p>

          <h6>
         Moulana Azad, Saket - Consultation Fee: ₹ 1500
          </h6>

          </div>
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
      </div>
        


      <div className='doctorDiv'>
          <div> <img className='img' src={pic4} alt=""   />
          <br />
          <h6 className='text'> Dr.Sarfaraz Sheikh</h6> </div>
         
         
          <div> <h>Surgon  and Consultant</h>
          <h6 className='tex'>Surgon</h6>
          <p>Doctor is available on <b>26-Apr-2022 12:40PM</b></p>

          <h6>
          Appolo Hospital, Delhi - Consultation Fee: ₹ 5000
          </h6>

          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>

      <div className='doctorDiv'>
          <div> <img className='img' src={pic5} alt=""   />
          <br />
          <h6 className='text'> Dr.Anita Bhagal </h6> </div>
         
         
          <div> <h>Head of Dept and Consultant</h>
          <h6 className='tex'>Audiologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 12:40PM</b></p>

          <h6>
          Appolo Hospital, Indore - Consultation Fee: ₹ 500
          </h6>

          </div>
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>

      <div className='doctorDiv'>
          <div> <img className='img' src={pic6} alt=""   />
          <br />
          <h6 className='text'> Dr.Chetna </h6> </div>
         
         
          <div> <h>Head of  Radiologist Dept and Consultant</h>
          <h6 className='tex'>Radiologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 10:00PM</b></p>

          <h6>
          Max Hospital , Pune - Consultation Fee: ₹ 2000
          </h6>
           
          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>

      <div className='doctorDiv'>
          <div> <img className='img' src={pic7} alt=""   />
          <br />
          <h6 className='text'> Dr. Zainav Chaudhery</h6> </div>
         
         
          <div> <h> Senior Surgon , Head of Dept and Consultant</h>
          <h6 className='tex'>Cardiologist</h6>
          <p>Doctor is available on 25-Apr-2022 12:40PM</p>

          <h6>
      Moulana Azad, Delhi - Consultation Fee: ₹ 0
          </h6>

          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>

      <div className='doctorDiv'>
          <div> <img className='img' src={pic8} alt=""   />
          <br />
          <h6 className='text'> Dr.Neha Khan</h6> </div>
         
         
          <div> <h>Head of Dept and Consultant</h>
          <h6 className='tex'>Dermologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 10:20PM</b></p>

          <h6>
          Appolo Hospital, Saket - Consultation Fee: ₹ 1500
          </h6>

          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>
      <div className='doctorDiv'>
          <div> <img className='img' src={pic9} alt=""   />
          <br />
          <h6 className='text'> Dr.Raghav Chadda</h6> </div>
         
         
          <div> <h>Head of ENT Dept and Consultant</h>
          <h6 className='tex'>Bone Specilist</h6>
          <p>Doctor is available on <b>25-Apr-2022 12:40PM</b></p>

          <h6>
          Max Hospital, Jaipur - Consultation Fee: ₹ 1000
          </h6>

          </div>
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>
      <div className='doctorDiv'>
          <div> <img className='img' src={pic10} alt=""   />
          <br />
          <h6 className='text'> Dr.Aftab Sheikh</h6> </div>
         
         
          <div> <h>Head of Dept and Consultant</h>
          <h6 className='tex'>Gynecologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 12:40PM</b></p>

          <h6>
          Max Hospital, Saket - Consultation Fee: ₹ 3000
          </h6>

          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>
      <div className='doctorDiv'>
          <div> <img className='img' src={p} alt=""   />
          <br />
          <h6 className='text'> Dr.Vikar Batra</h6> </div>
         
         
          <div> <h>Head of Dept and Consultant</h>
          <h6 className='tex'>Cardiologist</h6>
          <p>Doctor is available on <b>25-Apr-2022 12:40PM</b></p>

          <h6>
          Appolo Hospital, Saket - Consultation Fee: ₹ 1100
          </h6>

          </div>
        
        
        
          <div>  <button className="btn btn-primary mt-5"  >In Hospital Consultation </button></div>
        
        
      </div>
    







    </div>
  )
}

export default DoctorList
