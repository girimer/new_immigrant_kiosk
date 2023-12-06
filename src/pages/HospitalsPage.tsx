import React from "react";
import "./HospitalsPage.css"; // Import your CSS file for styling
import HospitalsSearchForm from "./HospitalsSearchForm";
import HospitalImage from "../Images/Hospital.png";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const HospitalsFacilitiesPage: React.FC = () => {
  const handleSubmit = (formData: any) => {};

  return (
    <>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <div className="container">
        <div className="left-side">
          <Heading
            heading="Hospitals & Facilities"
            subheading="Calgary currently has four major adult acute care hospitals; the Foothills Medical Centre, the Peter Lougheed Centre, the Rockyview General Hospital and the South Health Campus and a children's acute care hospital; Alberta Children's Hospital, all running under Alberta Health Services."
            includeTapToLearnMore={false}
          />
          <HospitalsSearchForm />
        </div>
        <div className="right-side">
          <div className="image-container">
            <img
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "35px",
              }}
              src={HospitalImage}
              alt="Hospital"
            />
          </div>
          <div
            style={{
              marginTop: "15px",
              width: "85%",
              marginLeft: "auto",
              marginRight: "35px",
              backgroundColor: "#C61229",
              padding: "15px",
              paddingLeft: "25px",
              paddingRight: "25px",
              color: "white",
              textAlign: "left",
            }}
          >
            <h3>Find out more</h3>
            <p>
              {
                "You can learn about specific facilities or search for information about them by visiting "
              }
              <a
                href="https://www.albertahealthservices.ca/zones/calgary-zone.aspx"
                style={{ color: "white" }}
              >
                www.albertahealthservices.ca/zones/calgary-zone.aspx
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer heading={null} body={null} />
    </>
  );
};

export default HospitalsFacilitiesPage;
