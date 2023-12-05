import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import Languages from "./pages/LanguageSelection";
import Services from "./pages/Services";
import TransitScreen from "./pages/TransitScreen";
import RiderInformation from "./pages/RiderInformation";
import FaresScreen from "./pages/FaresScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BannerProvider } from "./components/BannerContextProps";
import ServicesSpanish from "./pages/ServicesSpanish";
import Hospitals from "./pages/HospitalsPage";
import HealthLink from "./pages/HealthLinkPage";
import HealthCard from "./pages/HealthCardPage";

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
    <BannerProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/Languages" element={<Languages />} />
            <Route path="/MedicalScreen" element={<MedicalScreen />} />
            <Route
              path="/Languages/Services/Transit"
              element={<TransitScreen />}
            />
            <Route
              path="/Languages/Services/Transit/RiderInformation"
              element={<RiderInformation />}
            />
            <Route
              path="/Languages/Services/Transit/Fares"
              element={<FaresScreen />}
            />
            <Route path="/Languages/Services" element={<Services />} />
            <Route
              path="/Languages/Services/health"
              element={<MedicalScreen />}
            />
            <Route
              path="/Languages/Services/health/Hospitals"
              element={<Hospitals />}
            />
            <Route path="/Languages/Services/health/HealthLink" element={<HealthLink />} />
            <Route path="/Languages/Services/health/HealthCard" element={<HealthCard />} />
            <Route path="/ServicesSpanish" element={<ServicesSpanish />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </BannerProvider>
  );
}
export default App;
