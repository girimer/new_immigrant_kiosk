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

const ServicesSpanish: React.FC = () => {
  return (
    <>
      <HeaderSpanish
        isLanguageDropdownVisible={true}
        rotateBannerText={false}
      />
      <div>
        <h2 className="service-page-title">Servicios</h2>
        <p className="service-page-description">
          No importa de dónde esté inmigrando, le brindamos una serie de
          servicios para ayudar a los recién llegados a sentirse bienvenidos y
          adaptarse a su nuevo hogar. Toque para obtener más información sobre
          cualquiera de los siguientes servicios y recursos disponibles para
          usted como nuevo calgariano.
        </p>
        <div className="service-buttons">
          <div className="button-row">
            <Button to="./health" icon={<FontAwesomeIcon icon={faHeartbeat} />}>
              Servicios de salud de Alberta
            </Button>

            <Button
              to="./education"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              Educación
            </Button>

            <Button
              to="./job-assistance"
              icon={<FontAwesomeIcon icon={faSuitcase} />}
            >
              Asistencia laboral
            </Button>
            <Button
              to="./activities"
              icon={<FontAwesomeIcon icon={faBicycle} />}
            >
              Actividades
            </Button>
          </div>

          {/* Second Row */}
          <div className="button-row">
            <Button
              to="./Transit/RiderInformation"
              icon={<FontAwesomeIcon icon={faBus} />}
            >
              Tránsito de Calgary
            </Button>

            <Button to="./social" icon={<FontAwesomeIcon icon={faUsers} />}>
              Programas Sociales
            </Button>

            <Button
              to="./emergency-services"
              icon={<FontAwesomeIcon icon={faPhone} />}
            >
              Servicios de emergencia
            </Button>

            <Button
              to="./housing"
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
