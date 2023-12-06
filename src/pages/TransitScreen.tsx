import React from "react";
import Header from "../components/Header";
import "../pages/TransitButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faDollarSign, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import TransitPicture from "/src/Images/Transit1Pic.jpg";
//import {
//  faUser,
//} from "@fortawesome/free-regular-svg-icons"; these icons give me errors

const TransitPage: React.FC = () => {
  return (
    <>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <div className="flex flex-row ml-12">
        <div className="left flex flex-col">
          <h2 className="transit-page-title">Commute and travel safely</h2>
          <p className="transit-page-description">
            No matter where you’re headed, Calgary Transit aims to keep you
            connected with people and places you care about by providing safe,
            accessible, reliable and courteous public transportation services.
            Our convenient transit service will get you to where you want to go.
          </p>
          <p className="transit-page-bold mt-auto">
            Tap to learn more about any of the following
          </p>
        </div>
        <img
          className="transit-image-1 ml-auto mr-12"
          src={TransitPicture}
          alt=""
        />
      </div>
      <div className="transit-buttons ml-12">
        <Button to="./Fares" icon={<FontAwesomeIcon icon={faDollarSign} />}>
          Fares and Passes
        </Button>
        <Button to="./Plan Trip" icon={<FontAwesomeIcon icon={faUser} />}>
          Plan your trip
        </Button>
        <Button to="./Service Updates" icon={<FontAwesomeIcon icon={faBus} />}>
          Service Updates
        </Button>
      </div>
      <Footer
        heading="General inquiries?"
        body="Reach out at 403-262-1000 for more information on the transit system, from 6 am-9 pm, Monday-Friday and 8 am-6 pm, weekends."
      />
    </>
  );
};

export default TransitPage;
