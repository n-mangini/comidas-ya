import {ReactNode} from "react";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'fulfilled' | 'outlined' | 'ghost';
    onClick: () => void;
    icon?: string;
    disabled?: boolean;
    children: ReactNode; // Use children instead of text for more flexibility

}

//text: string
//use children: ReactNode instead?

export default function Button({
                                   size = 'medium',
                                   variant = 'fulfilled',
                                   onClick,
                                   icon,
                                   disabled = false,
                                   children,
                                   callback,
                               }: ButtonProps) {
    const sizeClass = size === 'small' ? 'btn-small' : size === 'large' ? 'btn-large' : 'btn-medium';
    const variantClass = variant === 'outlined' ? 'btn-outlined' : variant === 'ghost' ? 'btn-ghost' : 'btn-fulfilled';

    return (
        <button
            className={`btn ${sizeClass} ${variantClass}`}
            onClick={() => {
                onClick();
                if (callback) callback();
            }}
            disabled={disabled}
        >
            {icon && <img src={icon} alt="button icon" className="icon"/>} {}
            {children} {}
        </button>
    );
}
