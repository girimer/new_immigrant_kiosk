import { useState, useEffect } from "react";
import "./Banner.css";
import { useBannerContext } from "./BannerContextProps";

interface BannerProps {
  rotateText: boolean | null;
}

const Banner: React.FC<BannerProps> = ({ rotateText }) => {
  const rotatingTexts = [
    "UPDATES: Calgary Local Immigrant Partnership Initiative aims to create a more welcoming community",
    "ACTUALIZACIONES: La Iniciativa de Asociación de Inmigrantes Locales de Calgary tiene como objetivo crear una comunidad más acogedora",
    "更新：卡尔加里本地移民合作倡议旨在创建一个更加友好的社区",
    // Add more languages as needed
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { isBannerOpen, setIsBannerOpen } = useBannerContext();

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const textIntervalId = setInterval(() => {
      if (rotateText === true) {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % rotatingTexts.length
        );
      } else {
        setCurrentTextIndex(() => 0);
      }
    }, 4000);

    return () => {
      clearInterval(timeIntervalId);
      clearInterval(textIntervalId);
    };
  }, [isBannerOpen, rotateText]);

  const handleCloseBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div className={`banner ${isBannerOpen ? "open" : "closed"}`}>
      {isBannerOpen && (
        <>
          <div className="moving-text-container">
            <p className="moving-text">{rotatingTexts[currentTextIndex]}</p>
            <button className="close-button" onClick={handleCloseBanner}>
              x
            </button>
          </div>
        </>
      )}
      <div className="date-time-container">
        <p className="date-time">
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Banner;
