import React from "react";
import {ReactComponent as ProfileIcon} from "../../../assets/icons/profile.svg";
import {ReactComponent as ShoppingCartIcon} from "../../../assets/icons/shopping_cart.svg";
import {Icon} from "../Icon/Icon";
import '../../../styles/fonts.css'

export interface TopBarProps {
    address: string;
}

const TopBar: React.FC<TopBarProps> = ({address}) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-md h-12">
            {/* Profile Icon */}
            <Icon icon={ProfileIcon}/>

            {/* Address Text */}
            <span className="bodyRegularB1">{address}</span>

            {/* Shopping Cart Icon */}
            <Icon icon={ShoppingCartIcon}/>
        </div>
    );
};

export default TopBar;
