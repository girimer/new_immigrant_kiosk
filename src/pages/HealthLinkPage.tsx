import Header from "../components/Header";
import Heading from "../components/Heading";
import "./HealthLinkPage.css";
import logoImage from "../Images/811Logo.png";


export default function Languages() {
  return (
    <div>
      <Header isLanguageDropdownVisible={null} rotateBannerText={null} />
      <div className="flex-container">
        <div id="flex1">
            <div id="header">One number. All your trusted health advice.</div>
            <div id="subHeader">About Healthcare</div>
            <div id="body">Do you have health concerns about you or your child? Call Health Link and you have options to speak with a variety of health care professionals including registered nurses, dietitians, dementia specialists and mental health and rehabilitation clinicians. We will help determine the best care for your individual situation.</div>
            <div id="subBody">For health advice or information, call Health Link 24/7 by dialing 811 or visit MyHealth.Alberta.ca.</div>
        </div>
        <div id="flex2">
            <img src={logoImage} width={500} height={500}/>
        </div>
      </div>
    </div>
  );
}
        