import React from 'react';
import Button from '../../components/common/Button';
import Dot from "../../components/common/Dot/Dot";
import {Icon} from "../../components/common/Icon";
import {ReactComponent as LeftArrow} from "../../assets/icons/left_arrow.svg"

export interface RecipeStepProps {
    title: string;
    chefName: string;
    imageUrl: string;
    stepTitle: string;
    stepDescription: string;
    currentStep: number;
    totalSteps: number;
    onBack: () => void;
    onNext: () => void;
}

const RecipeStep: React.FC<RecipeStepProps> = ({
                                                   title,
                                                   chefName,
                                                   imageUrl,
                                                   stepTitle,
                                                   stepDescription,
                                                   currentStep,
                                                   totalSteps,
                                                   onBack,
                                                   onNext
                                               }) => {
    return (
        <div className="h-screen flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto flex flex-col items-center space-y-[18px] px-4 py-4">

                {/* Header with Back Button and Title */}
                <div className="relative w-full flex items-center justify-center mb-2">
                    {currentStep > 0 && (
                        <div className="absolute left-0">
                            <Icon icon={LeftArrow}/>
                        </div>
                    )}

                    <div>
                        <h1 className="text-xl font-bold text-center w-full">{title}</h1>
                        <p className="text-gray-500 text-center">chef: {chefName}</p>
                    </div>
                </div>

                {/* Image Section */}
                <img src={imageUrl} alt={title} className="w-[363px] h-[220px] object-cover"/>

                {/* Step Indicator Dots */}
                <div className="flex justify-center space-x-1">
                    {Array.from({length: totalSteps}).map((_, index) => (
                        <Dot key={index} checked={index === currentStep} disabled={false}/>
                    ))}
                </div>

                {/* Step Title, Subtitle, and Description */}
                <div className="text-center">
                    <h2 className="text-lg font-bold">Paso {currentStep + 1}</h2>
                    <h3 className="text-base font-semibold text-black">{stepTitle}</h3>
                    <p className="text-black">{stepDescription}</p>
                </div>

            </div>

            {/* Fixed Button Container */}
            <div className="flex justify-center gap-3 py-4 bg-white shadow-md">
                {currentStep > 0 && (
                    <Button onClick={onBack} variant="fulfilled" variantType="primary">
                        Paso Anterior
                    </Button>
                )}
                <Button onClick={onNext} variant="fulfilled" variantType="primary">
                    Paso Siguiente
                </Button>
            </div>
        </div>
    );
};

export default RecipeStep;
