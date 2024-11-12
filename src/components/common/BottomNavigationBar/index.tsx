import React, { useState } from "react";
import {Icon} from "../Icon";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as DiscountIcon} from "../../../assets/icons/discounts.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/icons/orders.svg";

export interface BottomNavigationBarProps {
    defaultSelected?: "inicio" | "promociones" | "pedidos";
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ defaultSelected = "inicio" }) => {
    const [selected, setSelected] = useState(defaultSelected);

    const getButtonStyle = (tab: string) =>
        selected === tab
            ? "text-black font-semibold" // Active styles
            : "text-gray-500";

    return (
        <div className="flex justify-around bg-white shadow-md px-6 py-2 rounded-t-md">
            {/* Inicio */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("inicio")} mx-6`}
                onClick={() => setSelected("inicio")}
            >
                <Icon icon={HomeIcon} />
                <span className="text-sm">Inicio</span>
            </button>

            {/* Promociones */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("promociones")} mx-6`}
                onClick={() => setSelected("promociones")}
            >
                <Icon icon={DiscountIcon} />
                <span className="text-sm">Promociones</span>
            </button>

            {/* Pedidos */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("pedidos")} mx-6`}
                onClick={() => setSelected("pedidos")}
            >
                <Icon icon={OrdersIcon} />
                <span className="text-sm">Pedidos</span>
            </button>
        </div>
    );
};




export default BottomNavigationBar;
