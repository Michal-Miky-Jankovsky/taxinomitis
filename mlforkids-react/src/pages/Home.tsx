import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import { RedButton } from "../components/RedButton";
import React from "react";
import Paragraphs from "../components/Paragraphs";

const Home = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    return <div className="page home">
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
            {/* section 2 */}
            <Section className={ "" }>
                <h2 className={ "" }>{ t('section2.h2') }</h2>
                <div className="cols-3-fixed">
                    <div className="">
                        todo svg
                        <Paragraphs>
                            { t('section2.col1.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        todo svg
                        <Paragraphs>
                            { t('section2.col2.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        todo svg
                        <Paragraphs>
                            { t('section2.col3.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                </div>
            </Section>
            {/* section 3 */}
            <Section className={ "bg-brand-cyan text-center" }>
                <h2 className={ "" }>
                    { t('section3.h2') }
                </h2>
                <Paragraphs>
                    { t('section3.paragraphs', { returnObjects: true }) }
                </Paragraphs>
                <RedButton newTab marginTop href={ '#' }>
                    { t('section3.button') }
                </RedButton>
            </Section>
            {/* section 4 */}
            <Section className={ "" }>
                <h2 className={ "" }>{ t('section4.h2') }</h2>
                <div className="cols-4-fixed">
                    <div className="">
                        <Paragraphs>
                            { t('section4.col1.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        <Paragraphs>
                            { t('section4.col2.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        <Paragraphs>
                            { t('section4.col3.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        <Paragraphs>
                            { t('section4.col4.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                </div>
            </Section>
            {/* section 5 */}
            <Section className={ "bg-brand-orange" }>
                <h2 className={ "" }>{ t('section5.h2') }</h2>
                <div className="cols-2-fixed">
                    <div className="">
                        <SafeHtmlParagraph className={ "" }>
                            { t('section5.p') }
                        </SafeHtmlParagraph>
                        <RedButton newTab marginTop href={ t('section5.link') }>
                            { t('section5.button') }
                        </RedButton>
                    </div>
                    <div className="">
                        todo svg
                    </div>
                </div>
            </Section>
            {/* section 6 */}
            <Section className={ "" }>
                <h2 className={ "" }>{ t('section6.h2') }</h2>
                <div className="cols-3-fixed">
                    <div className="">
                        <Paragraphs>
                            { t('section6.col1.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        <Paragraphs>
                            { t('section6.col2.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                    <div className="">
                        <Paragraphs>
                            { t('section6.col3.paragraphs', { returnObjects: true }) }
                        </Paragraphs>
                    </div>
                </div>
            </Section>
        </main>
    </div>;
};

export default Home;
