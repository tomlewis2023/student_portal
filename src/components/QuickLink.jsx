import React, { useState } from "react";
import { Links } from "../assets/data/data";

const QuickLink = () => {
  const [hoverItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="quicklink_1">
      {Links.map((item, index) => {
        return (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              background: item.background,
              color: hoverItem === item.id ? item.hovercolor : item.color,
              backgroundColor:
                hoverItem === item.id ? item.hoverbackground : item.background,
                
            }}
            className="quicklink_2"
          >
            <div>
              <img src={item.img} alt="img" />
            </div>
            <div className="quicklink_3">
              <p className="quicklink_4">{item.title}</p>
              <p className="quicklink_5">{item.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickLink;
