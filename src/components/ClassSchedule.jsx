import React, { useState, useRef, useEffect } from 'react';
import { Schedule } from '../data/data';

const ClassSchedule = () => {
  const [popupData, setPopupData] = useState(null);
  const popupRef = useRef(null); 

  
  const handleItemClick = (item) => {
    if (item.day === "Today") {
      
      setPopupData({
        img: item.popupImage, 
        
      });
    } else {
      
      setPopupData({
        img: item.alternateImage, 
         
      });
    }
  };

  // Close the popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupData(null);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {Schedule.map((item, index) => (
        <div
          key={index}
          className='classsched_1'
          style={{ color: item.color, background: item.background }}
          onClick={() => handleItemClick(item)} // Call handleItemClick on click
        >
          <img className='classsched_icon' src={item.img} alt="img" />
          <div>
            <p className='classsched_2'>{item.class}</p>
            <p className='classsched_3'>{item.time}</p>
          </div>
          <p className='classsched_4'>{item.day}</p>
        </div>
      ))}

      {popupData && (
        <div className="popup" ref={popupRef}> {/* Attach ref to the popup */}
          <img src={popupData.img} alt="Schedule Popup" />
          <p>{popupData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;
