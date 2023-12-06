import BannerSpanish from "./BannerSpanish";
import LanguageDropdownAndLogo from "./LanguageDropdownAndLogo";
import ExitButtonSpanish from "./buttons/ExitButtonSpanish";
import BreadcrumbSpanish from "./BreadcrumbSpanish";

interface HeaderProps {
  isLanguageDropdownVisible: boolean | null;
  rotateBannerText: boolean | null;
}

const HeaderSpanish: React.FC<HeaderProps> = ({
  isLanguageDropdownVisible,
  rotateBannerText,
}) => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <div style={{ height: "35px" }}>
          <BannerSpanish rotateText={rotateBannerText} />
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
          <BreadcrumbSpanish />
          <ExitButtonSpanish />
        </div>
      </div>
    </>
  );
};

export default HeaderSpanish;
