import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const Models = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Models' });
    const { t: tPrev } = useTranslation('prev', { keyPrefix: 'WORKSHEETS' });


    return (
        <div className="page models">
            <header>
                <Section className={ "bg-brand-orange" }>
                    <div className={ "cols-2-fixed" }>
                        <div>
                            <h1 className={ "text-white" }>{ tPrev('TITLE') }</h1>
                            <p className={ "text-2xl" }>{ tPrev('INTRO_1') }</p>
                            <p className={ "" }>{ tPrev('INTRO_2') }</p>
                            <p className={ "" }>{ tPrev('INTRO_3') }</p>
                        </div>
                        <div className={ "hidden md:block" }>
                            todo svg
                        </div>
                    </div>
                </Section>
            </header>
            <main>
                <Section className={ "" }>

                </Section>
            </main>
        </div>
    );
}

export default Models;
