import React from 'react';
import './slideToPay.css';
import SlideToPayIcon from "./SlideToPayIcon";
import OkayIcon from "./OkayIcon";

export interface SlideToPayProps {
    showSlideIcon: boolean;
    showOkayIcon: boolean;
    isAError: boolean;
    moneyToPay: number;
}

const SlideToPay: React.FC<SlideToPayProps> = ({ showSlideIcon, showOkayIcon, isAError, moneyToPay }) => {

    if (isAError){
        return(
            <div className={"isAError slide-to-pay BodyBoldB1"}>Hubo un problema</div>
        )
    }


    return (
        <div className={`slide-to-pay BodyBoldB1`}>
            {showSlideIcon && (
                <div className={"container"}>
                    <SlideToPayIcon></SlideToPayIcon>
                    <div className="">{"Desliza para pagar | $ " + moneyToPay.toFixed(2)}</div>
                </div>
            )}


            {showOkayIcon && (
                <div className={"container"}>
                    <div>Confirmado</div>
                    <OkayIcon />

                </div>

            )}
        </div>
    );
};

export default SlideToPay;