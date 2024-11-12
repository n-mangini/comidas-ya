import React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: string;
}

export const Icon: React.FC<IconProps> = ({icon: IconComponent, color}) => {
    return (
        <div>
            <IconComponent className={`fill-current ${color}`} />
        </div>
    );
};
