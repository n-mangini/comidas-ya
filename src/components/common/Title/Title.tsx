import React from 'react';
import './title.css';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="title-container">
            <div className="title-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <path
                        d="M6.06921 14.0625H25.0927V10.9375H6.06921L14.8192 2.1875L12.5927 0L0.0926514 12.5L12.5927 25L14.8192 22.8125L6.06921 14.0625Z"
                        fill="white"/>
                </svg>
            </div>
            <div className="headerSemiBoldH6">{text}</div>
        </div>
    );
};

export default Title;