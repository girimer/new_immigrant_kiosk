import map_img from "../Images/search.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HospitalSearchResult.css";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

interface AddressProp {
  address: string;
}
const data = [
  {
    name: "Taralake Medical Clinic",
    info: "Services Provided: Physical Examination, Complex Care, Pre & Post Natal Care, Women's Health",
    address: "",
  },
  {
    name: "Castleridge Health Centre",
    info: "Services Provided: Opioid Against Treatment, Alcohol disorder Treatment, Women's health, medical examation, Message Therapy",
  },
  {
    name: "Providence Family Medical Centre",
    info: "Services Provided: Hematology, Respiratory, Vascular Surgery, Addictions, Mental Health and many more services.",
  },
];

const settings = {
  dots: false,
  Infinity: true,
  speed: 500,
  slidesToShow: 1,
  SlideToScroll: 1,
};

const ExportMapMulitple = (props: AddressProp) => {
  return (
    <iframe
      style={{ width: "100%", height: "330px" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${
        import.meta.env.VITE_GMAPS_KEY
      }
            &q=${props.address}
            &zoom=13`}
    ></iframe>
  );
};

const HospitalSearchResult = () => {
  return (
    <>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <Heading
        heading="Health Facilities Search Result"
        subheading="Click the arrow keys to view the details of each facility"
        includeTapToLearnMore={false}
      />
      <div style={{ display: "flex" }}>
        <div
          className="w-3/4 m-auto"
          style={{
            width: "50%",
            paddingLeft: "60px",
          }}
        >
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="bg-white h-[600px] text-black rounded-xl">
                  <div
                    className="h-80 flex items-top rounded-t-xl"
                    style={{ backgroundColor: "#DF0C2E" }}
                  >
                    {/* <img
                      src={d.image}
                      alt=""
                      style={{ width: "100%", height: "230px" }}
                    /> */}
                    <ExportMapMulitple address={d.name} />
                  </div>
                  <div
                    className="flex flex-col items-center justify-center gap-4 p-4"
                    style={{ backgroundColor: "#CCC6C6" }}
                  >
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-left">{d.info}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={map_img}
            alt="Static Image"
            style={{
              width: "80%",
              padding: "40px",
              paddingLeft: "90px",
              marginTop: "30px",
            }}
          />
        </div>
      </div>
      <Footer heading={null} body={null} />
    </>
  );
};

export default HospitalSearchResult;
