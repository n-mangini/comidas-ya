import React from 'react';

const stylesForChildContainer = {
    display: 'flex',
    width: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0
};

const stylesForFatherContainer = {
    display: 'flex',
    width: '41px',
    height: '41px',
    padding: '8px 0',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
};

const OkayIcon = () => {
    return (
        <div style={stylesForFatherContainer}>
            <div style={stylesForChildContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                    <path
                        d="M8.44485 16.2793L2.51819 10.06L0.5 12.1629L8.44485 20.5L25.5 2.60291L23.496 0.5L8.44485 16.2793Z"
                        fill="white"/>
                </svg>
            </div>
        </div>

    );
};

export default OkayIcon;