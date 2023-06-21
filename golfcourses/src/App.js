import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <BrowserRouter basename='/'>
        <Routes>
          {/* Default Routes */}
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      </>
  )}
}

export default App;
