import React, {useState} from "react";
import {Icon} from "../Icon/Icon";
import {ReactComponent as HomeIcon} from "../../../assets/icons/home.svg";
import {ReactComponent as DiscountIcon} from "../../../assets/icons/discounts.svg";
import {ReactComponent as OrdersIcon} from "../../../assets/icons/orders.svg";
import '../../../styles/fonts.css';
import '../../../styles/global.css';
export interface BottomNavigationBarProps {
    defaultSelected?: "inicio" | "promociones" | "pedidos";
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({defaultSelected = "inicio"}) => {
    const [selected, setSelected] = useState(defaultSelected);

    const getButtonStyle = (tab: string) =>
        selected === tab
            ? "text-black font-semibold" // Active styles
            : "text-gray-500";

    return (
        <div className="flex justify-around bg-white px-12 py-4 rounded-t-md space-x-12 "
             style={{
                 boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)', // Custom top-only shadow
             }}
        >
            {/* Inicio */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("inicio")}`}
                onClick={() => setSelected("inicio")}
            >
                <Icon icon={HomeIcon} color={"text-white"}/>
                <span className="text-sm">Inicio</span>
            </button>

            {/* Promociones */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("promociones")}`}
                onClick={() => setSelected("promociones")}
            >
                <Icon icon={DiscountIcon}/>
                <span className="text-sm">Promociones</span>
            </button>

            {/* Pedidos */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("pedidos")}`}
                onClick={() => setSelected("pedidos")}
            >
                <Icon icon={OrdersIcon}/>
                <span className="text-sm">Pedidos</span>
            </button>
        </div>
    );
};


export default BottomNavigationBar;
