import React, { useState } from "react";
import { FaHome, FaTags, FaClipboardList } from "react-icons/fa"; // Importing icons from react-icons

interface BottomNavigationBarProps {
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
                <FaHome className="text-2xl" />
                <span className="text-sm">Inicio</span>
            </button>

            {/* Promociones */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("promociones")} mx-6`}
                onClick={() => setSelected("promociones")}
            >
                <FaTags className="text-2xl" />
                <span className="text-sm">Promociones</span>
            </button>

            {/* Pedidos */}
            <button
                className={`flex flex-col items-center ${getButtonStyle("pedidos")} mx-6`}
                onClick={() => setSelected("pedidos")}
            >
                <FaClipboardList className="text-2xl" />
                <span className="text-sm">Pedidos</span>
            </button>
        </div>
    );
};

export default BottomNavigationBar;
