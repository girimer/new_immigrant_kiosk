import Button from "@mui/material/Button";
import Flag from "react-flagkit";
import "./LanguageButton.css"
export default function LanguageButton(props: { country: string; language: string }) {
  return (
    <Button
      variant="outlined"
      size="large"
      style={{ color: "black", borderColor: "red", width: "140px" }}
    >
      <Flag country={props.country} className="flag" />
      {props.language}
    </Button>
  );
}