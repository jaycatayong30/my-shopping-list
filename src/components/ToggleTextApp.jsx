import React, { useState } from "react";

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fcc-wrapper">
      <div id="toggle-container">
        <button id="toggle-button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Message
        </button>
        {isVisible && <p id="message">I love freeCodeCamp!</p>}
      </div>
      <button onClick={() => window.history.back()} style={{marginTop: '20px'}}>Back</button>
    </div>
  );
};