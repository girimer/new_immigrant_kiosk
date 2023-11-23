import LanguageDropdown from "./components/LanguageDropdown";
import Banner from "./components/Banner";
import WelcomeMessage from "./WelcomePage";
import RiderInformation from "./pages/RiderInformation";

function App() {
  return (
    <div>
      <Banner />
      <LanguageDropdown />
      {/* <WelcomeMessage /> */}
      <RiderInformation />
    </div>
  );
}

export default App;
