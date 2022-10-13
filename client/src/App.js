import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Services from './components/Services';
import Activities from './components/Activities';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useEffect , useState} from "react";
import Home from './components/Home';

function App() {
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='activities' element={<Activities/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
