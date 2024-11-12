import React, {useState} from 'react';
import './unitsBar.css';
import './../../../styles/global.css';
import './../../../styles/fonts.css';

const UnitsBar: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } else setCount(0);
    }

    return (
        <div className="units-bar">
            <div className={"headerSemiBoldH6 title-unit-bar"}>Unidades</div>
            <div className={"count-container"}>
                <div className="decrement item-container symbols" onClick={decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                        <path d="M4.83307 11.0945V9.3877H18.3656V11.0945H4.83307Z" fill="white"/>
                    </svg>
                </div>
                <div className="count item-container headerRegularH3">{count}</div>
                <div className="increment item-container symbols" onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                        <path
                            d="M6.63273 7.09444H0.833069V5.3876H6.63273V0.26709H8.56595V5.3876H14.3656V7.09444H8.56595V12.2149H6.63273V7.09444Z"
                            fill="#FEFEFF"/>
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default UnitsBar;
