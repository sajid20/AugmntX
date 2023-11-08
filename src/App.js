import React from "react";
import AugNavbar from "./components/AugNavbar";
import Login from "./components/Login";
import {Routes, Route} from 'react-router-dom';
import Hire from "./components/Hire";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <AugNavbar />
    <Routes>
      
      <Route path='/' element={<Login/>} />
      <Route path='/Hire' element={<Hire/>} />    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
