import React from 'react';
import '../../App.css';
import './Home.css'
import HomepageLogo from '../../images/homePageLogo.png';

export default function Home() {
  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <div style={{marginTop:'5%'}}>
        <center><img src={HomepageLogo} alt="Homepage" width="600" height="600" class="center"/>
        </center>
        </div>
       
    </>
  );
}
