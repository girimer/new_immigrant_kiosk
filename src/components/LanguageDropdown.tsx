import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Flag from "react-flagkit";
import "./languageDropdown.css";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "us", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pl", name: "Polski" },
  { code: "ch", name: "中国人" },
  { code: "pk", name: "اردو" },
  { code: "jp", name: "日本語" },
  { code: "ru", name: "русский" },
];

const getInitialState = () => {
  if (window.location.href === "http://127.0.0.1:5173/ServicesSpanish")
    return "es";
  return "us";
};

interface LanguageDropdownProps {
  isVisible: boolean | null;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isVisible }) => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(getInitialState);

  const handleChange = (e: any) => {
    const selectedCode = e.target.value as string;
    setSelectedLanguage(selectedCode);

    if (selectedCode !== "us") {
      // Navigate to the static page for the selected language
      window.location.href = `/${"ServicesSpanish"}`;
      //window.location.href = `/Languages/Services/ServicesSpanish`;
    } else {
      window.location.href = `/${"Languages/Services"}`;
    }
  };

  // Check if isVisible is not null before rendering the component
  if (isVisible === false) {
    return null;
  }

  return (
    <FormControl>
      <Select
        labelId="language-selector-label"
        id="language-selector"
        value={selectedLanguage}
        onChange={handleChange}
        sx={{
          "&> div": {
            display: "flex",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <Flag
              country={language.code.toUpperCase()}
              style={{ marginRight: "13px" }}
            />
            {language.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
