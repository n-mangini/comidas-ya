import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const buttonVariant = cva("rounded-md px-1.5 py-1.5 flex items-center justify-center", {
    variants: {
        variant: {
            fulfilled: "",
            outlined: "",
            ghost: "bg-transparent",
        },
        variantType: {
            primary: "",
            secondary: "",
            tertiary: "",
        },
        state: {
            enabled: "",
            disabled: "cursor-not-allowed",
            longPress: "",
        },
    },
    compoundVariants: [
        //Primary
        {
            variant: "fulfilled",
            variantType: "primary",
            class: [
                "bg-primary-500 text-primary-50",
                "active:bg-primary-800 active:text-primary-200",
                "disabled:bg-primary-100 disabled:text-primary-200"
            ],
        },
        {
            variant: "outlined",
            variantType: "primary",
            class: [
                "border border-primary-500 text-primary-500",
                "active:border-primary-800 active:text-primary-800",
                "disabled:border-primary-200 disabled:text-primary-200",
            ],
        },
        {
            variant: "ghost",
            variantType: "primary",
            class: [
                "text-primary-500",
                "active:bg-primary-50 active:text-primary-800",
                "disabled:text-primary-200 disabled:cursor-not-allowed",
            ],
        },

        //Secondary
        {
            variant: "fulfilled",
            variantType: "secondary",
            class: [
                "bg-secondary-500 text-secondary-50",
                "active:bg-secondary-800 active:text-secondary-200",
                "disabled:bg-secondary-100 disabled:text-secondary-200",
            ],
        },
        {
            variant: "outlined",
            variantType: "secondary",
            class: [
                "border border-secondary-500 text-secondary-500",
                "active:border-secondary-800 active:text-secondary-800",
                "disabled:border-secondary-200 disabled:text-secondary-200",
            ],
        },
        {
            variant: "ghost",
            variantType: "secondary",
            class: [
                "text-secondary-500",
                "active:bg-secondary-50 active:text-secondary-800",
                "disabled:text-secondary-200 disabled:cursor-not-allowed",
            ],
        },
    ],

    defaultVariants: {
        variant: "fulfilled",
        variantType: "primary",
        state: "enabled",
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    variant: 'fulfilled' | 'outlined' | 'ghost';
    variantType: 'primary' | 'secondary';
    icon?: string;
    show_icon?: boolean;
    show_text?: boolean;
}

export default function Button({
                                   className,
                                   children,

                                   variant,
                                   variantType,

                                   icon,
                                   show_icon = true,
                                   show_text = true,

                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={buttonVariant({
                variant,
                variantType,
            })}
            {...props}
        >

            {show_icon && icon && <img src={icon} alt="icon" className="mr-2"/>}
            {show_text && children}

        </button>
    );
}
