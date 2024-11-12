import FoodRecommended0 from '../../assets/food/recomendado/image.png';
import FoodRecommended1 from '../../assets/food/recomendado/image-1.png';
import FoodRecommended2 from '../../assets/food/recomendado/image-2.png';
import FoodRecommended3 from '../../assets/food/recomendado/image-3.png';
import FoodRecommended4 from '../../assets/food/recomendado/image-4.png';

import FoodPopular0 from '../../assets/food/popular/image.png';
import FoodPopular1 from '../../assets/food/popular/image-1.png';
import FoodPopular2 from '../../assets/food/popular/image-2.png';
import FoodPopular3 from '../../assets/food/popular/image-3.png';
import FoodPopular4 from '../../assets/food/popular/image-4.png';

export interface FoodItem {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    discount?: string;
    labels: string[];
}

export const recommendedFoodItems = [
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: FoodRecommended0,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Burger with Fries",
        description: "A classic, includes drink",
        price: 10.35,
        imageUrl: FoodRecommended1,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Pizza",
        description: "Pizza with pepperoni",
        price: 10.35,
        imageUrl: FoodRecommended2,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Pasta",
        description: "Pasta with marinara sauce",
        price: 10.35,
        imageUrl: FoodRecommended3,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Salad",
        description: "Fresh green salad",
        price: 10.35,
        imageUrl: FoodRecommended4,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
];

export const popularFoodItems = [
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: FoodPopular0,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: FoodPopular1,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: FoodPopular2,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: FoodPopular3,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    },
    {
        title: "Mini Sushi",
        description: "Multiple sabores únicos",
        price: 10.35,
        imageUrl: FoodPopular4,
        discount: "30% off",
        labels: ["label", "hola", "label"]
    }
];