import React from "react";
import {ReactComponent as ProfileIcon} from "../../../assets/icons/profile.svg";
import {ReactComponent as ShoppingCartIcon} from "../../../assets/icons/shopping_cart.svg";
import {Icon} from "../Icon";

export interface TopBarProps {
    address: string;
}

const TopBar: React.FC<TopBarProps> = ({address}) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-md"
             style={{
                 boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Custom top-only shadow
             }}
        >
            {/* Profile Icon */}
            <Icon icon={ProfileIcon}/>

            {/* Address Text */}
            <span className="text-lg font-medium text-gray-900">{address}</span>

            {/* Shopping Cart Icon */}
            <Icon icon={ShoppingCartIcon}/>
        </div>
    );
};

export default TopBar;
