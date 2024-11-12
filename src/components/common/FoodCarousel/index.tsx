import React from 'react';
import FoodCard from '../FoodCard/index';
import {FoodItem} from "../../../pages/Home/recommendedFoodItems";

interface FoodCarouselProps {
    foodItems: FoodItem[];
}

const FoodCarousel: React.FC<FoodCarouselProps> = ({foodItems}) => {
    return (
        <div className="overflow-x-auto"> {/* Scrollable container */}
            <div className="flex space-x-4 mb-1.5"> {/* Flex container for horizontal layout */}
                {foodItems.map((item, index) => (
                    <div className="w-80 flex-shrink-0">
                        <FoodCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            discount={item.discount || ""}
                            labels={item.labels}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCarousel;
