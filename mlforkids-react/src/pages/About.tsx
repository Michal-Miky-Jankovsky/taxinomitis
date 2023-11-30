import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import React from "react";
import { RedButton } from "../components/RedButton";

const About = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'About' });
    const { t: tPrev } = useTranslation('prev', { keyPrefix: 'ABOUT' });

    return (
        <div className="page about">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <h1 className={ "text-white" }>{ t('h1') }</h1>
                    <div className="cols-2-fixed">
                        <div className="">
                            <p className={ "text-2xl" }>{ t('section1.p1') }</p>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </Section>
            </header>
            <main>
                <Section className={ "" }>
                    <h2 className={ "" }>{ t('section2.h2') }</h2>
                    <div className="cols-2-fixed">
                        <div className="">
                            <p className="">{ t('section2.alt1') }</p>
                        </div>
                        <div className="">
                            <p className="">{ t('section2.alt2') }</p>
                        </div>

                    </div>
                </Section>
                <Section className={ "bg-brand-cyan" }>
                    <h2 className={ "text-brand-white" }>
                        { tPrev('WHAT.TITLE') }
                    </h2>
                    <div className="cols-2-even">
                        <SafeHtmlParagraph className="">
                            { tPrev('WHAT.BODY') }
                        </SafeHtmlParagraph>
                        <RedButton newTab href="https://machinelearningforkids.co.uk/#!/stories/intro#storiestop">
                            { t('todo.WHAT.storiesButton') }
                        </RedButton>
                    </div>
                </Section>
                <Section className={ "" }>
                    <h2 className={ "" }>{ tPrev('WHY.TITLE') }</h2>
                    <div className="cols-2-fixed">
                        <div>
                            <SafeHtmlParagraph className="">{ tPrev('WHY.BODY') }</SafeHtmlParagraph>
                            <RedButton newTab marginTop href="#">
                                { "todo" }
                            </RedButton>
                        </div>
                        <div>
                        </div>
                    </div>
                </Section>
                <Section className={ "bg-brand-cyan text-center" }>
                    <h2 className={ "" }>{ tPrev('FURTHER.TITLE') }</h2>
                    <SafeHtmlParagraph className="">
                        { tPrev('FURTHER.BODY') }
                    </SafeHtmlParagraph>
                </Section>
            </main>
        </div>
    );
}

export default About;
