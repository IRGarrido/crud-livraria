import React from "react";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src="/logo.png" alt="Logo" className="splash-logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
