import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const labelVariant = cva("inline-block rounded-md px-2 py-1 font-semibold", {
    variants: {
        variant: {
            fulfilled: "",
            outlined: "border",
            ghost: "",
        },
        variantType: {
            primary: "",
            secondary: "",
            tertiary: "",
        },
        size: {
            small: "text-xs",
            medium: "text-sm",
            large: "text-md",
        },
    },
    compoundVariants: [
        // Primary
        {
            variant: "fulfilled",
            variantType: "primary",
            class: "bg-primary-500 text-primary-50",
        },
        {
            variant: "outlined",
            variantType: "primary",
            class: "border-primary-500 text-primary-500",
        },
        {
            variant: "ghost",
            variantType: "primary",
            class: "text-primary-500",
        },

        // Secondary
        {
            variant: "fulfilled",
            variantType: "secondary",
            class: "bg-secondary-500 text-secondary-50",
        },
        {
            variant: "outlined",
            variantType: "secondary",
            class: "border-secondary-500 text-secondary-500",
        },
        {
            variant: "ghost",
            variantType: "secondary",
            class: "text-secondary-500",
        },

        // Tertiary
        {
            variant: "fulfilled",
            variantType: "tertiary",
            class: "bg-neutral-500 text-neutral-50",
        },
        {
            variant: "outlined",
            variantType: "tertiary",
            class: "border-neutral-500 text-neutral-500",
        },
        {
            variant: "ghost",
            variantType: "tertiary",
            class: "text-neutral-500",
        },
    ],
    defaultVariants: {
        variant: "fulfilled",
        variantType: "primary",
        size: "medium",
    },
});

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof labelVariant> {
    text?: string;
    variant?: 'fulfilled' | 'outlined' | 'ghost';
    variantType?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
}

export default function Label({text, variant, variantType, size, className, ...props}: LabelProps) {
    return (
        <span className={labelVariant({variant, variantType, size, className})} {...props}>
            {text}
        </span>
    );
}
