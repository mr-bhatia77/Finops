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


const Consolidated = ({ isAdmin, chapter,year }) => {

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
    dispatch(updatePage('consolidated'))
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
          {isAdmin ? "Template Screen" : `${chapter?.chapterName}`} -
          Consolidated {year.yearName}
        </h1>
      </div>
      <div className="container">
        <div style={{ width: isAdmin ? "3380px" : "3280px", marginLeft: "5%" }}>
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
      </div>
    </>

  }
  </>
  );
};

export default Consolidated;