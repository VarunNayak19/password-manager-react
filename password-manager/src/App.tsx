import React from 'react';
import './App.css';
import LoginScreen from './views/loginScreen/loginScreen';
import LoginSuccess from './views/loginSuccess/loginSuccess';
import SignUpScreen from './views/signUpScreen/signUpScreen';
import {Routes, Route } from 'react-router-dom';
import HomePage from './views/homePage/homePage';


function App() {
  return (
    <div className="app">
      
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signup' element={<SignUpScreen />} />
        <Route path='/success' element={<LoginSuccess />} />
        <Route path='/home' element={<HomePage />} />
        {/* <LoginScreen /> */}
        {/* <SignUpScreen /> */}
        {/* <LoginSuccess /> */}
        </Routes>
    </div>
  );
}

export default App;
