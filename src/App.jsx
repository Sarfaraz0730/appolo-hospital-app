import './App.css';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Footer from './components/Footer/Footer';

import Sarfaraz from './components/DoctorDetails/Sarfaraz';
import Shubhiksha from './components/DoctorDetails/Shubhiksha';
import Chetna from './components/DoctorDetails/Chetna';

function App() {
  return (
    <div >
   
        
     <Header/>
      
      {/* <Home/> */}
<Chetna/>
     

     <Footer/>
    
    </div>
  );
}

export default App;
