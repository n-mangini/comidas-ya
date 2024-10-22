import React from 'react';
import Button from "./components/common/Button/Button";

function App() {
    return (
        <div className="p-8">
            <Button variant="fulfilled" icon="/path/to/icon.svg" show_icon={false} show_text={true}>
                Fulfilled Button
            </Button>

            <Button variant="outlined" show_icon={false} show_text={true}>
                Outlined Button
            </Button>

            <Button variant="ghost" icon="/path/to/icon.svg" show_icon={false} show_text={true}>
                Icon Only Button
            </Button>
        </div>
    );
}

export default App;
