import React from 'react';
import Button from "./components/common/Button";
import SwitchBar from "./components/common/SwitchBar";
import TopBar from "./components/common/TopBar";
import {ReactComponent as shopping_cart} from "./assets/icons/shopping_cart.svg";
import {Icon} from "./components/common/Icon";
import './styles/global.css';
import FoodHome from "./pages/FoodHome/FoodHome";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
    return (
       /* <FoodHome/>*/
        <RecipePage/>
    );
}

export default App;
