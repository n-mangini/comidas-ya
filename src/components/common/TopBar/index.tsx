import React from "react";
import {FaShoppingCart, FaUserCircle} from "react-icons/fa";

export interface TopBarProps {
    address: string;
}

const TopBar: React.FC<TopBarProps> = ({ address }) => {
    return (
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md">
            {/* Profile Icon */}
            <FaUserCircle className="text-2xl text-primary-500" />

            {/* Address Text */}
            <span className="text-lg font-medium text-gray-900">{address}</span>

            {/* Shopping Cart Icon */}
            <FaShoppingCart className="text-2xl text-primary-500" />
        </div>
    );
};

export default TopBar;
