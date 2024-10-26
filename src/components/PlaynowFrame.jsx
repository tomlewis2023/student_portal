
import React from "react";

const PlayNowFrame = ({ imageUrl, title, para, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#6669fe", 
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "90vw", 
          maxHeight: "90vh", 
          overflow: "hidden", 
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            padding: "5px 10px",
            zIndex: 1, 
          }}
        >
          X
        </button>

        {/* Title and paragraph centered at the top */}
        <div style={{ textAlign: "center", color: "white", marginBottom: "10px" }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <p style={{ margin: 0 }}>{para}</p>
        </div>

        {/* Image section with padding to make it fully visible */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px", 
        }}>
          <img
            src={imageUrl}
            alt="Play Now"
            style={{
              maxWidth: "100%", 
              maxHeight: "70vh", 
              borderRadius: "8px", 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayNowFrame;
