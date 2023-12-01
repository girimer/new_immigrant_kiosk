import React from "react";
import Logo from "../Images/logo.png"; // Replace with your actual logo path
import LanguageDropdown from "./languageDropdown";

const LanguageDropdownAndLogo: React.FC = () => {
  return (
    <div
      style={{
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "18px",
      }}
    >
      <LanguageDropdown />
      <img
        style={{
          alignContent: "center",
          height: "100%",
          paddingRight: "35px",
        }}
        src={Logo}
        alt="Logo"
      />
    </div>
  );
};

export default LanguageDropdownAndLogo;
