import {ReactNode} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {Variant} from "@testing-library/react";

interface ButtonProps {
    icon?: string;
}

const buttonVariant = cva("rounded-xl px-4 py-2", {
    variants: {
        size: {
            small: "",
            medium: "",
            large: "",
        },
        variant: {
            fulfilled: [
                "",
                "",
                "",
                "",
                ""
            ],
            outlined: [
                "",
                "",
                "",
                "",
                "",
                "",
                "disabled:cursor-not-allowed"
            ],
            ghost: [
                "bg-transparent",
                "text-primary-500",
                "hover:bg-gray-100",
                "disabled:opacity-50",
                "disabled:cursor-not-allowed"
            ],
        },
    },
    defaultVariants: {
        size: "medium",
        variant: "fulfilled",
    },
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {

}

export default function Button({
                                   icon,
                                   children,
                                   className,
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={buttonVariant({className})}
            {...props}
        >
            {icon && <img src={icon} alt="button icon" className="mr-2"/>}
            {children}
        </button>
    );
}
