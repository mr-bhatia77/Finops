import React from "react";
import {
  consolidatedStructure,
  consolidatedChapterStructure,
} from "../../constants/constants";
import ConsolidatedDataTable from "../common/ConsolidatedDataTable";
import TextField from "@mui/material/TextField";
import './consolidated.css';
import { useState, useEffect } from 'react';
import axiosInstance from '../common/services/axiosInstance';
import { useDispatch } from 'react-redux';
import { updatePage } from '../../redux/application/applicationActions';
import CircularProgress from "@mui/material/CircularProgress";


const TotalConsolidated = ({ isAdmin, chapter, year,isLocal }) => {

  const [pageStructure, setPageStructure] = React.useState(
    isAdmin ? consolidatedStructure : consolidatedStructure
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  const getData = () => {
    setLoading(true);
    if (isAdmin) {
      axiosInstance.get(`/finops/consolidated/template/fetchData`).then((res) => {
        setPageStructure(res.data);
        setLoading(false);
      })
    }
    else {
      axiosInstance.get(`/finops/consolidated/chapter/1515/fetchData`).then((res) => {
        setPageStructure(res.data);
        setLoading(false);
      })
    }
  }
  useEffect(() => {
    if(isLocal){
    setLoading(true)
    setPageStructure(consolidatedStructure);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }
  else {
    getData();
  }
    
    dispatch(updatePage('totalConsolidated'))
  }, [isAdmin, chapter])

  return (<>{loading ? <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress />
  </div>
    :
    <>
      <div className="flex textAlignCenter mt-20">
        <h1>
          {isAdmin ? "Template Screen" : `Chapter Screen`} -
          Total Consolidated {year.yearName}
        </h1>
      </div>
      <div className="container">
        <div style={{ width: isAdmin ? "2663px" : "2563px", marginLeft: "5%" }}>
        <div className="mt-20">
        <a href="https://app.powerbi.com/groups/me/reports/1228f406-3c2b-4187-bd8d-8174ab35d0ae/ReportSection4f9802e3d96768f65bf1?ctid=e39845e8-f42d-4832-9d77-07d6601cd5b5&redirectedFromSignup=1" target="_blank">
          click here for detailed report
        </a>
      </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
            }}
          >
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
                30-09-{year.yearName -1 }
              </h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "480px" }}
            >
              <h4>YTD - September, {year.yearName -1 }</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4>EOY</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "840px" }}
            >
              <h4>{year.yearName } Budget</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "240px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "240px" }}
            >
              <h4>% Growth</h4>
            </div>
          </div>
          <div>
            <ConsolidatedDataTable
              isAdmin={isAdmin}
              pageStructure={pageStructure}
              page='totalConsolidated'
              year ={year}
            ></ConsolidatedDataTable>
          </div>
        </div>
      </div>
    </>

  }
  </>
  );
};

export default TotalConsolidated;