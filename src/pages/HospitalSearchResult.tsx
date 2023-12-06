import Header from "../components/Header";
import Heading from "../components/Heading";
import Logo from "../Images/logo.png";
import "./HospitalSearchResult.css";
import { useLocation } from "react-router-dom";


export default function SearchResults() {
  const location = useLocation();
  const data = location.state;
  if (data.service == "cardiology"){
    data.service = "Cardiology";
    var result = data.service;
  }
  else{
    data.service = "Emergency";
    var result = data.service;
  }
  if (data.proximity == "5" || data.proximity == ""){
    var proximity = 5;
    var distance = proximity - 2;
    var distance1 = proximity -1;
    var distance2 = proximity - 3;
  }
  else{
    var proximity = 10;
    var distance = proximity - 2;
    var distance1 = proximity -1;
    var distance2 = proximity - 3;
  }
  return (
    <div>
      <Header isLanguageDropdownVisible={true} rotateBannerText={true} />
      <div className="container">
        <div className="left-side">
          <Heading
            heading="Hospitals & Facilities"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus sed nisi convallis malesuada. Proin varius ex vel ligula vulputate, at volutpat lectus eleifend."
            includeTapToLearnMore={false}
          />
          <div className="search-container">
            <h2 className="search-header">Search Results For {result}</h2>
            <ul>
                <ul className="listHeader">Calgary Children's Hospital</ul>
                    <li className="subList">Address: 28 Oki Dr, Calgary, AB T3B 6A8</li>
                    <li className="subList">Phone Number: (403) 955-7211</li>
                    <li className="subListBot">Approximate Distance: {distance}km</li>
                <ul className="listHeader">Calgary Foothills Hospital</ul>
                    <li className="subList">Address: 1403 29 St NW, Calgary, AB T2N 2T9</li>
                    <li className="subList">Phone Number: (403) 944-1110</li>
                    <li className="subListBot">Approximate Distance: {distance2}km</li>
                <ul className="listHeader">Calgary Heart Centre</ul>
                    <li className="subList">Address: 3280 Hospital Dr NW #403, Calgary, AB T2N 4Z6</li>
                    <li className="subList">Phone Number: (403) 521-2227</li>
                    <li className="subListBot">Approximate Distance: {distance1}km</li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="image-container">
            <img
              style={{
                height: "100%",
                marginLeft: "auto",
                marginRight: "35px",
              }}
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
        