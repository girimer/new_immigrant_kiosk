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

const ServiceUpdatesPage: React.FC = () => {
  return (
    <>
      <Header isLanguageDropdownVisible={true} rotateBannerText={false} />
      <div>
        <h2 className="transit-page-title">
          Know about any essential changes
        </h2>
        <p className="transit-page-description">
        This page provides a brief overview of any significant service
        changes or updates which could affect your scheduled route. To
        check the status of a specific route, please use the Plan a Trip or
        Next Ride features on calgarytransit.com. 
        </p>
        <p className="transit-page-bold">
          CTrain service disruption November 24 to December 4
        </p>
        <p className="transit-service-text">
        From 8:00 p.m. on Friday, November 24 to 4:00 a.m. on Monday, December 4,
        Victoria Park Stampede Station, Erlton/Stampede and 39 Avenue Stations will
        be closed. The southbound Red Line will terminate at City Hall/Bow Valley
        College Station and northbound Red Line will terminate at Chinook Station, with
        no CTrain service in between.
        </p>
        <p className="transit-page-bold">
          October 23 to November 8: Victoria Park/Stampede to City Hall/Bow Valley College Single tracking
        </p>
        <p className="transit-service-text">
          The stations will not be fully closed, this is a partial closure.
          The inbound tracks will be closed at both Victoria Park/Stampede and City Hall/Bow
          Valley College Stations until the end-of-service each night
        </p>
        <div className="transit-image-2"></div>
      </div>
    </>
  )
}

export default ServiceUpdatesPage;