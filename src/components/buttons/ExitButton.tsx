import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const ExitButton = () => {
  return (
    <Link to={"/"}>
      <Button
        variant="outlined"
        size="small"
        style={{
          height: "100%",
          width: "150px",
          color: "black",
          borderColor: "red",
          borderRadius: "14px",
          borderWidth: "2px",
        }}
        sx={{
          "&:hover": {
            backgroundColor: "#DF0C2E",
          },
        }}
      >
        <div style={{ paddingRight: "10px", fontWeight: "600" }}>
          Exit Session
        </div>
        <ExitToAppIcon style={{ color: "black" }} />
      </Button>
    </Link>
  );
};

export default ExitButton;
