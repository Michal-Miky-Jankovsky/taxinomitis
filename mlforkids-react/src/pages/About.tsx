import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import React from "react";
import { RedButton } from "../components/RedButton";
import Paragraphs from "../components/Paragraphs";
import { RedLink } from "../components/RedLink";

const About = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'About' });

    return (
        <div className="page about">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <h1 className={ "text-white" }>
                        { t('headerSection.h1') }
                    </h1>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            <SafeHtmlParagraph
                                className={ "text-2xl" }>
                                { t('headerSection.pLarge') }
                            </SafeHtmlParagraph>
                            <Paragraphs>
                                { t('headerSection.paragraphs', { returnObjects: true }) }
                            </Paragraphs>
                            <RedButton newTab href="#">
                                { t('headerSection.button') }
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
                    <h2>
                        { t("section2.h2") }
                    </h2>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            todo svg
                            <Paragraphs>
                                { t("section2.col1.paragraphs", { returnObjects: true }) }
                            </Paragraphs>
                        </div>
                        <div>
                            todo svg
                            <Paragraphs>
                                { t("section2.col2.paragraphs", { returnObjects: true }) }
                            </Paragraphs>
                        </div>
                    </div>
                </Section>
                <Section className={ "bg-brand-cyan" }>
                    <h2 className={ "text-white" }>
                        { t("section3.h2") }
                    </h2>
                    <Paragraphs>
                        { t("section3.paragraphs", { returnObjects: true }) }
                    </Paragraphs>
                    <RedLink to="#">
                        { t("section3.button") }
                    </RedLink>
                </Section>
                <Section className={ "" }>
                    <h2>
                        { t("section4.h2") }
                    </h2>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            todo svg
                            <Paragraphs>
                                { t("section4.col1.paragraphs", { returnObjects: true }) }
                            </Paragraphs>
                        </div>
                        <div>
                            todo svg
                            <Paragraphs>
                                { t("section4.col2.paragraphs", { returnObjects: true }) }
                            </Paragraphs>
                        </div>
                    </div>
                </Section>
                <Section className={ "bg-brand-cyan text-center" }>
                    <h2 className={ "" }>
                        { t("section5.h2") }
                    </h2>
                    <Paragraphs>
                        { t("section5.paragraphs", { returnObjects: true }) }
                    </Paragraphs>
                    <RedLink to="#">
                        { t("section5.button") }
                    </RedLink>
                </Section>


            </main>
        </div>
    );
}

export default About;
