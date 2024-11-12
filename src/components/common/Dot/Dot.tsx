import React from 'react';
import './CheckBoxStyles.css';
import './uncheckedStyles.css';
import '../../../styles/global.css';
import './disabled.css';
import './secundary.css';

export interface DotProps {
    checked: boolean;
    disabled: boolean;
}

const Dot: React.FC<DotProps> = ({checked, disabled}) => {

    return (
        <div className={`box ${disabled ? "disabled" : ""}`}>
            {checked ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <ellipse cx="6.75" cy="7.25" rx="6.5" ry="6.5" transform="rotate(-90 6.75 7.25)"
                             fill="#30977C"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                        d="M6.75 1.75C9.78757 1.75 12.25 4.21243 12.25 7.25C12.25 10.2876 9.78757 12.75 6.75 12.75C3.71243 12.75 1.25 10.2876 1.25 7.25C1.25 4.21243 3.71243 1.75 6.75 1.75Z"
                        stroke="#30977C" stroke-width="2"/>
                </svg>
            )}
        </div>
    );
};

export default Dot;
