import React, { useState } from 'react';
import './stylesForSerchBar.css';
import './../../../styles/global.css';
import "./../../../styles/fonts.css";

export interface SearchBarProps {
    labelText: string;
    placeholder?: string;
    helperText: string;
    hasError: boolean;
    isDisabled: boolean;
    showHelperText: boolean;
    showLabelText: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ labelText, placeholder, helperText, hasError, isDisabled, showHelperText, showLabelText }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={`search-bar  ${isDisabled ? 'disabled' : ''}`}>
            {showLabelText && <div className="bodySemiBold">{labelText}</div>}
            <div className={`search-input-container ${hasError ? 'error' : ''}`}>
                <input
                    type="text"
                    id="search-input"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`search-input bodyRegularB1 ${isDisabled ? 'disabled' : ''}`}
                    disabled={isDisabled}
                />
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <path
                            d="M20.9167 21.875L14.3542 15.3125C13.8333 15.7292 13.2344 16.059 12.5573 16.3021C11.8802 16.5451 11.1597 16.6667 10.3958 16.6667C8.50347 16.6667 6.90191 16.0113 5.59115 14.7005C4.28038 13.3898 3.625 11.7882 3.625 9.89583C3.625 8.00347 4.28038 6.40191 5.59115 5.09115C6.90191 3.78038 8.50347 3.125 10.3958 3.125C12.2882 3.125 13.8898 3.78038 15.2005 5.09115C16.5113 6.40191 17.1667 8.00347 17.1667 9.89583C17.1667 10.6597 17.0451 11.3802 16.8021 12.0573C16.559 12.7344 16.2292 13.3333 15.8125 13.8542L22.375 20.4167L20.9167 21.875ZM10.3958 14.5833C11.6979 14.5833 12.8047 14.1276 13.7161 13.2161C14.6276 12.3047 15.0833 11.1979 15.0833 9.89583C15.0833 8.59375 14.6276 7.48698 13.7161 6.57552C12.8047 5.66406 11.6979 5.20833 10.3958 5.20833C9.09375 5.20833 7.98698 5.66406 7.07552 6.57552C6.16406 7.48698 5.70833 8.59375 5.70833 9.89583C5.70833 11.1979 6.16406 12.3047 7.07552 13.2161C7.98698 14.1276 9.09375 14.5833 10.3958 14.5833Z"
                            fill="#00120A"/>
                    </svg>
                </div>
            </div>
            {showHelperText && <div className={`captionRegularC1  ${hasError ? 'errorHelperText' : ''}`}>{helperText}</div>}
        </div>
    );
};

export default SearchBar;