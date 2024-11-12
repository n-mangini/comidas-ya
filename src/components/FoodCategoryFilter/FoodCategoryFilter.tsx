import React, {useState} from 'react';
import FoodCategoryIcon from './FoodCategoryIcon';
import '../../styles/fonts.css'

import {ReactComponent as Image} from './assets/image.svg';
import {ReactComponent as Image1} from './assets/image1.svg';
import {ReactComponent as Image2} from './assets/image2.svg';
import {ReactComponent as Image3} from './assets/image3.svg';
import {ReactComponent as Image4} from './assets/image4.svg';
import {ReactComponent as Image5} from './assets/image5.svg';

const categories = [
    {icon: Image, label: 'Hamburger'},
    {icon: Image1, label: 'Carne'},
    {icon: Image2, label: 'Sushi'},
    {icon: Image3, label: 'Taco'},
    {icon: Image4, label: 'Empanada'},
    {icon: Image5, label: 'Helado'},
];

const FoodCategoryFilter: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 mb-1.5">
                {categories.map((category, index) => (
                    <div className="flex-shrink-0">
                        <FoodCategoryIcon
                            key={index}
                            icon={category.icon}
                            label={category.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCategoryFilter;
