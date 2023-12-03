import React, { useState } from "react";
import "./HospitalsSearchForm.css";

interface HospitalsFacilitiesFormProps {
  onSubmit: (formData: any) => void;
}

const HospitalsSearchForm: React.FC<HospitalsFacilitiesFormProps> = ({
  onSubmit,
}) => {
  const [formState, setFormState] = useState({
    service: "",
    proximity: "",
    postalCode: "",
    distance: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <div className="search-container">
      <h2 className="search-header">Search for Hospitals</h2>
      <form className="search-form" onSubmit={handleSubmit}>
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
            <option value="emergency">Emergency</option>
            <option value="cardiology">Cardiology</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ paddingRight: "67px" }} htmlFor="proximity">
            Proximity:
          </label>
          <select
            id="proximity"
            name="proximity"
            value={formState.proximity}
            onChange={handleChange}
          >
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ paddingRight: "47px" }} htmlFor="postalCode">
            Postal Code:
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleChange}
            placeholder="Enter postal code"
            pattern="[0-9]*" // This pattern can trigger the virtual keyboard
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default HospitalsSearchForm;
