import React from "react";
import { Announcement } from "../data/data";

const Announcements = () => {
  return (
    <div>
      
        {Announcement.map((item, index) => {
          // console.log(item.img)
          return(
            <div key={index} className="announce_1">
            <img className="announce_icon" src={item.img} alt="imgage" />
            <p className="announce_para">{item.note}</p>
          </div>

          )

          
        })}
      </div>
    
  );
};

export default Announcements;
