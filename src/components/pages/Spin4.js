import React, { useEffect, useState } from "react";
import Spin4DataTable from "../common/Spin4DataTable";
import Button from "@mui/material/Button";
import {
  pageStructureConstant,
  pageStructureConstant2,
  chapterHeaderConstant,
  templateHeaderConstant,
  spin4UserPageConstant,
  tableColumns1
} from "../../constants/constants";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import {
  randomId,
} from '@mui/x-data-grid-generator';
import DataGridTable from "../common/DataGridTable";

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

const Spin4 = ({ isAdmin }) => {
  console.log('isAdmin :', isAdmin);
  const [pageStructure, setPageStructure] = useState(pageStructureConstant);
  // const [addNewElement, setAddNewElement] = useState(false);
  // const [addNewSubCategory, setAddNewSubCategory] = useState(false);
  const [loading, setLoading] = useState(true);
  const [extraEventList, setExtraEventList] = useState([]);
  const [addExtraEvent, setAddExtraEvent] = useState(false);
  const [pageRerender, setPageRerender] = useState(false);

  useEffect(() => {
    // setLoading(true);
    { isAdmin ? setPageStructure([templateHeaderConstant, ...pageStructureConstant2]) : setPageStructure([chapterHeaderConstant, ...spin4UserPageConstant]) };
    setTimeout(() => setLoading(false), 2000);
    console.log(pageStructure)

    //   const p1=axios.get('http://localhost:8080/spin4/first')
    //   const p2=axios.get('http://localhost:8080/spin4/second')
    //   const p3=axios.get('http://localhost:8080/spin4/third')
    //   const p4=axios.get('http://localhost:8080/spin4/fourth')
    //   const p5=axios.get('http://localhost:8080/spin4/chapter/first')
    //   const p6=axios.get('http://localhost:8080/spin4/chapter/second')
    //   const p7=axios.get('http://localhost:8080/spin4/chapter/third')
    //   const p8=axios.get('http://localhost:8080/spin4/chapter/fourth')
    //   const templateHeaderPromise=axios.get('http://localhost:8080/spin4/template/header');
    //   const chapterHeaderPromise=axios.get('http://localhost:8080/spin4/chapter/header');

    //   if(isAdmin) {
    //   Promise.all([templateHeaderPromise,p1,p2,p3,p4]).then((res)=>{
    //          console.log(res)
    //          setPageStructure([res[0].data, res[1].data,res[2].data,res[3].data,res[4].data]);
    //   setLoading(false);
    //   })
    // }
    // else{
    //   const header = {}
    //   Promise.all([chapterHeaderPromise,p5,p6,p7,p8]).then((res)=>{
    //          console.log(res)
    //          setPageStructure([ res[0].data,res[1].data,res[2].data,res[3].data,res[4].data]);
    //   setLoading(false);
    //   })
    // }
  }, [isAdmin, pageRerender]);

  useEffect(() => {
    setLoading(true);
  }, [isAdmin])

  // let newElement = { ...pageElement };
  // let newSubCategoryElement = { ...subCategoryElement };
  // let subCategoryTitle = "";
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

  const getHeaderColumns = () => {
    // console.log(pageStructure[0])
    let newColumns = [...getEditableColumns(tableColumns1)]
    if (isAdmin) {
      if (pageStructure[0]?.events?.length > 0) {
        pageStructure[0]?.events?.map((eventName) => {
          newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), width: 180, editable: isAdmin ? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
        })
      }
      // console.log(newColumns)
      return [...newColumns];
    }
    else {
      if (pageStructure[0]?.lineItems?.[0]?.events?.length > 0) {
        pageStructure[0]?.lineItems[0]?.events?.map((event) => {
          newColumns.push({ field: `${event.eventName}`, headerName: `${event.eventName}`.toUpperCase(), width: 180, editable: isAdmin ? false : true, align: 'center', headerAlign: 'center', headerClassName: event.eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
        })
      }
      return [...newColumns];
    }
  }

  const getEventValue = (item) => {
    let eventDetails = {};
    item?.events?.map((event) => {
      eventDetails[`${event.eventName}`] = event?.value;
    })
    return (eventDetails);
  }

  const getHeaderRows = () => {
    const newTableRows = [];
    if (isAdmin) {
      pageStructure?.[0]?.lineItemList?.forEach((lineItem) => {
        newTableRows.push({
          id: randomId(),
          pricePerPiece: null,
          lineItemName: lineItem,
        })
      })
    }
    else {
      pageStructure?.[0]?.lineItems?.forEach((lineItem) => {
        newTableRows.push({
          id: randomId(),
          pricePerPiece: null,
          lineItemName: lineItem.lineItemName,
          ...getEventValue(lineItem)
        })
      })

    }

    return newTableRows;
  }

  const getEditableColumns = (tableColumns) => {
    const newColumns = tableColumns.map((column) => {
      column.editable = isAdmin ? true : false;
      return column;
    });
    return newColumns;
  }

  const handleGetRowClassName = (params) => {
    if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
      return 'backgroundYellowGreen'
  }

  const renderSection = (sectionElement) => {
    const tableList = sectionElement?.categoryList?.map((pageElement, index) => {
      return (
        <div key={`${sectionElement.section}-${pageElement.id}`}>
          <Spin4DataTable
            isAdmin={isAdmin}
            categoryName={pageElement.categoryName}
            subCategoryList={pageElement.subCategoryList}
            events={pageStructure[0].events}
            section={sectionElement.section}
            pageElement={pageElement}
            extraEventList={extraEventList}
            setPageRerender={setPageRerender}
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
    // setExtraEventList([...extraEventList, extraEvent]);
    setAddExtraEvent(false);
    const url = `http://localhost:8080/spin4AddEvent/${extraEvent}`;
    console.log(url);
    axios.put(url).then((res)=>{
      console.log(res)
    setLoading(true);
    setTimeout(()=>{setPageRerender((prevValue) => !prevValue)},1000)
    })
    extraEvent = "";
  };

  // const isAdmin = (role === 'admin');

  return (
    <>
      {/* admin rendering ------------------------ */}
      {isAdmin && <div style={{ width: "90%", marginLeft: "5%" }}>
        <br />
        <br />
        <h2 className="spin4_heading_grey">
          <center>Enter Market Here</center>
        </h2>
        <h2 className="spin4_heading_grey">
          <center>Enter Staff Name Here</center>
        </h2>
        <h3 className="spin4_heading">
          <center>spin4 crohn's & colitis cures {pageStructure[0].year}</center>
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
            {isAdmin && <div style={{ textAlign: "right" }}>
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
            </div>}
            <div className="flex">
              <div className='border flexCenter' style={{ width: '400px', height: '100px' }}><h1>Subledger :</h1></div>
              <div className='border flexCenter' style={{ width: '360px', height: '100px' }}><h1> Enter Subledger here </h1></div>
            </div>
            <DataGridTable
              isAdmin={isAdmin}
              tableColumns={getHeaderColumns()}
              initialRows={getHeaderRows()}
              headerHeight={50}
              handleGetRowClassName={handleGetRowClassName}
              setPageRerender={setPageRerender}
              isHeaderTable={true}
            >
            </DataGridTable>

            <br />

            {pageStructure.length > 0 &&
              pageStructure.map((sectionElement, sectionElementIndex) => {
                if (sectionElementIndex > 0)
                  return (
                    <div key={sectionElement.section}>
                      {renderSection(sectionElement)}
                    </div>
                  );
              })}
          </div>
        )}
      </div>}

      {/* user rendering ------------------------ */}

      {!isAdmin && <div style={{ width: "90%", marginLeft: "5%" }}>
        <br />
        <br />
        <h2 className="spin4_heading_grey">
          <center>{pageStructure[0].market}</center>
        </h2>
        <h2 className="spin4_heading_grey">
          <center>{pageStructure[0].staff_name}</center>
        </h2>
        <h3 className="spin4_heading">
          <center>spin4 crohn's & colitis cures {pageStructure[0].year}</center>
        </h3>
        <br />
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
            <div className="flex">
              <div className='border flexCenter' style={{ width: '400px', height: '100px' }}><h1>Subledger :</h1></div>
              <div className='border flexCenter' style={{ width: '360px', height: '100px' }}><h1> {pageStructure[0].sub_ledger_name} </h1></div>
            </div>
            <DataGridTable
              isAdmin={isAdmin}
              tableColumns={getHeaderColumns()}
              initialRows={getHeaderRows()}
              headerHeight={50}
              handleGetRowClassName={handleGetRowClassName}
              setPageRerender={setPageRerender}
              isHeaderTable={true}
            >
            </DataGridTable>
            <br />
            {pageStructure.length > 0 &&
              pageStructure.map((sectionElement, sectionElementIndex) => {
                if (sectionElementIndex > 0)
                  return (
                    <div key={sectionElement.section}>
                      {renderSection(sectionElement)}
                    </div>
                  );
              })}
          </div>
        )}
      </div>}
    </>
  );
};

export default Spin4;
