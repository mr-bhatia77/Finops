import React, { useEffect, useState } from "react";
import Spin4DataTable from "../common/Spin4DataTable";
import Button from "@mui/material/Button";
import {
  pageStructureConstant,
  pageStructureConstant2,
  headerConstant,
} from "../../constants/constants";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const sectionElement = {
  section: "",
  eventName: "",
  categoryList: [],
};
const pageElement = {
  categoryName: "",
  subCategoryList: [],
  eventName: [],
};

const subCategoryElement = {
  subCategoryName: "",
  lineItems: [],
  id: "",
  deleteFlag: false,
};

const Spin4 = () => {
  const [pageStructure, setPageStructure] = useState(pageStructureConstant);
  const [addNewElement, setAddNewElement] = useState(false);
  const [addNewSubCategory, setAddNewSubCategory] = useState(false);
  const [loading, setLoading] = useState(true);
  const [extraEventList, setExtraEventList] = useState([]);
  const [addExtraEvent, setAddExtraEvent] = useState(false);

  useEffect(() => {
    // console.log(pageStructureConstant2);
    setPageStructure([headerConstant, ...pageStructureConstant2]);
    setTimeout(() => setLoading(false), 2000);

    // const p1=axios.get('http://localhost:8080/spin4/first')
    // const p2=axios.get('http://localhost:8080/spin4/second')
    // const p3=axios.get('http://localhost:8080/spin4/third')
    // const p4=axios.get('http://localhost:8080/spin4/third')

    // Promise.all([p1,p2,p3,p4]).then((res)=>{
    //        console.log(res)
    //        setPageStructure([headerConstant, res[0].data, res[1].data,res[2].data,res[3].data]);
    // setLoading(false);
    // })
  }, []);

  let newElement = { ...pageElement };
  let newSubCategoryElement = { ...subCategoryElement };
  let subCategoryTitle = "";
  let extraEvent = "";

  // const handleElementHeaderChange = (e, isCategory) => {
  //   isCategory
  //     ? (newElement.categoryName = e.target.value)
  //     : (newSubCategoryElement.subCategoryName = e.target.value);
  // };

  // const handleAddNewElement = () => {
  //   setAddNewElement(true);
  // };

  // const confirmAddNewElement = () => {
  //   const newPageStructure = [...pageStructure];
  //   newElement.subCategoryList.push(newSubCategoryElement);
  //   newPageStructure.push(newElement);
  //   setPageStructure(newPageStructure);
  //   newElement = { ...pageElement };
  //   newSubCategoryElement = { ...subCategoryElement };
  //   setAddNewElement(false);
  // };

  // const handleAddMoreSubLedger = (e, pageElement, index) => {
  //   const newPageStructure = JSON.parse(JSON.stringify(pageStructure));
  //   const newPageElement = { ...pageElement };
  //   const newsubCategoryList = [...newPageElement.subLedger];
  //   const newSubCategoryElement = { ...subCategoryElement };
  //   newSubCategoryElement.title = subCategoryTitle;
  //   newsubCategoryList.push(newSubCategoryElement);
  //   newPageElement.subLedger = newsubCategoryList;
  //   newPageStructure.splice(index, 1, newPageElement);
  //   setPageStructure(newPageStructure);
  //   setAddNewSubCategory(false);
  // };

  // const handleNewSubCategory = (e) => {
  //   subCategoryTitle = e.target.value;
  // };

  const renderSection = (sectionElement) => {
    const tableList = sectionElement?.categoryList?.map((pageElement, index) => {
      return (
        <div key={`${sectionElement.section}-${pageElement.id}`}>
          <Spin4DataTable
            categoryName={pageElement.categoryName}
            subCategoryList={pageElement.subCategoryList}
            eventName={sectionElement.eventName}
            section={sectionElement.section}
            pageElement={pageElement}
            extraEventList={extraEventList}
          ></Spin4DataTable>
          <br />
          {/* <Button
          variant="text"
          onClick={() => setAddNewSubCategory(true)}
        >
          + Add New Section
        </Button>
        {addNewSubCategory && (
          <div className="mt-8">
            Enter Sub Category :{" "}
            <input
              type="text"
              onChange={(e) => handleNewSubCategory(e)}
            ></input>
            <Button
              variant="contained"
              onClick={(e) =>
                handleAddMoreSubLedger(e, pageElement, index)
              }
            >
              + ADD
            </Button>
          </div>
        )} */}
          <br />
          <br />
          <hr />
          <br />
          {pageElement.categoryName ===
            "Participant DDB Expense Total" && (
            <div className="backgroundYellowGreen pageMiddleHeading">
              <h1>Expenses - Breakdown</h1>
            </div>
          )}
        </div>
      );
    });
    return tableList;
  };

  const handleAddEvent = () => {
    setAddExtraEvent(true);
  };

  const handleExtraEventList = () => {
    setExtraEventList([...extraEventList, extraEvent]);
    setAddExtraEvent(false);
    extraEvent = "";
  };

  return (
    <div style={{ width: "90%", marginLeft: "5%" }}>
      <br />
      <br />
      <h2 className="spin4_heading_grey">
        <center>Enter Market Here</center>
      </h2>
      <h2 className="spin4_heading_grey">
        <center>Enter Staff Name Here</center>
      </h2>
      <h3 className="spin4_heading">
        <center>spin4 crohn's & colitis cures 2020</center>
      </h3>
      <br />

      {/* <Button variant="contained" onClick={handleAddNewElement}>
        + Add New Element
      </Button>
      <br />
      <br />
      {addNewElement && (
        <div>
          Enter Category :{" "}
          <input
            type="text"
            onChange={(e) => handleElementHeaderChange(e, true)}
          ></input>{" "}
          &nbsp; &nbsp; Enter Sub Category :{" "}
          <input
            type="text"
            onChange={(e) => handleElementHeaderChange(e, false)}
          ></input>{" "}
          &nbsp; &nbsp;
          <Button variant="contained" onClick={confirmAddNewElement}>
            + Add
          </Button>
          <br />
          <br />
          <br />
        </div>
      )}
      <br />
      <hr />
      <br /> */}
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
        <div>
          <div style={{ textAlign: "right" }}>
            <Button onClick={handleAddEvent}>+ Add Event </Button>

            {addExtraEvent && (
              <div>
                <input
                  type="text"
                  onChange={(e) => (extraEvent = e.target.value)}
                ></input>{" "}
                <Button onClick={handleExtraEventList}>+ ADD</Button>
              </div>
            )}
          </div>
          {pageStructure.length > 0 &&
            pageStructure.map((sectionElement, sectionElementIndex) => {
              return (
                <div key={sectionElement.section}>
                  {renderSection(sectionElement)}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Spin4;
