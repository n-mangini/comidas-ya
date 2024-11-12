import React from 'react';
import './optionBarIcon.css';
import '../../../styles/global.css';
import '../../../styles/fonts.css';


export interface OptionBarIconProps {
    imageUrl: string;
    title: string;
}

const OptionBarIcon: React.FC<OptionBarIconProps> = ({ imageUrl, title }) => {
    return (
        <div className="option-bar-icon">
            <img src={imageUrl} alt={title} className="icon-image captionRegularC1" />
            <p className="icon-title">{title}</p>
        </div>
    );
};

export default OptionBarIcon;