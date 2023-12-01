import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import Paragraphs from "../components/Paragraphs";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";

const Textbook = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Textbook' });

    return (
        <div className="page textbook">
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
                        </div>
                        <div className={ "hidden md:block" }>
                            todo svg
                        </div>
                    </div>
                </Section>
            </header>
            <main>
                <Section className={ "" }>
                    <Paragraphs>
                        { t('section2.paragraphs', { returnObjects: true }) }
                    </Paragraphs>
                </Section>
            </main>
        </div>
    );
}

export default Textbook;
