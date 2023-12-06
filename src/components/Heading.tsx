import React from "react";
import "./Heading.css";
import Typography from "@mui/material/Typography";

interface HeadingComponentProps {
  heading: string;
  subheading: string;
  includeTapToLearnMore: boolean;
}

const Heading: React.FC<HeadingComponentProps> = ({
  heading,
  subheading,
  includeTapToLearnMore,
}) => {
  if (includeTapToLearnMore) {
    return (
      <div>
        <h2 className="heading-container">{heading}</h2>
        <p className="subheading">{subheading}</p>
        <Typography
          align="center"
          variant="h6"
          paddingBottom={"10px"}
          color={"black"}
          fontSize={"16px"}
          fontWeight={"550"}
          fontFamily={"Arial"}
        >
          Tap to learn more about any of the following
        </Typography>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="heading-container">{heading}</h2>
        <p className="subheading">{subheading}</p>
      </div>
    );
  }
};

export default Heading;
