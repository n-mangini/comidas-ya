import "../../../styles/global.css";
import "./filter.css";
import "../../../styles/fonts.css";

export interface FilterProps {
    text: string;
}

const stylesForContainer = {
    display: "flex"
};

export const Filter: React.FC<FilterProps> = ({text}) => {
    return (
        <div style={stylesForContainer}>
            <div className={"filter"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M1.5 1L10.5 10" stroke="#30977C" strokeWidth="2"/>
                    <path d="M10.5 1L1.5 10" stroke="#30977C" strokeWidth="2"/>
                </svg>
                <div className={"BodyBoldB1"}>
                    {text}
                </div>
            </div>
        </div>
    );
};
