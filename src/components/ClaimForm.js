import React, { useState } from "react";
import "./ClaimForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1, faMapMarkerAlt, faLanguage, faPlus, faFileAlt, faFileContract } from "@fortawesome/free-solid-svg-icons";
import UploadCard from "./UploadCard"; // Import UploadCard component

function ClaimForm() {
  const [contractValue, setContractValue] = useState("");
  const [claimValue, setClaimValue] = useState("");
  const [contractCurrency, setContractCurrency] = useState("USD");
  const [claimCurrency, setClaimCurrency] = useState("USD");
  const [place, setPlace] = useState("");
  const [language, setLanguage] = useState("");
  const [isPlaceForProceeding, setIsPlaceForProceeding] = useState(null);
  const [isLanguageForProceeding, setIsLanguageForProceeding] = useState(null);
  const [isPlaceValid, setIsPlaceValid] = useState(true);
  const [isLanguageValid, setIsLanguageValid] = useState(true);
  const [isContractValueValid, setIsContractValueValid] = useState(true);
  const [isClaimValueValid, setIsClaimValueValid] = useState(true);

  const [fileInputs, setFileInputs] = useState([""]);
  const [fileErrors, setFileErrors] = useState({});

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
    "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana"
  ];

  const languages = [
    "Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati",
    "Malayalam", "Kannada", "Odia", "Punjabi", "Assamese", "Maithili", "Sanskrit"
  ];

  const handleContractValueChange = (e) => {
    setContractValue(e.target.value);
    setIsContractValueValid(e.target.value.trim() !== "");
  };

  const handleClaimValueChange = (e) => {
    setClaimValue(e.target.value);
    setIsClaimValueValid(e.target.value.trim() !== "");
  };

  const handleContractCurrencyChange = (e) => setContractCurrency(e.target.value);
  const handleClaimCurrencyChange = (e) => setClaimCurrency(e.target.value);

  const handlePlaceChange = (e) => {
    const value = e.target.value;
    setPlace(value);
    setIsPlaceValid(indianCities.includes(value));
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage(value);
    setIsLanguageValid(languages.includes(value));
  };

  const handlePlaceProceedingChange = (e) => setIsPlaceForProceeding(e.target.value);
  const handleLanguageProceedingChange = (e) => setIsLanguageForProceeding(e.target.value);

  const handleAddFileInput = () => {
    setFileInputs([...fileInputs, ""]);
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const updatedFiles = [...fileInputs];
    const updatedErrors = { ...fileErrors };

    if (file) {
      if (file.type !== "application/pdf") {
        updatedErrors[index] = "File must be a PDF.";
      } else if (file.size > 2 * 1024 * 1024) {
        updatedErrors[index] = "File size must be less than 2MB.";
      } else {
        updatedErrors[index] = "";
        updatedFiles[index] = file;
      }
    } else {
      updatedErrors[index] = "Please upload a valid file.";
    }

    setFileInputs(updatedFiles);
    setFileErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(fileErrors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fix the file upload errors before submitting.");
    } else {
      alert("Form submitted successfully!");
      console.log("Uploaded Files:", fileInputs);
    }
  };

  return (
    <div className="claim-form">
      <h2>File your Claim.</h2>
      
      <div className="blue-line"></div>
      <form onSubmit={handleSubmit}>
        <div className="fields-container">
          {/* Claim Value Section */}
          <div className="field claim-value">
            <label>
              <FontAwesomeIcon icon={faMoneyBill1} size="lg" /> Claim Value
            </label>
            <div className="claim-value-container">
              <div className="field">
                <label>
                <p style={{ color: '#181717ac', fontSize: '14px', fontWeight: 'bold' }}>Contract Value</p>
                </label>
                <input
                  type="number"
                  placeholder="10,00,00 USD"
                  value={contractValue}
                  onChange={handleContractValueChange}
                  required
                />
                <select value={contractCurrency} onChange={handleContractCurrencyChange} required>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                </select>
                {!isContractValueValid && <span className="error-message">Contract value is required.</span>}
              </div>

              <div className="field">
              <label><p style={{ color: '#181717ac', fontSize: '14px', fontWeight: 'bold' }}>Contract Value</p>
              </label>
                <input
                  type="number"
                  placeholder="15,00,00 USD"
                  value={claimValue}
                  onChange={handleClaimValueChange}
                  required
                />
                <select value={claimCurrency} onChange={handleClaimCurrencyChange} required>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                </select>
                {!isClaimValueValid && <span className="error-message">Claim value is required.</span>}
                <p style={{ color: 'red', fontSize: '12px' }}>150% of Contract Value</p>
              </div>
            </div>
          </div>

          {/* Place Section */}
          <div className="field place">
            <label>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> Place
            </label>
            <select value={place} onChange={handlePlaceChange} required>
              <option value="">Select a valid city in India</option>
              {indianCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {!isPlaceValid && place && (
              <span className="error-message">Please select a valid city in India.</span>
            )}
            <div className="place-question">
              <label>
              <p style={{ color: '#181717ac', fontSize: '14px', fontWeight: 'bold' }}>Is this place for the proceeding the one mentioned in the agreement?</p>
                </label>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    name="placeProceeding"
                    value="yes"
                    checked={isPlaceForProceeding === "yes"}
                    onChange={handlePlaceProceedingChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="placeProceeding"
                    value="no"
                    checked={isPlaceForProceeding === "no"}
                    onChange={handlePlaceProceedingChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div className="field language">
            <label>
              <FontAwesomeIcon icon={faLanguage} size="lg" /> Language
            </label>
            <select value={language} onChange={handleLanguageChange} required>
              <option value="">Select a valid language</option>
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            {!isLanguageValid && language && (
              <span className="error-message">Please select a valid language.</span>
            )}
            <div className="language-question">
              <label>
              <p style={{ color: '#181717ac', fontSize: '14px', fontWeight: 'bold' }}> Is the language for the proceedings the one mentioned in the agreement?</p>

                
               </label>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    name="languageProceeding"
                    value="yes"
                    checked={isLanguageForProceeding === "yes"}
                    onChange={handleLanguageProceedingChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="languageProceeding"
                    value="no"
                    checked={isLanguageForProceeding === "no"}
                    onChange={handleLanguageProceedingChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Add the black line here */}
        <div className="black-line"></div>

        {/* File Upload Section */}
        <div className="inline-fields">
          <label>
            <FontAwesomeIcon icon={faFileAlt} size="lg" /> Statement
            <UploadCard title="Upload a Pdf" onFileChange={(file) => handleFileChange(0, { target: { files: [file] } })} />
          </label>

          <label>
  <FontAwesomeIcon icon={faFileContract} size="lg" /> Agreement under Disputes
  <div className="inline-upload-cards">
    <UploadCard title="Upload the contract" onFileChange={(file) => handleFileChange(1, { target: { files: [file] } })} />
    <UploadCard title="Arbitration Agreement" onFileChange={(file) => handleFileChange(2, { target: { files: [file] } })} />
  </div>
</label>

          <label>
          
            <FontAwesomeIcon icon={faPlus} size="lg" /> Additional Documentation
            <div className="inline-upload-cards">
            {fileInputs.map((file, index) => (
              <UploadCard key={index} title="Upload the Contract" onFileChange={(file) => handleFileChange(index, { target: { files: [file] } })} />
            ))}
            <button type="button" className="add-file-button" onClick={handleAddFileInput}>
              <FontAwesomeIcon icon={faPlus} /> Add File
            </button></div>
          </label>
        </div>

         <button type="submit">Submit</button>
       </form> 
    </div>
  );
}

export default ClaimForm;
