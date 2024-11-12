import React from 'react';
import Label from "../common/Label/Label";

export interface FoodCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    discount: string;
    labels: string[];
}

const FoodCard: React.FC<FoodCardProps> = ({title, description, price, imageUrl, discount, labels}) => {
    return (
        <div className="rounded-lg shadow-lg max-w-xs overflow-hidden">
            <div className="relative">
                <img src={imageUrl} alt="Food" className="w-full h-36 object-cover"/>
                {discount && (
                    <Label text={discount} variant="fulfilled" variantType="secondary" size="medium"
                           className="absolute bottom-2 right-2"/>
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full p-3 gap-1">
                {/* Title, Description, and Price */}
                <div className="flex justify-between items-center w-full">
                    {/* Title and Description */}
                    <div className="flex flex-col w-4/5">
                        <h3 className="text-lg font-semibold break-words">{title}</h3>
                        <div className="light-c2 break-words">{description}</div>
                    </div>
                    {/* Price */}
                    <div className="semibold-s2">${price.toFixed(2)}</div>
                </div>

                {/* Labels */}
                <div className="flex gap-3 flex-wrap">
                    {labels.map((label, index) => (
                        <Label key={index} text={label} variant="fulfilled" variantType="primary" size="small"/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
