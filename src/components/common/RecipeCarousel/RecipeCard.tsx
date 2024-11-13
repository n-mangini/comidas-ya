import React from 'react';
import Label from "../Label/Label";
import img from "../../../assets/recipe/chicken.svg";

export interface RecipeCardProps {
    title: string;
    labels: string[];
}
const styles = {
    textAlign: 'start',
}


const RecipeCard: React.FC<RecipeCardProps> = ({title, labels}) => {
    return (
        <div className="rounded-lg shadow-lg max-w-60 overflow-hidden bg-white">
            {/* Image with Overlay Text */}
            <div className="relative">
                <img src={img} alt="Food" className="w-full h-32 object-cover"/>

                {/* Full-width Gradient Background for Text */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent p-3">
                    <p className="text-white bodyMediumB1" style={styles}>{title}</p>
                </div>

            </div>

            {/* Labels Section */}
            <div className="flex gap-2 p-2 flex-wrap">
                {labels.map((label, index) => (
                    <Label key={index} text={label} variant="outlined" variantType="primary" size="small"/>
                ))}
            </div>
        </div>
    );
};

export default RecipeCard;
