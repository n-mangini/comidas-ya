import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const buttonVariant = cva("rounded-xl px-6 py-6 flex items-center justify-center", {
    variants: {
        variant: {
            fulfilled: [
                "bg-primary-500 text-white",
                "active:bg-primary-800 active:text-primary-200", //on-press
                "disabled:bg-primary-100", //disabled
            ],
            outlined: [
                "bg-transparent text-primary-500",
                "border border-primary-500 ",
                "active:bg-primary-50 active:text-primary-800 active: border-primary-800",
                "disabled:border-primary-200 disabled:text-primary-200",
            ],
            ghost: [
                "bg-transparent text-primary-500",
                "active:bg-primary-50 active:text-primary-800",
                "disabled:text-primary-300 disabled:cursor-not-allowed",
            ],
        },
        state: {
            enabled: "",
            disabled: "disabled:opacity-50 cursor-not-allowed",
            longPress: "bg-opacity-80",
        },
        variantType: {
            primary: "bg-primary-500",
            secondary: "bg-secondary-500",
            tertiary: "bg-neutral-500",
        },
    },
    defaultVariants: {
        variant: "fulfilled",
        state: "enabled",
        variantType: "primary",
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    icon?: string;
    show_icon?: boolean;
    show_text?: boolean;
}

export default function Button({
                                   icon,
                                   children,
                                   variant,
                                   show_icon = true,
                                   show_text = true,
                                   className,
                                   ...props
                               }: ButtonProps) {
    return (
        <button className={buttonVariant({variant, className})} {...props}>
            {show_icon && icon && <img src={icon} alt="icon" className="mr-2"/>}
            {show_text && children}
        </button>
    );
}
