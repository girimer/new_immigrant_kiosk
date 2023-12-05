import React from "react";
import "./HospitalsPage.css"; // Import your CSS file for styling
import HospitalsSearchForm from "./HospitalsSearchForm";
import Logo from "../Images/logo.png";
import Header from "../components/Header";
import Heading from "../components/Heading";

const HospitalsFacilitiesPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <div className="container">
        <div className="left-side">
          <Heading
            heading="Hospitals & Facilities"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus sed nisi convallis malesuada. Proin varius ex vel ligula vulputate, at volutpat lectus eleifend."
            includeTapToLearnMore={false}
          />
          <HospitalsSearchForm onSubmit={handleSubmit} />
        </div>
        <div className="right-side">
          <div className="image-container">
            <img
              style={{
                height: "100%",
                marginLeft: "auto",
                marginRight: "35px",
              }}
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalsFacilitiesPage;
