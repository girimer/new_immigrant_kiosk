import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ServiceButtonProps = {
  Icon: React.ReactNode;
  stringVal: string;
  onClick: () => void;
};
export default function ServiceButton({
  Icon,
  stringVal,
  onClick,
}: ServiceButtonProps) {
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: "black",
          borderColor: "red",
          fontSize: "2rem",
          textTransform: "none",
        }}
        onClick={onClick}
      >
        <div className="flex flex-col">
          <div className="item-1">{Icon}</div>
          <div className="item-1">
            <Typography variant="h4" gutterBottom>
              {stringVal}
            </Typography>
          </div>
        </div>
      </Button>
    </div>
  );
}
