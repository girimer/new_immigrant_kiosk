import LanguageButton from "../components/buttons/LanguageButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LanguageScreen() {
  const iconStyle = {
    padding: "16px", // Adjust the padding value as needed
    fontSize: "7rem",
  };
  return (
    <div>
      <ArrowBackIcon
        fontSize="large"
        htmlColor="red"
        //   className="text-4xl"
        style={iconStyle}
      ></ArrowBackIcon>
      <Typography align="center" variant="h3" paddingBottom={"50px"}>
        Select Language
      </Typography>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row justify-center space-x-8">
          <Link to="ServicesScreen/">
            <LanguageButton country="GB" language={"English"}></LanguageButton>
          </Link>
          <LanguageButton country="GB" language={"Español"}></LanguageButton>
          <LanguageButton country="GB" language={"Français"}></LanguageButton>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <LanguageButton country="GB" language={"Deutsch"}></LanguageButton>
          <LanguageButton country="GB" language={"Korean"}></LanguageButton>
          <LanguageButton country="GB" language={"English"}></LanguageButton>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <LanguageButton country="GB" language={"English"}></LanguageButton>
          <LanguageButton country="GB" language={"English"}></LanguageButton>
          <LanguageButton country="GB" language={"English"}></LanguageButton>
        </div>
        <div className="flex flex-row justify-center">
          <Button variant="contained">Continue</Button>
        </div>
      </div>
    </div>
  );
}
