import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./HospitalsSearchForm.css";

const HospitalsSearchForm: React.FC = () => {
  const [formState, setFormState] = useState({
    service: "",
    proximity: "",
    postalCode: "",
    distance: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // onSubmit(formState);
  //   navigate("./SearchResult", {state: formState});
  // };

  const handleOnClick = (e: any) => {
    // e.preventDefault();
    // onSubmit(formState);
    navigate("./Search Results", { state: formState });
  };

  return (
    <div className="search-container">
      <h2 className="search-header">Search for Hospitals</h2>
      <form className="search-form">
        <div className="form-group">
          <label style={{ paddingRight: "85px" }} htmlFor="service">
            Service:
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
          >
            <option value="emergency">Family Physician</option>
            <option value="cardiology">Laboratories</option>
            <option value="cardiology">Medical Clinics</option>
            <option value="cardiology">Hospitals</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ paddingRight: "73px" }} htmlFor="proximity">
            Distance:
          </label>
          <select
            id="proximity"
            name="proximity"
            value={formState.proximity}
            onChange={handleChange}
          >
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
            <option value="15">Within 15 km</option>
            <option value="20">Within 20 km</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ paddingRight: "47px" }} htmlFor="postalCode">
            Postal Code:
          </label>
          <select
            id="postalCode"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleChange}
          >
            <option>T3N 0M2</option>
            <option>T3N 0M5</option>
            <option>T3N 0N5</option>
            <option>T3N 0N6</option>
            <option>T3N 0P6</option>
            <option>T3N 0P7</option>
            <option>T3N 0S3</option>
            <option>T3N 0S5</option>
          </select>
        </div>
        {/* <Link to={"./SearchResults"}> */}
        <Button
          variant="outlined"
          size="small"
          className="search-btn"
          style={{
            height: "100%",
            width: "110px",
            color: "white",
            borderColor: "#C61229",
            borderRadius: "14px",
            backgroundColor: "#C61229",
            fontSize: "16px",
            float: "right",
            marginRight: "75px",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "#C61229",
            },
          }}
          onClick={handleOnClick}
        >
          <div
            style={{
              paddingRight: "10px",
              fontWeight: "700",
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            Search
          </div>
          <SearchIcon style={{ color: "white" }} />
        </Button>
        {/* </Link> */}
        <p style={{ color: "rgb(215, 213, 213)" }}> {"to add bottom margin"}</p>
        <p style={{ color: "rgb(215, 213, 213)" }}> {"to add bottom margin"}</p>
      </form>
    </div>
  );
};

export default HospitalsSearchForm;
