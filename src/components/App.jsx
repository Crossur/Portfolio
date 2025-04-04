import React from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';
import '../styles/style.css'


const App = () => {
  return(
    <HashRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
  </HashRouter>
  )
}
export default App;
