import React, { useState } from "react";
import { Recordings } from "../data/data";
import PlayNowFrame from "./PlaynowFrame";


const AccessclassRecording = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handlePlayNowClick = (item) => {
    setSelectedItem(item);
    // console.log(item)
  };

  const handleCloseFrame = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {Recordings.map((item, index) => (
        <div
          key={index}
          className="recordmain"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            borderBottom: `1px solid ${
              hoveredItem === item.id ? item.borderbottom : "#ffffff"
            }`,
            color: hoveredItem === item.id ? item.hovercolorpara : item.color,
          }}
        >
          <div className="recordmain_1">
            <div>
              <p className="recordmain_p">{item.title}</p>
              <p className="recordmain_para">{item.para}</p>
            </div>

            <p className="recordmain_date">{item.date}</p>
          </div>
          <div className="record_1">
            <img className="vid" src={item.img2} alt="img" />
            {hoveredItem === item.id ? (
              <span
                className="circle_vid1"
                onClick={() => handlePlayNowClick(item)}
                style={{ cursor: "pointer" }}
              >
                {item.note}
              </span>
            ) : (
              <img className="circle_vid" src={item.img1} alt="img" />
            )}
          </div>
        </div>
      ))}

      {selectedItem && (
        <PlayNowFrame
          imageUrl={selectedItem.frameImage} 
          onClose={handleCloseFrame}
          title={selectedItem.title}
          para={selectedItem.para} 

        />
      )}
    </div>
  );
};

export default AccessclassRecording;
