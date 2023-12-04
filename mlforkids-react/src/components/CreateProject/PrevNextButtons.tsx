import { useTranslation } from "react-i18next";

interface PrevNextButtonsProps {
    actualStepNumber: number;
    goToStep: (newStep: number) => void;
}

export const PrevNextButtons = (props: PrevNextButtonsProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'CreateProject' });

    const { actualStepNumber, goToStep } = props;

    return (
        <div id={"PrevNextButtons"} className={ "flex justify-between items-center" }>
            { (actualStepNumber <= 1) ? (<div></div>) : (
                <button
                    className="bg-brand-gray-2 text-brand-gray-1 font-semibold py-2 px-4 rounded-lg hover:bg-brand-gray-2-hover"
                    onClick={ () => goToStep(Math.max(1, actualStepNumber - 1)) }
                >
                    { t(`steps.${ actualStepNumber }.prevButton`) }
                </button>
            ) }

            { (actualStepNumber >= 4) ? (<div></div>) : (
                <button
                    className="bg-brand-red text-brand-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-red-hover"
                    onClick={ () => goToStep(Math.min(4, actualStepNumber + 1)) }
                >
                    { t(`steps.${ actualStepNumber }.nextButton`) }
                </button>
            ) }
        </div>
    );
}
