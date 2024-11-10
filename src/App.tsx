import React from 'react';
import Button from "./components/common/Button";
import SwitchBar from "./components/common/SwitchBar";
import TopBar from "./components/common/TopBar";
import './global.css';

function App() {
    return (
        <div className="p-8">
            <Button variant="fulfilled" variantType="primary" icon="/path/to/icon.svg" show_icon={false} show_text={true}>
                Fulfilled Button
            </Button>

            <Button variant="outlined" variantType="primary" show_icon={false} show_text={true}>
                Outlined Button
            </Button>

            <Button variant="ghost" variantType="primary" icon="" show_icon={false} show_text={true}>
                Icon Only Button
            </Button>

            <Button variant="fulfilled" variantType="secondary" icon="/path/to/icon.svg" show_icon={false} show_text={true}>
                Fulfilled Button
            </Button>

            <Button variant="outlined" variantType="secondary" show_icon={false} show_text={true}>
                Outlined Button
            </Button>

            <Button variant="ghost" variantType="secondary" icon="" show_icon={false} show_text={true}>
                Icon Only Button
            </Button>

            <SwitchBar />
            <TopBar  address={"Mariano Acosta"}/>
        </div>
    );
}

export default App;
