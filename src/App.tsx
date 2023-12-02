import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import LanguageScreen from "./pages/LanguageSelection";
import ServicesScreen from "./pages/Services";
import TransitScreen from "./pages/TransitScreen";
import RiderInformation from "./pages/RiderInformation";
import FaresScreen from "./pages/FaresScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BannerProvider } from "./components/BannerContextProps";
import ServicesSpanish from "./pages/ServicesSpanish";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/LanguageScreen" element={<LanguageScreen />} />
          <Route path="/MedicalScreen" element={<MedicalScreen />} />
          <Route
            path="/LanguageScreen/ServicesScreen/Transit"
            element={<TransitScreen />}
          />
          <Route
            path="/LanguageScreen/ServicesScreen/Transit/RiderInformation"
            element={<RiderInformation />}
          />
          <Route
            path="/LanguageScreen/ServicesScreen/Transit/Fares"
            element={<FaresScreen />}
          />
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
    </ThemeProvider>
  );
}
export default App;
