import './App.css';
import {Routes, Route} from 'react-router-dom'
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
{/* <Chetna/> */}

<Routes>
  <Route path ="/" element ={<Home/>} > </Route>
  <Route path ="/" element ={<Home/>} > </Route>
  <Route path ="/" element ={<Home/>} > </Route>
</Routes>
     

     <Footer/>
    
    </div>
  );
}

export default App;
