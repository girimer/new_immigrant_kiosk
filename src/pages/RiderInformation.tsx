import ExitButton from "../components/buttons/ExitButton";
import BackButton from "../components/buttons/BackButton";
import ServiceButton from "../components/buttons/ServiceButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import CommuteIcon from "@mui/icons-material/Commute";
import RiderDialogBox from "../components/RiderDialogBox";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type ArrowProps = {
  val: number;
};

export default function RiderInformation() {
  const [showLeftArrow, setShowLeftArrow] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("val");
  const [serviceButtonID, setServiceButtonID] = useState(0);

  function LeftArrow({ val }: ArrowProps) {
    if (val === 0) {
      return null;
    }
    return (
      <div className="flex items-center" onClick={leftOnClick}>
        <ArrowBackIosIcon />
      </div>
    );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function rightOnClick() {
    setShowLeftArrow(1);
    setServiceButtonID(serviceButtonID + 1);
  }

  function leftOnClick() {
    setShowLeftArrow(0);
    setServiceButtonID(serviceButtonID - 1);
  }

  function dialogBoxContent() {
    return (
      <>
        <DialogTitle>Plan your trip</DialogTitle>;
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/directions?key=${
            import.meta.env.VITE_GMAPS_KEY
          }
          &origin=Crowfoot+Station+Calgary
          &destination=Dalhousie+Station+Calgary
          &mode=transit`}
        ></iframe>
      </>
    );
  }

  function ShowServiceButton() {
    if (serviceButtonID === 0) {
      return (
        <ServiceButton
          Icon={
            <CommuteIcon
              className="text-lg"
              sx={{ fontSize: "8rem", width: "250px" }}
            />
          }
          stringVal="Plan your Trip"
          onClick={handleClickOpen}
        />
      );
    } else if (serviceButtonID === 1) {
      return (
        <ServiceButton
          Icon={
            <DirectionsTransitIcon
              className="text-lg"
              sx={{ fontSize: "8rem", width: "250px" }}
            />
          }
          stringVal="Bus Lines"
          onClick={handleClickOpen}
        />
      );
    }
  }

  return (
    <div className="flex flex-col">
      <div className="text-end">
        <ExitButton />
      </div>
      <div className="flex flex-row justify-center">
        <LeftArrow val={showLeftArrow} />
        <ShowServiceButton />
        <RiderDialogBox
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          DialogBoxContent={dialogBoxContent}
        />
        <div className="flex items-center" onClick={rightOnClick}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <BackButton />
    </div>
  );
}
