import React, { useState, useEffect } from "react";
import LanguageButton from "../components/buttons/LanguageButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Languages() {
  const rotatingTitles = [
    "Select Language",
    "Seleccione el idioma",
    "选择语言",
    // Add more languages as needed
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTitles.length
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [rotatingTitles]);

  const iconStyle = {
    padding: "16px", // Adjust the padding value as needed
    fontSize: "7rem",
  };

  return (
    <div>
      <Header isLanguageDropdownVisible={false} rotateBannerText={true} />
      <Typography align="center" variant="h3" paddingBottom={"50px"}>
        {rotatingTitles[currentTitleIndex]}
      </Typography>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row justify-center space-x-8">
          <Link to="Services/">
            <LanguageButton country="GB" language={"English"}></LanguageButton>
          </Link>
          <LanguageButton country="MX" language={"Español"}></LanguageButton>
          <LanguageButton country="FR" language={"Français"}></LanguageButton>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <LanguageButton country="DE" language={"Deutsch"}></LanguageButton>
          <LanguageButton country="KR" language={"Korean"}></LanguageButton>
          <LanguageButton country="GB" language={"Polski"}></LanguageButton>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <LanguageButton country="CN" language={"中国人"}></LanguageButton>
          <LanguageButton country="JP" language={"日本語"}></LanguageButton>
          <LanguageButton country="RU" language={"русский"}></LanguageButton>
        </div>
      </div>
    </div>
  );
}
