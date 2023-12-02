import React from "react";
import Header from "../components/Header";
import "../pages/TransitButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
//import {
//  faUser,
//} from "@fortawesome/free-regular-svg-icons"; these icons give me errors

const TransitPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className="transit-page-title">
          Commute and travel safely
        </h2>
        <p className="transit-page-description">
          No matter where you’re headed, Calgary Transit aims to keep you
          connected with people and places you care about by providing
          safe, accessible, reliable and courteous public transportation
          services. Our convenient transit service will get you to
          where you want to go.
        </p>
        <p className="transit-page-bold">
          Tap to learn more about any of the following
        </p>
        <div className="transit-image"></div>
        <div className="transit-buttons">
          <Button
            to="./Fares"
            icon={<FontAwesomeIcon icon={faDollarSign} />}
          >
            Fares and Passes
          </Button>
          <Button
            to="./RiderInformation"
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            Rider Information
          </Button>
          <Button
            to="./RiderInformation" //change this to the correct one once implemented
            icon={<FontAwesomeIcon icon={faBus} />}
          >
            Service Updates
          </Button>
        </div>
      </div>
    </>
  )
}

export default TransitPage;