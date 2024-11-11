import React, {useState} from 'react';
import './ListItemFood.css';
import Checkbox from "../CheckBox/Checkbox";
import './../../../styles/fonts.css'
import './../../../styles/global.css'

export interface ListItemFoodProps {
    imageUrl: string;
    name: string;
    price: number;
}

const ListItemFood: React.FC<ListItemFoodProps> = ({ imageUrl, name, price }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div onClick={handleCheckboxClick}>
            <div className="list-item-food">
                <img src={imageUrl} alt={name} className="food-image"/>
                <div className="food-name headerRegularH5">{name}</div>
                <div className="food-price bodyMediumB1">$ {price.toFixed(2)}</div>


                <Checkbox checked={isChecked} disabled={true} secondary={false}/>


            </div>
        </div>
    );
};

export default ListItemFood;