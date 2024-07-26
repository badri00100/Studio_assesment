import React from 'react';
import './button.css'; // Import custom CSS file

interface ButtonProps {
    onClick?: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button className="button" onClick={onClick} tabIndex={7}>
            {text}
        </button>
    );
};

export default Button;
