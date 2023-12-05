import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import Languages from "./pages/LanguageSelection";
import Services from "./pages/Services";
import TransitScreen from "./pages/TransitScreen";
import RiderInformation from "./pages/RiderInformation";
import ServiceUpdates from "./pages/ServiceUpdates";
import FaresScreen from "./pages/FaresScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BannerProvider } from "./components/BannerContextProps";
import ServicesSpanish from "./pages/ServicesSpanish";
import Hospitals from "./pages/HospitalsPage";

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
            <Route
              path="/Languages/Services/Transit"
              element={<TransitScreen />}
            />
            <Route
              path="/Languages/Services/Transit/Rider-Information"
              element={<RiderInformation />}
            />
            <Route
              path="/Languages/Services/Transit/Fares"
              element={<FaresScreen />}
            />
            <Route
              path="/Languages/Services/Transit/Service-Updates"
              element={<ServiceUpdates />}
            />
            <Route path="/Languages/Services" element={<Services />} />
            <Route
              path="/Languages/Services/Health"
              element={<MedicalScreen />}
            />
            <Route
              path="/Languages/Services/Health/Hospitals"
              element={<Hospitals />}
            />
            <Route path="/ServicesSpanish" element={<ServicesSpanish />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </BannerProvider>
  );
}
export default App;
