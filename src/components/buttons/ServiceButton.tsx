import * as React from "react";
import Button from "@mui/material/Button";

type ServiceButtonProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
};
export default function ServiceButton({
  icon,
  children,
  onClick,
}: ServiceButtonProps) {
  return (
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
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      <div className="text">{children}</div>
    </Button>
  );
}
