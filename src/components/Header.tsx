import Banner from "./Banner";
import LanguageDropdownAndLogo from "./LanguageDropdownAndLogo";
import Breadcrumb from "./Breadcrunb";
import ExitButton from "./buttons/ExitButton";

const Header = () => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <div style={{ height: "40px" }}>
          <Banner />
        </div>
        <div style={{ height: "45px" }}>
          <LanguageDropdownAndLogo />
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
