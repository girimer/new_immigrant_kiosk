import LanguageDropdown from "./components/LanguageDropdown";
import Banner from "./components/Banner";
import WelcomeMessage from "./WelcomePage";

function App() {
  return (
    <div>
      <Banner />
      <LanguageDropdown />
      <WelcomeMessage />
    </div>
  );
}

export default App;
