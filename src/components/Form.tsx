import React, { useState } from "react";
import "./Form.css";
import TextInput from "./Common/TextInput";
import SingleSelect from "./Common/SingleSelect";
import Button from "./Common/Button";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    experience: "",
    whereDidYouHear: "",
  });

  // Options for SingleSelect component
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  // Event handler for input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Event handler for SingleSelect change
  const handleSelectChange = (selectedValue: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: selectedValue,
    }));
  };

  // Event handler for form submission
  const handleSubmit = () => {
    // Log the form data (you can send it to backend or perform any other action here)
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="container sectionLeft" id="contact">
        {/* for side bar */}
        <div key={4} className="sectionLeft"></div>
        <div className="inner-container">
          <div className="collabrate-card">
            <div className="form-header-main">
              <h4>
                COLLABORATE <span> WITH U</span>
              </h4>
            </div>
            <p className="mt-30 sub-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-30 sub-header">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
          <div className="form-card">
            <div className="form-subcard">
              <div className="subcard">
                <TextInput
                  label="NAME"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  tabIndex={1}
                />
                <TextInput
                  label="PHONE NUMBER"
                  id="phoneNumber"
                  placeholder="Phone"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  tabIndex={3}
                />
                <SingleSelect
                  options={options}
                  placeholder="Select"
                  value={formData.experience}
                  onChange={handleSelectChange}
                  label="EXPERIENCE"
                  tabIndex={5}
                />
              </div>
              <div className="subcard">
                <TextInput
                  label="SURNAME"
                  id="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  tabIndex={2}
                />
                <TextInput
                  label="EMAIL ADDRESS"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  tabIndex={4}
                />
                <SingleSelect
                  options={options}
                  placeholder="Select"
                  value={formData.whereDidYouHear}
                  onChange={(value) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      whereDidYouHear: value,
                    }))
                  }
                  label="WHERE DO YOU HEAR ABOUT US?"
                  tabIndex={6}
                />
              </div>
            </div>
            <div className="button-container">
              <Button text="SEND" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
