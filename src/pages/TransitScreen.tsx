import React from "react";
import Header from "../components/Header";
import "../components/buttons/ServicesButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const TransitPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className="service-page-title">
          Commute and travel safely
        </h2>
        <p className="service-page-description">
          No matter where you’re headed, Calgary Transit aims to keep you
          connected with people and places you care about by providing
          safe, accessible, reliable and courteous public transportation
          services. Our convenient transit service will get you to
          where you want to go.
        </p>
        <div className="button-row">
          <Button
            to="./Fares"
            icon={<FontAwesomeIcon icon={faBus} />}
          >
            Fares and Passes
          </Button>
          <Button
            to="./RiderInformation"
            icon={<FontAwesomeIcon icon={faBus} />}
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