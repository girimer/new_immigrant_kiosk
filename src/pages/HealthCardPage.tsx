import Header from "../components/Header";
import Heading from "../components/Heading";
import "./HealthCardPage.css";
import Footer from "../components/Footer"
import healthCard from "../Images/healthCard.png"

export default function Languages() {
  return (
    <div>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <div className="flex-container1">
        <div id="flex1">
            <div id="header1">Learn about the AHCIP</div>
            <div id="body1">This page contains information on how to find out requirements to apply, register and get your health care card for coverage of insured health services in Alberta</div>
            <div id="subHeader1">What is the Alberta Personal Health Card?</div>
            <div id="body1">All new Alberta residents must be registered for the Alberta Health Care Insurance Plan (AHCIP). That means, you need to apply for your Alberta personal health care card to receive insured hospital and physician services. When accessing services you will need to show this personal health care card along with photo identification.</div>
            <div id="subHeader1">How do I apply for an Alberta Personal Health Card?</div>
            <div id="body1">You will have to check your eligibility, complete an application form, gather your supporting documents and submit your application. This information can be found online at https://www.alberta.ca/ahcip-how-to-apply</div>
        </div>
        <div id="flex2">
            <img src={healthCard} alt="test"/>
        </div>
      </div>
      <Footer
        heading="Have more questions?"
        body="Connect with us by dialing 311. Our telephone agents have access to a language translation service that can assist citizens."
      />
    </div>
  );
}
