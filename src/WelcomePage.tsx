import "./WelcomePage.css";
import React, { MouseEvent } from "react";
import "./pages/LanguageSelection";
import LanguageDropdown from "./components/LanguageDropdown";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";

const WelcomeMessage = () => {
  return (
    <>
      <div>
        <Banner />
        <LanguageDropdown />
        <div className="welcome-message">
          <div className="welcome-message-content">
            <h1>Welcome to Calgary</h1>
            <p>
              Learn more about city services, resources, and other important
              information for newcomers{" "}
            </p>
            <Link to="LanguageScreen/">
              <button className="get-started-button">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="welcome-image"></div>
      </div>
    </>
  );
};

export default WelcomeMessage;
