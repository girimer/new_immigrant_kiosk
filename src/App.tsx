import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import LanguageScreen from "./pages/LanguageSelection";
import ServicesScreen from "./pages/ServicesScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/LanguageScreen" element={<LanguageScreen />} />
        <Route path="/MedicalScreen" element={<MedicalScreen />} />
        <Route
          path="/LanguageScreen/ServicesScreen"
          element={<ServicesScreen />}
        />
        <Route
          path="/LanguageScreen/ServicesScreen/health"
          element={<MedicalScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
