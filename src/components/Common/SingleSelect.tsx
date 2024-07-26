import React, { useState } from "react";
import "./singleSelect.css";

interface Option {
  value: string;
  label: string;
}

interface SingleSelectProps {
  options: Option[];
  placeholder?: string;
  label: string;
  value?: string;
  onChange: (selectedValue: string) => void;
  tabIndex: number;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  placeholder,
  label,
  value,
  onChange,
  tabIndex,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || "");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="single-select-container">
      <label className="select-label">{label}</label>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="single-select"
        tabIndex={tabIndex}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SingleSelect;
