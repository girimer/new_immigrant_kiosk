import Header from "../components/Header";
import Heading from "../components/Heading";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospitalUser,
  faPhone,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function Languages() {
  return (
    <div>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <Heading
        heading="Your well-being matters"
        subheading="Alberta Health Services (AHS) is responsible for promoting wellness and providing health care services across the province. Programs and services are offered at facilities throughout the province, including hospitals, clinics, continuing care facilities, cancer centers, mental health facilities and community health sites."
        includeTapToLearnMore={true}
      ></Heading>
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
