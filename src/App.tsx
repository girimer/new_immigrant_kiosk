import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import LanguageScreen from "./pages/LanguageSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="LanguageScreen/" element={<LanguageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
