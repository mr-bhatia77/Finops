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
import Administration from './components/pages/Administration';
import AdministrationMT from './components/pages/AdministrationMT';
import BudgetSpread from './components/pages/BudgetSpread';

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
        <Route path='/template/administration' element={<Administration isAdmin={true}/>} />
        <Route path='/chapter/administration' element={<Administration isAdmin={false}/>} />
        <Route path='/template/administration(M&T)' element={<AdministrationMT isAdmin={true}/>} />
        <Route path='/chapter/administration(M&T)' element={<AdministrationMT isAdmin={false}/>} />
        <Route path='/template/consolidated' element={<Consolidated isAdmin={true}/>} />
        <Route path='/chapter/consolidated' element={<Consolidated isAdmin={false}/>} />
        <Route path='/template/budgetSpread' element={<BudgetSpread isAdmin={true}/>} />
        <Route path='/chapter/budgetSpread' element={<BudgetSpread isAdmin={false}/>} />
        </Routes>
    </Router>
  );
}

export default App;
