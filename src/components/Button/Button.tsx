import {ReactNode} from "react";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large'
    variant?: 'fulfilled' | 'outlined' | 'ghost'
    onClick: () => void
    icon?: string
    disabled?: boolean
    //text: string
    callback: () => void
}

//use children: ReactNode instead?

export default function Button({size, variant, text, callbac}) {
    return (<button className={} onClick={onClick}>{}</button>)
}
