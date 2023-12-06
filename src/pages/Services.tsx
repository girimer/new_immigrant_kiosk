import React from "react";
import Header from "../components/Header";
import "../components/buttons/ServicesButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
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
import Heading from "../components/Heading";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Header isLanguageDropdownVisible={true} rotateBannerText={false} />
      <div>
        <Heading
          heading="Services"
          subheading="No matter where you’re immigrating from, we provide a number of services to help newcomers feel welcome and settle into their new home. Tap to learn more about any of the following services and resources available to you as a new Calgarian."
          includeTapToLearnMore={false}
        />
        <div className="service-buttons">
          <div className="button-row">
            <Button
              to="./Alberta Heath"
              icon={<FontAwesomeIcon icon={faHeartbeat} />}
            >
              Alberta Health Services
            </Button>

            <Button
              to="./Education"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              Education
            </Button>

            <Button
              to="./Job Assistance"
              icon={<FontAwesomeIcon icon={faSuitcase} />}
            >
              Job Assistance
            </Button>
            <Button
              to="./Activities"
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

            <Button
              to="./Social Programs"
              icon={<FontAwesomeIcon icon={faUsers} />}
            >
              Social Programs
            </Button>

            <Button
              to="./Emergency Services"
              icon={<FontAwesomeIcon icon={faPhone} />}
            >
              Emergency Services
            </Button>

            <Button
              to="./Housing"
              icon={<FontAwesomeIcon icon={faHouseChimney} />}
            >
              Housing
            </Button>
          </div>
        </div>
      </div>
      <Footer
        heading="Have more questions?"
        body="Connect with us by dialing 311. Our telephone agents have access to a language translation service that can assist citizens."
      />
    </>
  );
};

export default ServicesPage;
