import React, {useState} from 'react';
import './stylesForSerchBar.css';
import './../../../styles/global.css';
import "./../../../styles/fonts.css";
import {Icon} from "../Icon";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

export interface SearchBarProps {
    labelText: string;
    placeholder?: string;
    helperText: string;
    hasError: boolean;
    isDisabled: boolean;
    showHelperText: boolean;
    showLabelText: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 labelText,
                                                 placeholder,
                                                 helperText,
                                                 hasError,
                                                 isDisabled,
                                                 showHelperText,
                                                 showLabelText
                                             }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={`search-bar  ${isDisabled ? 'disabled' : ''}`}>
            {showLabelText && <div className="bodySemiBold">{labelText}</div>}
            <div className={`search-input-container ${hasError ? 'error' : ''}`}>
                <Icon icon={SearchIcon} />
                <input
                    type="text"
                    id="search-input"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`search-input bodyRegularB1 ${isDisabled ? 'disabled' : ''}`}
                    disabled={isDisabled}
                />
            </div>
            {showHelperText &&
                <div className={`captionRegularC1  ${hasError ? 'errorHelperText' : ''}`}>{helperText}</div>}
        </div>
    );
};

export default SearchBar;