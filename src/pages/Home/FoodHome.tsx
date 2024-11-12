import TopBar from "../../components/common/TopBar";
import SwitchBar from "../../components/common/SwitchBar";
import SearchBar from "../../components/common/SearchBar/SercherBar";
import React from "react";
import FoodCarousel from "../../components/common/FoodCarousel";
import BottomNavigationBar from "../../components/common/BottomNavigationBar";
import {Icon} from "../../components/common/Icon";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right_arrow.svg";

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="overflow-y-auto px-6 space-y-3.5 pt-4">
                <TopBar address="Mariano Acosta"/>
                <SwitchBar/>
                <SearchBar labelText="" placeholder="Buscar comidas" hasError={false} helperText={""} isDisabled={false}
                           showHelperText={false} showLabelText={false}/>

                <div className="flex items-center">
                    <p className="text-black">Categorias</p>
                    <Icon icon={RightArrowIcon}/>
                </div>

                <FoodCarousel/>

                <div className="flex items-center">
                    <p className="text-black">Recomendado</p>
                    <Icon icon={RightArrowIcon}/>
                </div>

                <FoodCarousel/>
            </div>
            <BottomNavigationBar/>
        </div>
    )
};

export default Home;