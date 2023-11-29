import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import LanguageScreen from "./pages/LanguageSelection";
import ServicesScreen from "./pages/ServicesScreen";
import RiderInformation from "./pages/RiderInformation";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
            path="/LanguageScreen/ServicesScreen/Transit/RiderInformation"
            element={<RiderInformation />}
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
