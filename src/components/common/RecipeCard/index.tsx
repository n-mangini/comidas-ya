import React from 'react';
import Label from "../Label";
import img from "../../../assets/recipe/chicken.svg";

export interface RecipeCardProps {
    title: string;
    labels: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, labels }) => {
    return (
        <div className="rounded-lg shadow-lg max-w-60 overflow-hidden bg-white">
            {/* Image with Overlay Text */}
            <div className="relative">
                <img src={img} alt="Food" className="w-full h-32 object-cover"/>

                {/* Full-width Gradient Background for Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent p-3">
                    <p className="text-white text-lg font-medium">{title}</p>
                </div>

            </div>

            {/* Labels Section */}
            <div className="flex gap-3 p-3">
                {labels.map((label, index) => (
                    <Label key={index} text={label} variant="outlined" variantType="primary" size="small"/>
                ))}
            </div>
        </div>
    );
};

export default RecipeCard;
