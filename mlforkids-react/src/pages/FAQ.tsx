import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";

const FAQ = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Models' });
    const { t: tPrev } = useTranslation('prev', { keyPrefix: 'HELP' });

    return (
        <div className="page models">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <h1 className={ "text-white" }>{ tPrev('FAQS.TITLE') }</h1>
                    <p className={ "text-2xl" }>{ tPrev('FAQS.INTRO1') }</p>
                    <p className={ "text-2xl" }>{ tPrev('FAQS.INTRO2') }</p>
                    <SafeHtmlParagraph className={ "text-2xl" }>{ tPrev('FAQS.INTRO3') }</SafeHtmlParagraph>
                </Section>
            </header>
            <main>
                <Section className={ "" }>
                    <h2 className={ "text-brand-white bg-brand-cyan inline-block pl-4 pr-20 py-2 rounded-xl" }>
                        { tPrev('PROJECTS.TITLE') }
                    </h2>

                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" className="" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <p className={ "text-2xl" }>
                                    { tPrev('PROJECTS.Q4') }
                                </p>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                            <SafeHtmlParagraph className={ "" }>
                                { tPrev('PROJECTS.Q4-A-1') }
                            </SafeHtmlParagraph>
                            <SafeHtmlParagraph className={ "" }>
                                { tPrev('PROJECTS.Q4-A-2') }
                            </SafeHtmlParagraph>
                            <SafeHtmlParagraph className={ "" }>
                                { tPrev('PROJECTS.Q4-A-3') }
                            </SafeHtmlParagraph>
                            <SafeHtmlParagraph className={ "" }>
                                { tPrev('PROJECTS.Q4-A-4') }
                            </SafeHtmlParagraph>
                        </div>
                    </div>




                    <h2 className={ "text-brand-white bg-brand-cyan inline-block pl-4 pr-20 py-2 rounded-xl" }>{ tPrev('SCRATCH.TITLE') }</h2>
                    <p className={ "" }>{ tPrev('A1') }</p>


                </Section>
            </main>
        </div>
    );
}

export default FAQ;
