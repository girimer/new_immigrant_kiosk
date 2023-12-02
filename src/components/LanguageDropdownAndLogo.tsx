import React from "react";
import Logo from "../Images/logo.png"; // Replace with your actual logo path
import LanguageDropdown from "./LanguageDropdown";

interface LanguageDropdownProps {
  isVisible: boolean | null;
}

const LanguageDropdownAndLogo: React.FC<LanguageDropdownProps> = ({
  isVisible,
}) => {
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
      <LanguageDropdown isVisible={isVisible} />
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
  );
};

export default LanguageDropdownAndLogo;
