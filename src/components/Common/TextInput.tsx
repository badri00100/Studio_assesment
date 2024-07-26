import "./commonInput.css";

interface TextInputProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: any) => void;
  tabIndex: number;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  tabIndex,
}) => {
  return (
    <div className="common-input-container">
      <label className="common-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="common-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        tabIndex={tabIndex}
      />
    </div>
  );
};

export default TextInput;
