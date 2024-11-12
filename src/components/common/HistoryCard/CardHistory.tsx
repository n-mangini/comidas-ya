import React from 'react';
import './historyCard.css';
import './../../../styles/fonts.css';
export interface HistoryCardProps {
    title: string;
    quantity: number;
    description: string;
    imageUrl: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ title, quantity, description, imageUrl }) => {
    return (
        <div className="history-card">
            <img src={imageUrl} alt={title} className="history-image" />
            <div className="history-details ">
                <h2 className="history-title headerRegularH6">{title} x {quantity}</h2>

                <p className="history-description captionRegularC1">{description}</p>
            </div>
        </div>
    );
};

export default HistoryCard;