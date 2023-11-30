import BackButton from "../components/buttons/BackButton";
import ServiceButton from "../components/buttons/ServiceButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RiderDialogBox from "../components/RiderDialogBox";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import redLineImage from "/src/Images/red lines.png";
import Header from "../components/Header";
import { useState } from "react";
import { faBus, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../components/buttons/ServicesButtton.css";

type ArrowProps = {
  val: number;
};

export default function RiderInformation() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("val");
  const [dialogBoxContent, setDialogBoxContent] = useState(0);

  const handleClickOpen = (id: number) => {
    setDialogBoxContent(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function PlanDialogBoxContent() {
    if (dialogBoxContent === 0) {
      return (
        <>
          <DialogTitle>Plan your trip</DialogTitle>
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
    } else {
      return (
        <>
          <DialogTitle>Bus Lines</DialogTitle>
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
          <div>
            Red lines goes from Tuscany Station to Somerset station and vise
            verisa.
          </div>
          <img src={redLineImage} alt="Red Line" />
          <div>
            By Zeekakboos - Own work, CC BY-SA 4.0,
            https://commons.wikimedia.org/w/index.php?curid=130293156
          </div>
        </>
      );
    }
  }

  function ShowServiceButtons() {
    return (
      <div className="button-row">
        <ServiceButton
          icon={<FontAwesomeIcon icon={faCalendar} />}
          onClick={() => {
            handleClickOpen(0);
          }}
        >
          Plan your Trip
        </ServiceButton>
        <ServiceButton
          icon={<FontAwesomeIcon icon={faBus} />}
          onClick={() => {
            handleClickOpen(1);
          }}
        >
          Bus Lines
        </ServiceButton>
      </div>
    );
  }

  return (
    <>
      <Header />
      <h2 className="service-page-title">Rider Information</h2>
      <p className="service-page-description">
        Below you can find common rider information to help you travel using
        Calgary Transit easier
      </p>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <ShowServiceButtons />
          <RiderDialogBox
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            DialogBoxContent={PlanDialogBoxContent}
          />
        </div>
        <BackButton />
      </div>
    </>
  );
}
