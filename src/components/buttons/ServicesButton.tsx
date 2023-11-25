import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface ServicesButton {
  to: string;
  children: ReactNode;
  icon: React.ReactNode;
}

const ServicesButton: React.FC<ServicesButton> = ({ to, children, icon }) => {
  return (
    <Link to={to}>
      <Button
        variant="outlined"
        size="large"
        style={{
          color: "black",
          borderColor: "red",
          borderRadius: "18px",
          borderWidth: "2px",
        }}
        sx={{
          "&:hover": {
            backgroundColor: "#DF0C2E",
          },
        }}
        className="icon-button"
      >
        <div className="icon">{icon}</div>
        <div className="text">{children}</div>
      </Button>
    </Link>
  );
};

export default ServicesButton;
