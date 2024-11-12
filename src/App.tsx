import React from 'react';
import Button from "./components/common/Button";
import SwitchBar from "./components/common/SwitchBar";
import TopBar from "./components/common/TopBar";
import './styles/global.css';
import {ReactComponent as shopping_cart} from "./assets/icons/shopping_cart.svg";
import {Icon} from "./components/common/Icon";

function App() {
    return (
        <div className="p-8">
            <Button variant="fulfilled" variantType="primary" icon={shopping_cart} show_icon={false} show_text={true}>
                Fulfilled Button
            </Button>

            <Button variant="outlined" variantType="primary" show_icon={false} show_text={true}>
                Outlined Button
            </Button>

            <Button variant="ghost" variantType="primary" icon={shopping_cart} show_icon={false} show_text={true}>
                Icon Only Button
            </Button>

            <Button variant="fulfilled" variantType="secondary" icon={shopping_cart} show_icon={false} show_text={true}>
                Fulfilled Button
            </Button>

            <Button variant="outlined" variantType="secondary" show_icon={false} show_text={true}>
                Outlined Button
            </Button>

            <Button variant="ghost" variantType="secondary" icon_color="text-black" icon={shopping_cart} show_icon={true} show_text={true}>
                Icon Only Button
            </Button>

            <SwitchBar/>
            <TopBar address={"Mariano Acosta"}/>
            <Icon icon={shopping_cart} color="text-primary-500"/>
        </div>
    );
}

export default App;
