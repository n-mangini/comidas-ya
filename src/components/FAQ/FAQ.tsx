import React from 'react';
import './Slide.css';

interface SlideProps {
    title: string;
    content: string;
    isOpen: boolean;
}

const FAQ: React.FC<SlideProps> = ({title, content, isOpen}) => {
    return (
        <div className={`slide-container ${isOpen ? 'open' : ''}`}>
            <div className={"slide-bar"}>
                <div className="slide-title BodyBoldB1">
                    {title}
                </div>
                <div className="slide-icon">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                            <g clip-path="url(#clip0_823_2960)">
                                <path
                                    d="M17.2215 16.2609L12.4858 11.5256L7.75008 16.2609L6.29532 14.8031L12.4858 8.59968L18.6763 14.8031L17.2215 16.2609Z"
                                    fill="#174E43"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_823_2960">
                                    <rect x="24.8667" y="25.1421" width="24.7619" height="24.8136" rx="12.381"
                                          transform="rotate(-180 24.8667 25.1421)" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_823_2608)">
                                <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
                                      fill="#174E43"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_823_2608">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="slide-content bodyLightB1">
                    {content}
                </div>
            )}

        </div>
    );
};

export default FAQ;
