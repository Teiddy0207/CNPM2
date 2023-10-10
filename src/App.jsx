import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Redirect, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import "./main.css"
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Travelers from './Components/Travelers/Travelers'
import Footer from './Components/Footer/Footer'

//import Register from './Components/Register/Register';
//import Login from './Components/Login/Login';




//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <Search />
//       <Support />
//       <Travelers />
//       <Footer />
//       <Register/>
//       <Login/>

//     </div>
//   )
// }

const App = () => {

  return (
      <div>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Travelers />
      </div>
  
  );
}


export default App;





