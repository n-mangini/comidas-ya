import React from 'react';
import Button from "./components/common/Button";
import SwitchBar from "./components/common/SwitchBar";
import TopBar from "./components/common/TopBar";
import './styles/global.css';
import {ReactComponent as shopping_cart} from "./assets/icons/shopping_cart.svg";
import {Icon} from "./components/common/Icon";
import FoodHome from "./pages/Home/FoodHome/FoodHome";

function App() {
    return (
        <FoodHome/>
    );
}

export default App;
