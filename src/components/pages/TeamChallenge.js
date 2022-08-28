import * as React from "react";
import "./teamChallenge.css";
import TeamChallengeDataTable from "../common/TeamChallengeDataTable";
import { teamChallengeStructure } from '../../constants/constants';

export default function TeamChallenge() {
  // console.log(teamChallengeStructure)
  return (
    <div style={{ width: "90%", marginLeft: "5%" }}>
      <div className="header">
        <div><h2>Team Challenge Budget </h2></div>
        <div className='headerSubItem'><h3>Area :</h3><input placeHolder ='Enter Area Here' type='text'></input></div>
        <div className='headerSubItem'><h3>Chapter:</h3><input placeHolder ='Enter Chapter Here' type='text'></input></div>
        <div className='headerSubItem'><h3>Chapter Code:</h3><input placeHolder ='Enter Chapter Code Here' type='text'></input></div>
      </div>
      <div className="teamChallengeHeading">
        <h1>Enter Market Here</h1>
      </div>
      <div className="teamChallengeSubHeading">
        <h1>Team Challenge 2020 Budget Workbook</h1>
      </div>
      <div className='mt-8'>
        {teamChallengeStructure.length > 0 && teamChallengeStructure.map((pageElement) => {
          // console.log(pageElement)
          return (
            <TeamChallengeDataTable
            pageElement={pageElement}
            ></TeamChallengeDataTable>)
        })}

      </div>
    </div>
  );
}
