import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import LanguageScreen from "./pages/LanguageSelection";
import TransitScreen1 from "./pages/TransitScreenMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="LanguageScreen/" element={<LanguageScreen />} />
        <Route path="TransitScreen1/" element={<TransitScreen1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
