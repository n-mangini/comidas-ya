import React from 'react';
import '../../styles/fonts.css'

export interface FoodCategoryIconProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
}

const FoodCategoryIcon: React.FC<FoodCategoryIconProps> = ({icon: Icon, label}) => {
    return (
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg">
                <Icon className="w-8 h-8"/>
            </div>
            <span className="bodyMediumB1">{label}</span>
        </div>
    );
};

export default FoodCategoryIcon;
