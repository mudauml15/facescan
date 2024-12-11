import React, { useEffect, useState } from "react";
import Home from './pages/home'


const MobileOnlyMessage = ({ mobileWidth = 768 }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= mobileWidth);
    };


    checkScreenSize();


    window.addEventListener("resize", checkScreenSize);


    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [mobileWidth]);

  if (!isMobile) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          fontSize: "18px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>
          This application is designed for mobile devices. Please switch to a
          mobile phone to continue.
        </p>
      </div>
    );
  }

  return (
    <>



      <Home />


    </>





  );
};

export default MobileOnlyMessage;
