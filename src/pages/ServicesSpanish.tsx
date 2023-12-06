import React from "react";
import HeaderSpanish from "../components/HeaderSpanish";
import "../components/buttons/ServicesButtton.css";
import Button from "../components/buttons/ServicesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faGraduationCap,
  faBus,
  faUsers,
  faSuitcase,
  faBicycle,
  faPhone,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "../components/Heading";

const ServicesSpanish: React.FC = () => {
  return (
    <>
      <HeaderSpanish
        isLanguageDropdownVisible={true}
        rotateBannerText={false}
      />
      <div>
        <Heading
          heading="Servicios"
          subheading="No importa de dónde esté inmigrando, le brindamos una serie de servicios para ayudar a los recién llegados a sentirse bienvenidos y adaptarse a su nuevo hogar. Toque para obtener más información sobre cualquiera de los siguientes servicios y recursos disponibles para usted como nuevo calgariano."
          includeTapToLearnMore={false}
        />
        <div className="service-buttons">
          <div className="button-row">
            <Button
              to="./Alberta Health"
              icon={<FontAwesomeIcon icon={faHeartbeat} />}
            >
              Servicios de salud de Alberta
            </Button>

            <Button
              to="./Education"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              Educación
            </Button>

            <Button
              to="./Job-Assistance"
              icon={<FontAwesomeIcon icon={faSuitcase} />}
            >
              Asistencia laboral
            </Button>
            <Button
              to="./Activities"
              icon={<FontAwesomeIcon icon={faBicycle} />}
            >
              Actividades
            </Button>
          </div>

          {/* Second Row */}
          <div className="button-row">
            <Button to="./Transit" icon={<FontAwesomeIcon icon={faBus} />}>
              Tránsito de Calgary
            </Button>

            <Button
              to="./Social Programs"
              icon={<FontAwesomeIcon icon={faUsers} />}
            >
              Programas Sociales
            </Button>

            <Button
              to="./Emergency Services"
              icon={<FontAwesomeIcon icon={faPhone} />}
            >
              Servicios de emergencia
            </Button>

            <Button
              to="./Housing"
              icon={<FontAwesomeIcon icon={faHouseChimney} />}
            >
              Alojamiento
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSpanish;
