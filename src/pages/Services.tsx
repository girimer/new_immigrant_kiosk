import React from "react";
import Header from "../components/Header";
import "../components/buttons/ServicesButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faGraduationCap,
  faBus,
  faUsers,
  faSuitcase,
  faBicycle,
  faPhone,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Header isLanguageDropdownVisible={true} rotateBannerText={false} />
      <div>
        <h2 className="service-page-title">Services</h2>
        <p className="service-page-description">
          No matter where you’re immigrating from, we provide a number of
          services to help newcomers feel welcome and settle into their new
          home. Tap to learn more about any of the following services and
          resources available to you as a new Calgarian.
        </p>
        <div className="service-buttons">
          <div className="button-row">
            <Button to="./health" icon={<FontAwesomeIcon icon={faHeartbeat} />}>
              Alberta Health Services
            </Button>

            <Button
              to="./education"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              Education
            </Button>

            <Button
              to="./job-assistance"
              icon={<FontAwesomeIcon icon={faSuitcase} />}
            >
              Job Assistance
            </Button>
            <Button
              to="./activities"
              icon={<FontAwesomeIcon icon={faBicycle} />}
            >
              Activities
            </Button>
          </div>

          {/* Second Row */}
          <div className="button-row">
            <Button to="./Transit" icon={<FontAwesomeIcon icon={faBus} />}>
              Calgary Transit
            </Button>

            <Button to="./social" icon={<FontAwesomeIcon icon={faUsers} />}>
              Social Programs
            </Button>

            <Button
              to="./emergency-services"
              icon={<FontAwesomeIcon icon={faPhone} />}
            >
              Emergency Services
            </Button>

            <Button
              to="./housing"
              icon={<FontAwesomeIcon icon={faHouseChimney} />}
            >
              Housing
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
