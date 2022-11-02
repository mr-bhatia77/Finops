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


const TotalConsolidated = ({ isAdmin, chapter,year }) => {

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
    setLoading(true)
    setPageStructure(consolidatedStructure);
    setTimeout(() => {
      setLoading(false);
    }, 1000)

    // getData();
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
        <div style={{ width: isAdmin ? "3740px" : "3640px", marginLeft: "5%" }}>
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
              style={{ width: "1260px" }}
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
              page='totalConsolidated'
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