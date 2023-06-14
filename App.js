import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';



class App extends Component {
  constructor(props) {
    super(props);
    if (document.cookie.split(';').some((item) => item.trim().startsWith('email'))) {
      const email = document.cookie.split(';').find((item) => item.trim().startsWith("email=")).split('=')[1];
      if (!sessionStorage.getItem('session')) {
        sessionStorage.setItem('session', email);
      }
    }
  }

  render() {
    return (
      <>
      <BrowserRouter basename='/'>
        <NavBar />
        <Routes>
          {/* Default Routes */}
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )}
}

export default App;
