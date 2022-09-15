import React from "react";
import {
  consolidatedStructure,
  consolidatedChapterStructure,
} from "../../constants/constants";
import ConsolidatedDataTable from "../common/ConsolidatedDataTable";
import TextField from "@mui/material/TextField";
import './consolidated.css';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {updatePage} from '../../redux/application/applicationActions';


const Consolidated = ({ isAdmin, chapter }) => {

  const [pageStructure, setPageStructure] = React.useState(
    isAdmin ? consolidatedStructure : consolidatedStructure
  );

  const dispatch=useDispatch()

  useEffect (()=>{
    if(isAdmin){
      axios.get(`http://localhost:8080/finops/consolidated/template/fetchData`).then((res)=>{
      setPageStructure(res.data)
    })}
    else{
    axios.get(`http://localhost:8080/finops/consolidated/chapter/${chapter?.chapterId}/fetchData`).then((res)=>{
      setPageStructure(res.data)
    })}
    dispatch(updatePage('consolidated'))
  },[isAdmin, chapter])

  return (
    <div style={{ width: isAdmin?"3380px":"3280px", marginLeft: "5%" }}>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <div>
          <h1>
            {isAdmin ? "Template Screen" : `${chapter?.chapterName}`} -
            Consolidated
          </h1>
        </div>
      </div>
      <div className="flexColumn mt-100">
        <div>
          <h2>Crohn's & Colitis Foundation</h2>
        </div>
        <div>
          <h4>Budget & Forecast Tool</h4>
        </div>
        <div className="flexColumn">
          <div className="mt-8 flex verticalAlign">
            <div className="headerKeys ">
              <h3>Area :</h3>
            </div>
            <TextField
              variant="filled"
              color="success"
              focused
              placeholder="Enter Area Here"
              value={chapter?.chapterArea}
            ></TextField>
          </div>
          <div className="mt-8 flex verticalAlign">
            <div className="headerKeys">
              <h3>Chapter:</h3>
            </div>
            <TextField
              variant="filled"
              color="success"
              focused
              placeholder="Enter Chapter Here"
              value={chapter?.chapterName}
            />
          </div>
          <div className="mt-8 flex verticalAlign">
            <div className="headerKeys">
              <h3>Chapter Code:</h3>
            </div>
            <TextField
              variant="filled"
              color="success"
              focused
              placeholder="Enter Chapter Code Here"
              value={chapter?.chapterCode}
            />
          </div>
          <div className="mt-8 flex verticalAlign">
            <div className="headerKeys">
              <h3>Department:</h3>
            </div>
            <TextField
              variant="filled"
              color="success"
              focused
              placeholder="Enter Department Code Here"
              value={chapter?.departmentCode}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-20">
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "400px" }}
        >
          <h4>
            Crohn's & Colitis Foundation
            <br />
            Consolidated Foundation
            <br />
            30-09-2021
          </h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "720px" }}
        >
          <h4>YTD - September, 2021</h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "180px" }}
        >
          <h4></h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "180px" }}
        >
          <h4>EOY</h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "900px" }}
        >
          <h4>2022 Budget</h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "180px" }}
        >
          <h4></h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "360px" }}
        >
          <h4></h4>
        </div>
        <div
          className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
          style={{ width: "360px" }}
        >
          <h4>% Growth</h4>
        </div>
      </div>
      <div>
        <ConsolidatedDataTable
          isAdmin={isAdmin}
          pageStructure={pageStructure}
        ></ConsolidatedDataTable>
      </div>
    </div>
  );
};

export default Consolidated;

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
