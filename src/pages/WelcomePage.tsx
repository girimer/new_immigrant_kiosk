import React, { useState, useEffect } from "react";
import "./WelcomePage.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const rotatingWelcomeTexts = [
    "Welcome to Calgary",
    "Bienvenido a Calgary",
    "欢迎来到卡尔加里",
    // Add more languages as needed
  ];

  const rotatingInfoTexts = [
    "Learn more about city services, resources, and other important information for newcomers",
    "Obtenga más información sobre los servicios de la ciudad, recursos y otra información importante para los recién llegados",
    "了解有关城市服务、资源以及其他对新移民重要的信息",
    // Add more languages as needed
  ];

  const rotatingButtonTexts = [
    "Get Started",
    "Comenzar",
    "开始",
    // Add more languages as needed
  ];

  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWelcomeIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWelcomeTexts.length
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, [rotatingWelcomeTexts]);

  return (
    <>
      <div>
        <div style={{ height: "40px" }}>
          <Banner rotateText={true} />
        </div>
        <div className="welcome-message">
          <div className="welcome-message-content">
            <h1>{rotatingWelcomeTexts[currentWelcomeIndex]}</h1>
            <p>{rotatingInfoTexts[currentWelcomeIndex]}</p>
            <Link to="Languages/">
              <button className="get-started-button">
                {rotatingButtonTexts[currentWelcomeIndex]}
              </button>
            </Link>
          </div>
        </div>
        <div className="welcome-image"></div>
      </div>
    </>
  );
};

export default WelcomePage;
