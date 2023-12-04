import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import Paragraphs from "../components/Paragraphs";
import { useTranslation } from "react-i18next";

const CreateProject = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'CreateProject' });

    const navigate = useNavigate();
    const { createProjectStep } = useParams<{ createProjectStep: string | undefined }>();
    const actualStepNumber = createProjectStep ? parseInt(createProjectStep, 10) : 1; // Default to 1 if a step is undefined

    useEffect(() => {
        if (isNaN(actualStepNumber) || actualStepNumber < 1 || actualStepNumber > 4) {
            navigate('/create-project/1', { replace: true });
        }
    }, [ actualStepNumber, navigate ]); // Depend on stepNumber and navigate

    const goToStep = (newStep: number) => {
        navigate(`/create-project/${ newStep }`);
    };

    return (
        <div>
            <header>
                <Section className={ "bg-brand-cyan" }>
                    <h1 className={ "text-white" }>
                        <div className={ "flex items-end" }>
                            <div className={ "text-8xl mr-4" }>{ actualStepNumber }.</div>
                            <div className={ " " }>{ t(`headerSection.${ actualStepNumber }.h1`) }</div>
                        </div>
                    </h1>
                    <div>
                        <SafeHtmlParagraph
                            className={ "text-2xl" }>
                            { t("headerSection.pLarge", { defaultValue: "" }) }
                        </SafeHtmlParagraph>
                        <Paragraphs>
                            { t("headerSection.paragraphs", { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                </Section>


            </header>
            <main>
                <Section className={ "" }>
                    <Outlet/>
                </Section>


            </main>

            <Section className={ "" }>
                <div className="sub-nav flex justify-between items-center">
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
            </Section>
        </div>
    );
};

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
        <button className={ `step-text text-brand-gray-2` } onClick={() => goToStep(stepNumber)}>
            { label }
        </button>
    );

}

export default CreateProject;
