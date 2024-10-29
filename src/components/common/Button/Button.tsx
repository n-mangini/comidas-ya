import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const buttonVariant = cva("rounded-md px-1.5 py-1.5 flex items-center justify-center", {
    variants: {
        variant: {
            fulfilled: [
                "bg-primary-500 text-primary-50",
                "active:bg-primary-800 active:text-primary-200",
                "disabled:bg-primary-100 disabled:text-primary-200", // Disabled state styles
            ],
            outlined: [
                "border border-primary-500 text-primary-500",
                "active:border-primary-800 active:text-primary-800",
                "disabled:border-primary-200 disabled:text-primary-200",
            ],
            ghost: [
                "bg-transparent text-primary-500",
                "active:bg-primary-50 active:text-primary-800",
                "disabled:text-primary-200 disabled:cursor-not-allowed",
            ],
        },

/*        variantType: {
            primary: "bg-primary-500 border-primary-500 text-primary-500",
            secondary: "bg-secondary-500 border-secondary-500 text-secondary-500",
            tertiary: "bg-neutral-500 border-neutral-500 text-neutral-500",
        },*/
        state: {
            enabled: "",
            disabled: "disabled:opacity-50 cursor-not-allowed",
            longPress: "bg-opacity-80",
        },
    },
    defaultVariants: {
        variant: "fulfilled",
        state: "enabled",
        //variantType: "primary",
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    variant: 'fulfilled' | 'outlined' | 'ghost';
    //variantType: 'primary' | 'secondary';
    icon?: string;
    show_icon?: boolean;
    show_text?: boolean;
}

export default function Button({
                                   className,
                                   children,

                                   variant,
                                   //variantType,

                                   icon,
                                   show_icon = true,
                                   show_text = true,

                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={buttonVariant({
                variant,
                //variantType,
            })}
            {...props}
        >

            {show_icon && icon && <img src={icon} alt="icon" className="mr-2"/>}
            {show_text && children}

        </button>
    );
}
