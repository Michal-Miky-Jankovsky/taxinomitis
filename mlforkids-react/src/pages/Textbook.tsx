import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const Textbook = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Textbook' });


    return (
        <div className="page textbook">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            <h1 className={ "text-white" }>{ t('h1') }</h1>
                            <p className={ "text-2xl" }>{ t('section1.p1') }</p>
                        </div>
                        <div className={ "hidden md:block" }>
                            todo svg
                        </div>
                    </div>
                </Section>
            </header>
            <main>
                <Section className={ "" }>
                    <p className={ "" }>
                        { t('section2.p1') }
                    </p>
                    <p className={ "" }>
                        { t('section2.p2') }
                    </p>
                    <p className={ "" }>
                        { t('section2.p3') }
                    </p>
                </Section>
            </main>
        </div>
    );
}

export default Textbook;
