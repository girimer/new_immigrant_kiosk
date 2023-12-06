import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let pathnames = location.pathname.split("/").filter((x) => x);
  pathnames.pop();
  let routeTo = "/" + pathnames.join("/");
  return (
    <Button
      onClick={() => navigate(routeTo)}
      variant="outlined"
      size="small"
      style={{
        height: "100%",
        width: "100px",
        color: "black",
        borderColor: "red",
        borderRadius: "14px",
        borderWidth: "2px",
        margin: "50px",
        marginTop: "80px",
      }}
      sx={{
        "&:hover": {
          backgroundColor: "#DF0C2E",
        },
      }}
    >
      <ChevronLeftIcon style={{ color: "black" }} />
      <div style={{ paddingRight: "10px", fontWeight: "600" }}>Atrás</div>
    </Button>
  );
};

export default BackButton;
