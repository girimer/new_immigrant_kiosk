import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospitalUser,
  faPhone,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function Languages() {
  const iconStyle = {
    padding: "16px", // Adjust the padding value as needed
    fontSize: "7rem",
  };
  const buttonStyle = {
    padding: "2rem",
    margin: "5rem",
  };

  return (
    <div>
      <Header />
      <ArrowBackIcon
        fontSize="large"
        htmlColor="red"
        //   className="text-4xl"
        style={iconStyle}
      ></ArrowBackIcon>
      <Typography
        align="center"
        variant="h3"
        paddingBottom={"50px"}
        color={"red"}
        fontFamily={"Arial"}
      >
        Your well-being matters
      </Typography>
      <Typography>
        Alberta Health Services (AHS) is responsible for promoting wellness and
        providing health care services across the province. Programs and
        services are offered at facilities throughout the province, including
        hospitals, clinics, continuing care facilities, cancer centers, mental
        health facilities and community health sites.
      </Typography>
      <Typography>
        <strong>Tap to learn more about any of the following</strong>
      </Typography>
      <div className="service-buttons">
        <div className="button-row">
          <Button to="" icon={<FontAwesomeIcon icon={faHospitalUser} />}>
            Alberta Health Card
          </Button>
          <Button to="" icon={<FontAwesomeIcon icon={faPhone} />}>
            Health Link
          </Button>
          <Button to="./Hospitals" icon={<FontAwesomeIcon icon={faHospital} />}>
            Hospitals
          </Button>
        </div>
      </div>
    </div>
  );
}
