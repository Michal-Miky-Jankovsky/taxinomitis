import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import Paragraphs from "../components/Paragraphs";
import { useTranslation } from "react-i18next";
import { PrevNextButtons } from "../components/CreateProject/PrevNextButtons";
import { StepsProgress } from "../components/CreateProject/StepsProgress";
import { Step1 } from "../components/CreateProject/Step1";
import { Step2 } from "../components/CreateProject/Step2";
import { Step3 } from "../components/CreateProject/Step3";
import { Step4 } from "../components/CreateProject/Step4";

const CreateProject = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'CreateProject' });

    // steps route handling
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

    // state
    // const [ projectState, setProjectState ] = useState({ title: "", type: null });

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
                    { (actualStepNumber === 1) && (
                        <Step1/>
                    ) }
                    { (actualStepNumber === 2) && (
                        <Step2/>
                    ) }
                    { (actualStepNumber === 3) && (
                        <Step3/>
                    ) }
                    { (actualStepNumber === 4) && (
                        <Step4/>
                    ) }
                </Section>
            </main>

            <Section className={ "" }>
                <PrevNextButtons actualStepNumber={ actualStepNumber } goToStep={ goToStep }/>
                <StepsProgress actualStepNumber={ actualStepNumber } goToStep={ goToStep }/>
            </Section>
        </div>
    );
};


export default CreateProject;
