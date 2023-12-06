import Footer from "../components/Footer";
import Header from "../components/Header";
import Pic from "../Images/page-under-construction.jpg";

export default function UnderConstruction() {
  return (
    <>
      <Header rotateBannerText={null} isLanguageDropdownVisible={null} />
      <img src={Pic} />
      <Footer heading={null} body={null} />
    </>
  );
}
