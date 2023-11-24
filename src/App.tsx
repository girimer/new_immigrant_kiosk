import LanguageDropdown from "./components/LanguageDropdown";
import Banner from "./components/Banner";
import WelcomeMessage from "./WelcomePage";
import MedicalScreen from "./pages/MedicalScreen"

function App() {
  return (
    <div>
      <Banner />
      <LanguageDropdown />
      {/* <WelcomeMessage /> */}
      <MedicalScreen/>
    </div>
  );
}

export default App;
