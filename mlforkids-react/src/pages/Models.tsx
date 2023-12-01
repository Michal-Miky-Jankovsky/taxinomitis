import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import Paragraphs from "../components/Paragraphs";
import { RedButton } from "../components/RedButton";

const Models = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Models' });

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
                                { t("headerSection.button") }
                            </RedButton>
                        </div>
                        <div className={ "hidden md:block" }>
                            todo svg
                        </div>
                    </div>
                </Section>

            </header>
            <main>
                todo
            </main>
        </div>
    );
}

export default Models;
