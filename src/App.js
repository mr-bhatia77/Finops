import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
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
import Charts from './components/pages/Charts';
import { useSelector } from 'react-redux'
import TotalConsolidated from './components/pages/TotalConsolidated';
import { useSelect } from '@mui/base';

function App() {

  const chapter = useSelector((state) => state.application.chapter);
  const year = useSelector((state)=>state.application.year);
  const isLocal = useSelector((state)=>state.application.isLocal);
  return (<>
    <Navbar chapter={chapter} year={year} />
    <Routes>
      <Route path='/' element={<Home isLocal={isLocal}/>} />
      <Route path='/charts' element={<Charts />} />
      <Route path='/chapter/totalConsolidated' element={<TotalConsolidated isAdmin={false} chapter={chapter} year={year} isLocal={isLocal}/>} />
      <Route path='/chapter/consolidated' element={<Consolidated isAdmin={false} chapter={chapter} year={year} />} />
      <Route path='/template/consolidated' element={<Consolidated isAdmin={true} year={year} />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/template/teamChallenge' element={<TeamChallenge isAdmin={true} year={year} />} />
      <Route path='/template/spin4' element={<Spin4 isAdmin={true} year={year} />} />
      <Route path='/template/takeSteps' element={<TakeSteps isAdmin={true} year={year} />} />
      <Route path='/template/specialEvents' element={<SpecialEvents isAdmin={true} year={year} />} />
      <Route path='/chapter/teamChallenge' element={<TeamChallenge isAdmin={false} chapter={chapter} year={year} />} />
      <Route path='/chapter/spin4' element={<Spin4 isAdmin={false} />} />
      <Route path='/chapter/takeSteps' element={<TakeSteps isAdmin={false} chapter={chapter} year={year} />} />
      <Route path='/chapter/specialEvents' element={<SpecialEvents isAdmin={false} chapter={chapter} year={year}/>} />
      <Route path='/template/majorGifts' element={<MajorGifts isAdmin={true} year={year} />} />
      <Route path='/chapter/majorGifts/' element={<MajorGifts isAdmin={false} chapter={chapter} year={year} />} />
      <Route path='/template/administration' element={<Administration isAdmin={true} year={year} />} />
      <Route path='/chapter/administration' element={<Administration isAdmin={false} chapter={chapter} year={year} />} />
      <Route path='/template/administration(M&T)' element={<AdministrationMT isAdmin={true} year={year} />} />
      <Route path='/chapter/administration(M&T)' element={<AdministrationMT isAdmin={false} chapter={chapter} year={year}/>} />
      <Route path='/template/budgetSpread' element={<BudgetSpread isAdmin={true} year={year} />} />
      <Route path='/chapter/budgetSpread' element={<BudgetSpread isAdmin={false} chapter={chapter} year={year}/>} />
    </Routes>
  </>
  );
}

export default App;
