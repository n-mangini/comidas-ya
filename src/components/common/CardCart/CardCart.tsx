import React from 'react';
import Counter from "./Counter";
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import './cardCart.css';
export interface CardCartProps {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
}

const CardCart: React.FC<CardCartProps> = ({ imageUrl, title, description, price }) => {
    return (
        <div className="food-card">
            <img src={imageUrl} alt={title} className="food-image"/>
            <div className="food-details">
                <h2 className="food-title headerRegularH6">{title}</h2>
                <p className="food-description captionRegularC1">{description}</p>
            </div>
            <div className={"counter-and-price"}>
                <Counter></Counter>
                <div className="food-price bodyMediumB1">$ {price.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default CardCart;