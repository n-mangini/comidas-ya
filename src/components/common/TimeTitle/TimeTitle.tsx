import './timeTitle.css'
import './../../../styles/fonts.css'
import './../../../styles/global.css'

import React from 'react';

export interface TimeTitleProps {
    time: string;
}

const TimeTitle: React.FC<TimeTitleProps> = ({time}) => {
    return (
        <div className="time-title headerMediumH3">
            {time}
        </div>
    );
};

export default TimeTitle;
