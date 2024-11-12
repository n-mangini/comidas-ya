import Step1Img from './assets/Step1.png';
import Step2Img from './assets/Step2.png';
import Step3Img from './assets/Step3.png';

export interface RecipeStep {
    title: string;
    description: string;
    imageUrl: string;
}

export const recipeSteps: RecipeStep[] = [
    {
        title: 'Calentar el horno',
        description: 'Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues.',
        imageUrl: Step1Img
    },
    {
        title: 'Calentar el horno',
        description: 'Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues.',
        imageUrl: Step2Img
    },
    {
        title: 'Calentar el horno',
        description: 'Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues. Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues.Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues.',
        imageUrl: Step3Img
    },
];
