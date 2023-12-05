import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Icon } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationCityIcon from '@mui/icons-material/LocationCity';


export default function MedicalScreen() {
  const iconStyle = {
    padding: "16px", // Adjust the padding value as needed
    fontSize: "7rem",
  };
  const buttonStyle = {
    padding: "2rem",
    margin: "5rem",
  };
  const cardIcon = (
    <Icon>
        <img alt="edit" src="./src/Images/684833.svg"/>
    </Icon>
  );
  const PhoneIcon = (
      <PhoneEnabledIcon style={{fill: "black"}}/>
  );
  const buildingIcon = (
    <LocationCityIcon style={{fill: "black"}}/>
  );
  return (
    <div>
      <ArrowBackIcon
        fontSize="large"
        htmlColor="red"
        //   className="text-4xl"
        style={iconStyle}
      ></ArrowBackIcon>
      <Typography align="center" variant="h3" paddingBottom={"50px"} color={"red"} fontFamily={'Arial'}>
        Your Well-being matters
      </Typography>
      <Typography>
      Alberta Health Services (AHS) is responsible for promoting wellness and providing health care services across the province. 
      Programs and services are offered at facilities throughout the province, including hospitals, clinics, continuing care facilities, cancer centers, 
      mental health facilities and community health sites.
      </Typography>
      <img src="./src/Images/hospitalimage.png" width="824" height="478">
      </img>
      <Typography>
        <strong>
        Tap to learn more about any of the following
        </strong>
      </Typography>
      <div className="flex flex-row justify-center" >
          <Button variant="outlined" style={buttonStyle} color="error" startIcon={cardIcon}>Alberta Health Card</Button>
          <Button variant="outlined" style={buttonStyle} color="error" startIcon={PhoneIcon} onClick={() => {window.location.href="LanguageSelection.tsx"}}>Health Link</Button>
          <Button variant="outlined" style={buttonStyle} color="error" startIcon={buildingIcon}>Hospitals</Button>
        </div>
    </div>
  );
}
