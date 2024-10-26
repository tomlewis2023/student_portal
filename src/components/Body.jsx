import React from "react";
import Announcements from "./Announcements";
import ClassSchedule from "./ClassSchedule";
import QuickLink from "./QuickLink";
import AccessclassRecording from "./AccessclassRecording";
import search from "../assets/icons/search.png";

const Body = () => {
  return (
    <div className="body_1">
      <div>
      <h3 className="annouce_h3">Announcements</h3>
        <div className="announce_body">
         
          {/* Announcements */}

          <Announcements />
        </div>
        <h3 className="annouce_h3">Your Class Schedule</h3>
        <div className="classsched_body">
          
          {/* Your Class Schedule */}
          <ClassSchedule />
        </div>
      </div>

      <div className="link_body">
        <h3 className="annouce_h3">Quick Links</h3>
        {/* Quick Links */}
        <QuickLink />
      </div>
      <div className="record_body">
        <h3 className="annouce_h3">Access Class Recordings</h3>
        {/* Access Class Recordings */}
        <div>
          <div className="searchbar">
            <span>
              <img src={search} alt="img" />
            </span>
            <input
              className="searchbar_1"
              type="text"
              placeholder="Search for class recordings"
            />
          </div>

          <div className="filter_1">
            <p>Filter By:</p>
            <div className="filter_2">
              <select className="filter_3" name="week" id="week">
                <option value="week">This Week</option>
              </select>
              <select className="filter_3" name="subjects" id="subjects">
                <option value="subjects">All subjects</option>
              </select>
            </div>
          </div>
        </div>
        <AccessclassRecording />
      </div>
    </div>
  );
};

export default Body;
