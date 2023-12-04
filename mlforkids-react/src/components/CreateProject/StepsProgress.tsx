import React from "react";
import { useTranslation } from "react-i18next";

interface StepsProgressProps {
    actualStepNumber: number;
    goToStep: (newStep: number) => void;
}

export const StepsProgress = (props: StepsProgressProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'CreateProject' });

    const { actualStepNumber, goToStep } = props;

    return (
        <>
            <hr className={ "mt-2 mb-1" }/>
            <div className={ "steps-progress flex justify-between items-center font-bold" }>
                {
                    [ 1, 2, 3, 4 ].map((stepNumber) => (
                        <CreateProjectStep
                            key={ stepNumber }
                            stepNumber={ stepNumber }
                            actualStepNumber={ actualStepNumber }
                            label={ t(`steps.${ stepNumber }.progressLine`) }
                            goToStep={ goToStep }
                        />
                    ))
                }
            </div>
        </>
    );
}

const CreateProjectStep = (
    { stepNumber, actualStepNumber, label, goToStep }:
        { stepNumber: number, actualStepNumber: number, label: string, goToStep: (newStep: number) => void }
) => {
    if (actualStepNumber === stepNumber) {
        return (
            <div className={ `active text-brand-cyan` }>
                { label }
            </div>
        );
    }

    return (
        <button className={ `step-text text-brand-gray-2` } onClick={ () => goToStep(stepNumber) }>
            { label }
        </button>
    );

}
