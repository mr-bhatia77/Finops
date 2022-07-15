import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import TeamChallenge from './components/pages/TeamChallenge';
import Spin4 from './components/pages/Spin4';
import TakeSteps from './components/pages/TakeSteps';
import SpecialEvents from './components/pages/SpecialEvents';
import Consolidated from './components/pages/Consolidated';

function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/consolidated' element={<Consolidated/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/teamChallenge' element={<TeamChallenge/>} />
        <Route path='/spin4' element={<Spin4/>} />
        <Route path='/takeSteps' element={<TakeSteps/>} />
        <Route path='/specialEvents' element={<SpecialEvents/>} />
        </Routes>
    </Router>
  );
}

export default App;
