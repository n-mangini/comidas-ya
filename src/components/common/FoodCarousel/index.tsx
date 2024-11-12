import React from 'react';
import FoodCard from '../FoodCard/index';

const FoodCarousel: React.FC = () => {
    const foodItems = [
        {
            title: "Hamburguesa",
            description: "Hamburguesa con queso",
            price: 300,
            imageUrl: "",
            discount: "",
            labels: ["carne", "queso"]
        },
        {
            title: "Pizza",
            description: "Pizza con pepperoni",
            price: 400,
            imageUrl: "",
            discount: "",
            labels: ["pepperoni", "queso"]
        },
        {
            title: "Sushi",
            description: "Sushi de salmón",
            price: 500,
            imageUrl: "",
            discount: "",
            labels: ["pescado", "arroz"]
        },
        {
            title: "Tacos",
            description: "Tacos de carne",
            price: 200,
            imageUrl: "",
            discount: "",
            labels: ["carne", "tortilla"]
        },
        {
            title: "Ensalada",
            description: "Ensalada de pollo",
            price: 150,
            imageUrl: "",
            discount: "",
            labels: ["pollo", "verduras"]
        },
    ];

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
                            discount={item.discount}
                            labels={item.labels}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCarousel;
