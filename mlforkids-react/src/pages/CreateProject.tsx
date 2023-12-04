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
    const stepNumber = createProjectStep ? parseInt(createProjectStep, 10) : 1; // Default to 1 if a step is undefined

    useEffect(() => {
        if (isNaN(stepNumber) || stepNumber < 1 || stepNumber > 4) {
            navigate('/create-project/1', { replace: true });
        }
    }, [ stepNumber, navigate ]); // Depend on stepNumber and navigate

    const goToStep = (newStep: number) => {
        navigate(`/create-project/${ newStep }`);
    };

    return (
        <div>
            <header>
                <Section className={ "bg-brand-cyan" }>
                    <h1 className={ "text-white" }>
                        <div className={ "flex items-end" }>
                            <div className={ "text-8xl mr-4" }>{ stepNumber }.</div>
                            <div className={ " " }>{ t(`headerSection.${ stepNumber }.h1`) }</div>
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
                    { (stepNumber <= 1) ? (<div></div>) : (
                        <button
                            className="bg-brand-gray-2 text-brand-gray-1 font-semibold py-6 px-6 rounded-lg hover:bg-brand-gray-2-hover"
                            onClick={ () => goToStep(Math.max(1, stepNumber - 1)) }
                        >
                            { t(`steps.${ stepNumber }.prevButton`) }
                        </button>
                    ) }

                    { (stepNumber >= 4) ? (<div></div>) : (
                        <button
                            className="bg-brand-red text-brand-white font-semibold py-6 px-6 rounded-lg hover:bg-brand-red-hover"
                            onClick={ () => goToStep(Math.min(4, stepNumber + 1)) }
                        >
                            { t(`steps.${ stepNumber }.nextButton`) }
                        </button>
                    ) }
                </div>
                <div className={ "steps-progress" }>
                    <div className={ "steps-progress-inner" } style={ { width: `${ (stepNumber - 1) * 25 }%` } }></div>
                </div>
            </Section>
        </div>
    );
};

export default CreateProject;
