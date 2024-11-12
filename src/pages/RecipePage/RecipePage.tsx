import React, {useState} from 'react';
import RecipeStep from './RecipeStep';
import {recipeSteps} from './recipeSteps';

const RecipePage: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        if (currentStep < recipeSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="overflow-y-auto px-6 space-y-3.5 pt-4">
            <RecipeStep
                title="Pollo Asado"
                chefName="John Doe"
                imageUrl={recipeSteps[currentStep].imageUrl}
                stepTitle={recipeSteps[currentStep].title}
                stepDescription={recipeSteps[currentStep].description}
                currentStep={currentStep}
                totalSteps={recipeSteps.length}
                onBack={handleBack}
                onNext={handleNextStep}
            />
        </div>
    );
};

export default RecipePage;
