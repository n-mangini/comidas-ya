import TopBar from "../../components/common/TopBar/TopBar";
import SwitchBar from "../../components/common/SwitchBar/SwitchBar";
import SearchBar from "../../components/common/SearchBar/InputField";
import React from "react";
import FoodCarousel from "../../components/FoodCarousel/FoodCarousel";
import BottomNavigationBar from "../../components/common/BottomNavigationBar/BottomBar";
import {Icon} from "../../components/common/Icon/Icon";
import {ReactComponent as RightArrowIcon} from "../../assets/icons/right_arrow.svg";
import {popularFoodItems, recommendedFoodItems} from "./recommendedFoodItems";
import FoodCategoryFilter from "../../components/FoodCategoryFilter/FoodCategoryFilter";

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

                <FoodCategoryFilter/>

                <div className="flex items-center">
                    <p className="text-black">Recomendado</p>
                    <Icon icon={RightArrowIcon}/>
                </div>

                <FoodCarousel foodItems={recommendedFoodItems}/>

                <div className="flex items-center">
                    <p className="text-black">Recomendado</p>
                    <Icon icon={RightArrowIcon}/>
                </div>

                <FoodCarousel foodItems={popularFoodItems}/>
            </div>
            <BottomNavigationBar/>
        </div>
    )
};

export default Home;
