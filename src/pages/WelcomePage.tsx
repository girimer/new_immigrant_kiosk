import "./WelcomePage.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div>
        <div style={{ height: "40px" }}>
          <Banner />
        </div>
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

export default WelcomePage;
