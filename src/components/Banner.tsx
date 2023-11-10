import { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner">
      <div className="moving-text-container">
        <p className="moving-text">
          UPDATES: Calgary Local Immigrant Partnership Initiative aims to create
          a more welcoming community...{" "}
        </p>
      </div>
      <div className="date-time-container">
        <p className="date-time">
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Banner;
