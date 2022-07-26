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
        <Route path='/template/teamChallenge' element={<TeamChallenge role ='admin'/>} />
        <Route path='/template/spin4' element={<Spin4 role ='admin'/>} />
        <Route path='/template/takeSteps' element={<TakeSteps role ='admin'/>} />
        <Route path='/template/specialEvents' element={<SpecialEvents role ='admin'/>} />
        <Route path='/chapter/teamChallenge' element={<TeamChallenge role ='user'/>} />
        <Route path='/chapter/spin4' element={<Spin4 role ='user'/>} />
        <Route path='/chapter/takeSteps' element={<TakeSteps role ='user'/>} />
        <Route path='/chapter/specialEvents' element={<SpecialEvents role ='user'/>} />
        </Routes>
    </Router>
  );
}

export default App;
