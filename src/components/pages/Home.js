import React from 'react';
import '../../App.css';
import './Home.css'
import HomepageLogo from '../../images/homePageLogo.jpg';
import { Button } from '@mui/material';
import {changeDataFetching} from '../../redux/application/applicationActions'
import { useDispatch } from 'react-redux';

export default function Home({isLocal}) {

  const dispatch = useDispatch()
  console.log(isLocal)
  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <div style={{marginTop:'5%'}}>
      <Button variant="contained" onClick={()=>dispatch(changeDataFetching(isLocal))}>fetching from {isLocal?"Local":"Backend"}</Button>
        <center><img src={HomepageLogo} alt="Homepage" width="900" height="600" className="center"/>
        </center>
        </div>
       
    </>
  );
}
