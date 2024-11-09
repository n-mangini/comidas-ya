import React from 'react';
import Label from "../Label";
import img from "../../../assets/food/blank.svg"

export interface FoodCardProps {
    title: string;
    description: string;
    price: number;
    discount: string;
    labels: string[];
}

const FoodCard: React.FC<FoodCardProps> = ({ title, description, price, discount, labels }) => {
    return (
        <div className="rounded-lg shadow-lg max-w-xs overflow-hidden">
            <div className="relative">
                <img src={img} alt="Food" className="w-full h-36 object-cover"/>
                {discount && (
                    <Label text={discount} variant="fulfilled" variantType="secondary" size="medium"
                           className="absolute bottom-2 right-2"/>
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full p-3 gap-3">
                {/* Title, Description, and Price */}
                <div className="flex justify-between items-center w-full">
                    {/* Title and Description */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                    {/* Price */}
                    <div className="text-lg font-bold text-gray-900">${price.toFixed(2)}</div>
                </div>

                {/* Labels */}
                <div className="flex gap-3">
                    {labels.map((label, index) => (
                        <Label key={index} text={label} variant="fulfilled" variantType="primary" size="small"/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
