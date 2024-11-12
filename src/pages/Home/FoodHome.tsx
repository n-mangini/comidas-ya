import TopBar from "../../components/common/TopBar";
import SwitchBar from "../../components/common/SwitchBar";
import SearchBar from "../../components/common/SearchBar/SercherBar";
import React from "react";
import FoodCarousel from "../../components/common/FoodCarousel";
import BottomNavigationBar from "../../components/common/BottomNavigationBar";

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col">
            <TopBar address="Mariano Acosta"/>
            <div className="overflow-y-auto px-6 space-y-3.5 pt-4">
                <SwitchBar/>
                <SearchBar labelText="" placeholder="Buscar comidas" hasError={false} helperText={""} isDisabled={false}
                           showHelperText={false} showLabelText={false}/>

                <FoodCarousel/>
                <FoodCarousel/>
            </div>
            <BottomNavigationBar/>
        </div>
    )
};

export default Home;