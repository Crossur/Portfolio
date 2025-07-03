import React from 'react';
import {Routes, Route,useLocation} from 'react-router-dom';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/style.css';

const App = () => {

  const location = useLocation();

  useEffect(()=>{

    console.log(location);
    console.log(location.pathname.slice(1,location.pathname.length));

    let titleString = location.pathname.slice(1,2).toUpperCase() + location.pathname.slice(2,location.pathname.length);

    document.title = titleString;
  })

  return(
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}
export default App;
