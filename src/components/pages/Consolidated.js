import React from 'react';
import { consolidatedStructure,consolidatedChapterStructure } from '../../constants/constants';
import ConsolidatedDataTable from '../common/ConsolidatedDataTable';

const Consolidated = ({isAdmin}) => {

  const [pageStructure, setPageStructure] =React.useState(isAdmin ? consolidatedStructure : consolidatedChapterStructure);
  
  return (
    <div style={{ width:'200%', marginLeft: "5%" }}>
      <div className='flex'>
        <div className="header">
          <div><h2>Crohn's & Colitis Foundation</h2></div>
          <div><h4>Budget & Forecast Tool</h4></div>
          <div className='headerSubItem'><h3>Area/National :</h3><input placeholder='Enter Area Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Chapter/Department:</h3><input placeholder='Enter Chapter Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Company Code:</h3><input placeholder='Enter Chapter Code Here' type='text'></input></div>
        </div>
      </div>
      <div className='flex'>
        <div className='blackAndWhite borderRight' style={{width:'400px',textAlign:'center'}}><h4>Crohn's & Colitis Foundation<br/>Consolidated Foundation<br/>30-09-2021</h4></div>
        <div className='blackAndWhite borderRight' style={{width:'720px',textAlign:'center'}}><h4>YTD - September, 2021</h4></div>
        <div className='blackAndWhite borderRight' style={{width:'180px',textAlign:'center'}}><h4></h4></div>
        <div className='blackAndWhite borderRight' style={{width:'180px',textAlign:'center'}}><h4>EOY</h4></div>
        <div className='blackAndWhite borderRight' style={{width:'900px',textAlign:'center'}}><h4>2022 Budget</h4></div>
        <div className='blackAndWhite borderRight' style={{width:'180px',textAlign:'center'}}><h4></h4></div>
        <div className='blackAndWhite borderRight' style={{width:'360px',textAlign:'center'}}><h4></h4></div>
        <div className='blackAndWhite borderRight' style={{width:'360px',textAlign:'center'}}><h4>% Growth</h4></div>
      </div>
      <div>
          {pageStructure?.categoryList?.map((category) => {
            return <ConsolidatedDataTable
              isAdmin={isAdmin}
              category={category}
              ></ConsolidatedDataTable>
          })}
        </div>
      </div>
  )
}

export default Consolidated





// import '../../App.css';

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// //import * as faker from 'faker';
// import { faker } from '@faker-js/faker';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Horizontal Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -100, max: 500 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export default function Consolidated() {
//   return (
//   <>
//    <h1 >   <center>Consolidated Data</center></h1>
   
//    <Bar  options={options} data={data} />
  

//   ;
//   </>
//   )
// }
