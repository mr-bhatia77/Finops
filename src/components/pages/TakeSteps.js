import * as React from "react";
import { useState, useEffect } from "react";
import TabPanel from "../common/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  takeStepsStructure,
  takeStepsChapterStructure,
  takeStepsMetaData,
  takeStepsChapterMetaData,
} from "../../constants/constants";
import TakeStepsDataTable from "../common/TakeStepsDataTable";
import "./takeSteps.css";
import TakeStepsHeader from "./TakeStepsHeader";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { updatePage } from "../../redux/application/applicationActions";
import TakeStepsMeta from "./TakeStepsMeta";

export default function TakeSteps({ isAdmin, chapter }) {
  // console.log(isAdmin ? takeStepsStructure : takeStepsChapterStructure)

  const [value, setValue] = useState(0);
  const [pageStructure, setPageStructure] = useState(
    isAdmin ? takeStepsStructure : takeStepsChapterStructure
  );
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const modifyStructure = (structure) => {
    const structureCategoryList = JSON.parse(JSON.stringify(structure.categoryList))
    console.log(structureCategoryList);
    const newStructure = {};
    newStructure.categoryList = [structureCategoryList[0], structureCategoryList[1], structureCategoryList[3], structureCategoryList[4], structureCategoryList[2], structureCategoryList[5]];
    // console.log(...structureCategoryList.slice(6,17))
    // console.log(newStructure)
    return newStructure
  }
  
  const getData = () => {
    // if (isAdmin) {
    //   axios.get(`http://localhost:8080/finops/campaign/3/template/fetchData`).then((res) => {
    //     setPageStructure(modifyStructure(res.data))
    //     setLoading(false);
    //   });
    // }

    // else {
    //   axios.get(`http://localhost:8080/finops/campaign/3/chapter/${chapter.chapterId}/fetchData`).then((res) => {
    //     setPageStructure(modifyStructure(res.data))
    //     setLoading(false);
    //   });
    // }
  };

  useEffect(() => {
    setLoading(true);
    setPageStructure(isAdmin ? modifyStructure(takeStepsStructure) : modifyStructure(takeStepsChapterStructure));
    setTimeout(() => {
      setLoading(false);
    }, 1000)


    getData();
    dispatch(updatePage("takeSteps"));
  }, [isAdmin, chapter]);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h1>
                {isAdmin ? "Template Screen" : `${chapter?.chapterName}`} - Take
                Steps
              </h1>
            </div>
          </div>
          <div
            style={{ width: isAdmin ? "2500px" : "2400px", marginLeft: "5%" }}
          >
            <div className="flex">
              <div className="flexColumn mt-100">
                <div>
                  <h2>Take Steps Budget </h2>
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
              <div
                style={{
                  width: isAdmin ? "963px" : "863px",
                  marginTop: "5%",
                  marginLeft: "200px",
                }}
              >
                <TakeStepsHeader
                  isAdmin={isAdmin}
                  pageStructure={pageStructure}
                ></TakeStepsHeader>
              </div>
            </div>
            <div className="tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="WALK 1" {...a11yProps(1)} />
                <Tab label="WALK 2" {...a11yProps(2)} />
                <Tab label="WALK 3" {...a11yProps(3)} />
              </Tabs>
            </div>
            <TakeStepsMeta
              category={isAdmin? takeStepsMetaData : takeStepsChapterMetaData}
              isAdmin={isAdmin}
              walk={value}
            ></TakeStepsMeta>
            <div className="takeStepsContent">
              {pageStructure?.categoryList?.map((category) => {
                return (
                  <TakeStepsDataTable
                    isAdmin={isAdmin}
                    category={category}
                    walk={value}
                    getData={getData}
                  ></TakeStepsDataTable>
                );
              })}

              {/* <TabPanel value={value} index={0}>
            heelo
          </TabPanel>

          <TabPanel value={value} index={1}>
hello
          </TabPanel> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
