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
import MajorGifts from './components/pages/MajorGifts';

function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/consolidated' element={<Consolidated/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/template/teamChallenge' element={<TeamChallenge isAdmin={true}/>} />
        <Route path='/template/spin4' element={<Spin4 isAdmin={true}/>} />
        <Route path='/template/takeSteps' element={<TakeSteps isAdmin={true}/>} />
        <Route path='/template/specialEvents' element={<SpecialEvents isAdmin={true}/>} />
        <Route path='/chapter/teamChallenge' element={<TeamChallenge isAdmin={false}/>} />
        <Route path='/chapter/spin4' element={<Spin4 isAdmin={false}/>} />
        <Route path='/chapter/takeSteps' element={<TakeSteps isAdmin={false}/>} />
        <Route path='/chapter/specialEvents' element={<SpecialEvents isAdmin={false}/>} />
        <Route path='/template/majorGifts' element={<MajorGifts isAdmin={true}/>} />
        <Route path='/chapter/majorGifts' element={<MajorGifts isAdmin={false}/>} />
        </Routes>
    </Router>
  );
}

export default App;
