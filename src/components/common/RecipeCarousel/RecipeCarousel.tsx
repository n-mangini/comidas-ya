import React from 'react';
import RecipeCard from './RecipeCard';
import { RecipeCardProps } from './RecipeCard';

export interface RecipeCarouselProps {
    recipes: RecipeCardProps[];
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({ recipes }) => {
    return (
        <div className="overflow-x-auto"> {/* Scrollable container */}
            <div className="flex space-x-4 mb-1.5"> {/* Flex container for horizontal layout */}
                {recipes.map((recipe, index) => (
                    <div className="w-60 flex-shrink-0" key={index}>
                        <RecipeCard
                            title={recipe.title}
                            labels={recipe.labels}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeCarousel;
