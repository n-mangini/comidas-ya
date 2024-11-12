import React from 'react';
import './CheckBoxStyles.css';
import './uncheckedStyles.css';
import '../../../styles/global.css';
import './disabled.css';
import './secundary.css';

export interface CheckBoxProps {
    checked: boolean;
    disabled: boolean;
    secondary: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({checked, disabled, secondary}) => {
    if (secondary) {
        return (
            <div className={`box ${disabled ? "" : "disabled"}`}>
                {checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <rect x="0.5" width="25" height="25" rx="6" fill="#0C8CE9"/>
                        <path
                            d="M10.5821 16.1373C10.1916 16.5275 9.55866 16.5274 9.16827 16.137L6.2359 13.2046C5.84635 12.8151 5.21512 12.8139 4.82419 13.2021L4.76424 13.2616C4.37136 13.6518 4.37023 14.2868 4.76173 14.6783L9.16793 19.0845C9.55846 19.4751 10.1916 19.4751 10.5821 19.0845L21.6679 7.99876C22.0585 7.60824 22.0585 6.97507 21.6679 6.58455L21.6131 6.52968C21.2227 6.13929 20.5898 6.13914 20.1992 6.52935L10.5821 16.1373Z"
                            fill="#F0F7FF"
                        />
                    </svg>
                ) : (
                    <label>
                        <div className={`unchecked secondary`}></div>
                    </label>
                )}
            </div>
        );
    } else {
        return (
            <div className={`box ${disabled ? "" : "disabled"}`}>
                {checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <rect x="0.5" width="25" height="25" rx="6" fill="#30977C"/>
                        <path
                            d="M10.582 16.1373C10.1914 16.5275 9.55854 16.5274 9.16815 16.137L6.23578 13.2046C5.84623 12.8151 5.21499 12.8139 4.82407 13.2021L4.76412 13.2616C4.37123 13.6518 4.37011 14.2868 4.76161 14.6783L9.16781 19.0845C9.55834 19.4751 10.1915 19.4751 10.582 19.0845L21.6678 7.99876C22.0583 7.60824 22.0583 6.97507 21.6678 6.58455L21.6129 6.52968C21.2225 6.13929 20.5896 6.13914 20.1991 6.52935L10.582 16.1373Z"
                            fill="#EFFAF6"
                        />
                    </svg>
                ) : (
                    <label>
                        <div className={`unchecked`}></div>
                    </label>
                )}
            </div>
        );
    }
};

export default CheckBox;
