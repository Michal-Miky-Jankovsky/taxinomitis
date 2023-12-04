import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import React from "react";
import Paragraphs from "../components/Paragraphs";
import { RedButton } from "../components/RedButton";
import QuestionsAndAnswers from "../components/FAQ/QuestionsAndAnswers";

type FAQTopic = {
    h2: string;
    questionsAndAnswers: {
        question: string;
        answers: string[];
    }[];
};

const FAQ = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'FAQ' });

    const topics: FAQTopic[] = t('topics', { returnObjects: true });

    return (
        <div className="page models">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <h1 className={ "text-white" }>
                        { t("headerSection.h1") }
                    </h1>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            <SafeHtmlParagraph
                                className={ "text-2xl" }>
                                { t("headerSection.pLarge") }
                            </SafeHtmlParagraph>
                            <Paragraphs>
                                { t("headerSection.paragraphs", { returnObjects: true }) }
                            </Paragraphs>
                            <RedButton newTab href="#">
                                { t("headerSection.button", { defaultValue: "" }) }
                            </RedButton>
                        </div>
                        <div className={ "hidden md:block" }>
                            todo svg
                        </div>
                    </div>
                </Section>
            </header>
            <main>
                <Section className={ "" }>
                    {
                        // todo type any
                        Array.isArray(topics) && topics.map((topic: any, index: number) => (
                        <div key={ index } className={ "topic" }>
                            <h2 className={ "text-brand-white bg-brand-cyan inline-block pl-4 pr-20 py-2 rounded-xl my-4" }>
                                { topic.h2 }
                            </h2>
                            <QuestionsAndAnswers>
                                { topic.questionsAndAnswers }
                            </QuestionsAndAnswers>
                        </div>
                    )) }

                </Section>
            </main>
        </div>
    );
}

export default FAQ;
