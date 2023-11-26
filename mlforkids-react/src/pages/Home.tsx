import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import { RedButton } from "../components/RedButton";

const Home = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    return <div className="page home">
        <Section className={ "bg-brand-orange" }>
            <h1 className={ "text-white" }>{ t('h1') }</h1>
            <p className={ "text-2xl" }>{ t('section1.p1') }</p>
            <p className={ "" }>{ t('section1.p2') }</p>
            <RedButton newTab href="#">
                { t('section1.button') }
            </RedButton>
        </Section>
        <Section className={ "" }>
            <h2 className={ "" }>{ t('section2.h2') }</h2>
            <div className="columns-3">
                <div className="">
                    <p className="">{ t('section2.col1') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section2.col3') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section2.col3') }</p>
                </div>
            </div>
        </Section>
        <Section className={ "bg-brand-cyan text-center" }>
            <h2 className={ "" }>
                { t('section3.h2') }
            </h2>
            <SafeHtmlParagraph className="">
                { t('section3.p') }
            </SafeHtmlParagraph>
            <RedButton newTab marginTop href={ '#' }>
                { t('section3.button') }
            </RedButton>
        </Section>
        <Section className={ "" }>
            {/*h2, col 1,2,3,4*/ }
            <h2 className={ "" }>{ t('section4.h2') }</h2>
            <div className="columns-4">
                <div className="">
                    <p className="">{ t('section4.col1') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section4.col2') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section4.col3') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section4.col4') }</p>
                </div>
            </div>
        </Section>
        <Section className={ "bg-brand-orange" }>
            <h2 className={ "" }>{ t('section5.h2') }</h2>
            <SafeHtmlParagraph className={ "" }>
                { t('section5.p') }
            </SafeHtmlParagraph>
            <RedButton newTab marginTop href={ t('section5.link') }>
                { t('section5.button') }
            </RedButton>
        </Section>
        <Section className={ "" }>
            <h2 className={ "" }>{ t('section6.h2') }</h2>
            <div className="columns-3">
                <div className="">
                    <p className="">{ t('section6.col1') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section6.col3') }</p>
                </div>
                <div className="">
                    <p className="">{ t('section6.col3') }</p>
                </div>

            </div>
        </Section>

    </div>;
};

export default Home;
