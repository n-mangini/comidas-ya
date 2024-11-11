import React from 'react';

const stylesForFatherContainer = {
    display: 'flex',
    padding: '8px 0',
    justifyContent: 'center',
    alignItems: 'center'
};

const stylesForChildContainer = {
    display: 'flex',
    width: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0
};


const SlideToPayIcon = () => {
    return (
        <div style={stylesForChildContainer}>
            <div style={stylesForFatherContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="27" viewBox="0 0 18 27" fill="none">
                    <path
                        d="M3.49996 0.5L0.209961 3.555L10.8966 13.5L0.209961 23.445L3.49996 26.5L17.5 13.5L3.49996 0.5Z"
                        fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="27" viewBox="0 0 18 27" fill="none">
                    <path
                        d="M3.49996 0.5L0.209961 3.555L10.8966 13.5L0.209961 23.445L3.49996 26.5L17.5 13.5L3.49996 0.5Z"
                        fill="white"/>
                </svg>
            </div>
        </div>

    );
};

export default SlideToPayIcon;