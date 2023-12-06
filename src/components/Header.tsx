import Banner from "./Banner";
import LanguageDropdownAndLogo from "./LanguageDropdownAndLogo";
import Breadcrumb from "./Breadcrunb";
import ExitButton from "./buttons/ExitButton";

interface HeaderProps {
  isLanguageDropdownVisible: boolean | null;
  rotateBannerText: boolean | null;
}

const Header: React.FC<HeaderProps> = ({
  isLanguageDropdownVisible,
  rotateBannerText,
}) => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <div style={{ height: "35px" }}>
          <Banner rotateText={rotateBannerText} />
        </div>
        <div style={{ height: "40px" }}>
          <LanguageDropdownAndLogo isVisible={isLanguageDropdownVisible} />
        </div>
        <div
          style={{
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "18px",
            paddingRight: "32px",
          }}
        >
          <Breadcrumb />
          <ExitButton />
        </div>
      </div>
    </>
  );
};

export default Header;
