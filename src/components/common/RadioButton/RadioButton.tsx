import React from 'react';
import './CheckBoxStyles.css';
import './uncheckedStyles.css';
import './../../../global.css';
import './disabled.css';
import './secundary.css';

export interface RadioButtonProps {
    checked: boolean;
    disabled: boolean;
    secondary: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, disabled, secondary }) => {
    if (secondary) {
        return (
            <div className={`box ${disabled ? "" : "disabled"}`}>
                {checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <circle cx="13" cy="13.5" r="12" fill="white" stroke="#0C8CE9" stroke-width="2"/>
                        <circle cx="13" cy="13.5" r="8" fill="#0C8CE9"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <circle cx="13" cy="13.5" r="12" fill="white" stroke="#0C8CE9" stroke-width="2"/>
                    </svg>
                )}
            </div>
        );
    } else {
        return (
            <div className={`box ${disabled ? "" : "disabled"}`}>
                {checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <circle cx="13" cy="13.5" r="12" fill="white" stroke="#30977C" stroke-width="2"/>
                        <circle cx="13" cy="13.5" r="8" fill="#30977C"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <circle cx="13" cy="13.5" r="12" fill="white" stroke="#30977C" stroke-width="2"/>
                    </svg>
                )}
            </div>
        );
    }
};

export default RadioButton;