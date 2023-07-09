import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
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
