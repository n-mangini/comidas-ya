import React, { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";

const switchVariant = cva("rounded-md px-1.5 py-1.5 flex items-center justify-center transition-all", {
    variants: {
        selected: {
            true: "bg-primary-500 text-primary-50 shadow-md",
            false: "bg-primary-50 text-primary-500",
        },
    },
    defaultVariants: {
        selected: false,
    },
});

export interface SwitchButtonProps extends VariantProps<typeof switchVariant> {
    onClick: () => void;
    label: string;
}

// The comidas or recetas button
const SwitchButton: React.FC<SwitchButtonProps> = ({ onClick, label, selected }) => (
    <button className={`${switchVariant({ selected })} flex-grow`} onClick={onClick}>
        {label}
    </button>
);

interface SwitchBarProps {
    selection?: "comidas" | "recetas";
}

// The main component that holds the comidas and recetas buttons
const SwitchBar: React.FC<SwitchBarProps> = ({ selection = "comidas" }) => {
    const [activeTab, setActiveTab] = useState<"comidas" | "recetas">(selection);

    // Sync state if the selection prop changes
    useEffect(() => {
        setActiveTab(selection);
    }, [selection]);

    return (
        <div className="flex border border-primary-500 rounded-md overflow-hidden shadow-lg h-10">
            <SwitchButton
                label="Comidas"
                selected={activeTab === "comidas"}
                onClick={() => setActiveTab("comidas")}
            />
            <SwitchButton
                label="Recetas"
                selected={activeTab === "recetas"}
                onClick={() => setActiveTab("recetas")}
            />
        </div>
    );
};

export default SwitchBar;
