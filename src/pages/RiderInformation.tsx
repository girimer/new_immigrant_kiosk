import RiderDialogBox from "../components/RiderDialogBox";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import redLineImage from "/src/Images/red lines.png";
import blueLineImage from "/src/Images/blue_line.png";
import Header from "../components/Header";
import { useState } from "react";
import "../components/buttons/ServicesButtton.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";

export default function RiderInformation() {
  const [open, setOpen] = useState(false);
  const [imagePath, setImagePath] = useState(redLineImage);
  const [reference, setReference] = useState(
    "By Zeekakboos - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=130293156"
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedLineClick = () => {
    setImagePath(redLineImage);
    setReference(
      "By Zeekakboos - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=130293156"
    );
  };

  const handleBlueLineClick = () => {
    setImagePath(blueLineImage);
    setReference(
      "By Zeekakboos - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=130292914"
    );
  };

  function DialogBoxContent() {
    return (
      <>
        <DialogTitle>Train Lines</DialogTitle>
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
        <div className="flex flex-row">
          <div
            className="color-red place-self-center"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "5px",
              backgroundColor: "red",
            }}
          ></div>
          <div
            style={{
              fontSize: "1.2rem",
              textDecoration: "underline",
              paddingLeft: "5px",
            }}
            onClick={handleRedLineClick}
          >
            Red Line
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className="place-self-center"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "5px",
              backgroundColor: "blue",
            }}
          ></div>
          <div
            style={{
              fontSize: "1.2rem",
              textDecoration: "underline",
              paddingLeft: "5px",
            }}
            onClick={handleBlueLineClick}
          >
            Blue Line
          </div>
        </div>
        <img src={imagePath} alt="Red Line" />
        <Typography variant="caption" sx={{ paddingLeft: "10px" }} gutterBottom>
          {reference}
        </Typography>
      </>
    );
  }

  return (
    <>
      <Header isLanguageDropdownVisible={true} rotateBannerText={false} />
      <h2 className="service-page-title">Rider Information</h2>
      <p className="service-page-description">
        Below you can plan your trip to know where you want to go
      </p>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Dalhouise", "Crowfoot", "Tuscany", "Somerset"]}
              sx={{ width: 270, marginRight: "50px" }}
              renderInput={(params) => (
                <TextField {...params} label="From..." />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Dalhouise", "Crowfoot", "Tuscany", "Somerset"]}
              sx={{ width: 270 }}
              renderInput={(params) => <TextField {...params} label="To..." />}
            />
            <IconButton
              onClick={handleClickOpen}
              sx={{
                position: "relative",
                left: 20,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <InfoIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
            </IconButton>
          </>
          <RiderDialogBox
            open={open}
            onClose={handleClose}
            DialogBoxContent={DialogBoxContent}
          />
        </div>
        <div className="flex flex-row justify-center">
          <iframe
            width="700"
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
        </div>
      </div>
      <Footer heading={null} body={null} />
    </>
  );
}
