import LanguageButton from "../components/buttons/LanguageButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function LanguageScreen() {
  const iconStyle = {
    padding: "16px", // Adjust the padding value as needed
    fontSize: "7rem",
  };
  return (
    <div>
      <Header />
      <Typography align="center" variant="h3" paddingBottom={"50px"}>
        Select Language
      </Typography>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row justify-center space-x-8">
          <Link to="ServicesScreen/">
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
        <div className="flex flex-row justify-center">
          <Button variant="contained">Continue</Button>
        </div>
      </div>
    </div>
  );
}
