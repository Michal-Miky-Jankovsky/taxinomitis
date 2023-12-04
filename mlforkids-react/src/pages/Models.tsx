import React, { useState } from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import SafeHtmlParagraph from "../components/SafeHtmlParagraph";
import Paragraphs from "../components/Paragraphs";
import { RedButton } from "../components/RedButton";
import { Select, Option } from "@material-tailwind/react";
import { Worksheet, worksheets } from "../data/worksheets";
import { CyanButton } from "../components/CyanButton";
import { ModelsModal } from "../components/Models/ModelsModal";

const Models = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Models' });
    const { t: tPrev } = useTranslation('prev');

    const [ state, setState ] = useState({
        type: 'all',
        difficulty: 'all',
        makeType: 'all'
    });

    const [ modalWorksheet, setModalWorksheet ] = useState<Worksheet | null>(null);
    const closeModal = () => setModalWorksheet(null);

    const handleSelectChange = (selectName: 'type' | 'difficulty' | 'makeType') =>
        (value: string | undefined) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    [selectName]: value
                }
            });
        };

    const allWorksheets: Worksheet[] = worksheets.map((worksheet, index) => ({ index, ...worksheet }));
    const filteredWorksheets = allWorksheets
        .filter((worksheet) => {
            if (state.type === 'all') {
                return true;
            }
            return worksheet.type === state.type;
        }).filter((worksheet) => {
            if (state.difficulty === 'all') {
                return true;
            }
            return worksheet.difficulty === state.difficulty;
        }).filter((worksheet) => {
            if (state.makeType === 'all') {
                return true;
            }
            return worksheet.maketypes.includes(state.makeType);
        });


    return (
        <>
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
                    <Section>
                        <div className="selects cols-3-fixed">
                            <div className={ "block mb-2 md:mb-0" }>
                                <Select
                                    variant="outlined"
                                    label={ t('type') }
                                    onChange={ handleSelectChange('type') }
                                >
                                    <Option value={ "all" }>{ t("typeValues.all") }</Option>
                                    <Option value={ "text" }>{ t("typeValues.text") }</Option>
                                    <Option value={ "images" }>{ t("typeValues.images") }</Option>
                                    <Option value={ "numbers" }>{ t("typeValues.numbers") }</Option>
                                    <Option value={ "sounds" }>{ t("typeValues.sounds") }</Option>
                                    <Option value={ "faces" }>{ t("typeValues.faces") }</Option>
                                </Select>
                            </div>
                            <div className={ "block mb-2 md:mb-0" }>
                                <Select
                                    variant="outlined"
                                    label={ t('difficulty') }
                                    className={ "block mb-2 md:mb-0" }
                                    onChange={ handleSelectChange('difficulty') }
                                >

                                    <Option value={ "all" }>{ t("difficultyValues.all") }</Option>
                                    <Option value={ "Beginner" }>{ t("difficultyValues.easy") }</Option>
                                    <Option value={ "Intermediate" }>{ t("difficultyValues.medium") }</Option>
                                    <Option value={ "Advanced" }>{ t("difficultyValues.hard") }</Option>
                                </Select>
                            </div>
                            <div className={ "block mb-2 md:mb-0" }>
                                <Select
                                    variant="outlined"
                                    label={ t('makeType') }
                                    className={ "block" }
                                    onChange={ handleSelectChange('makeType') }
                                >
                                    <Option value={ "all" }>{ t("makeTypeValues.all") }</Option>
                                    <Option value={ "scratch3" }>{ t("makeTypeValues.scratch3") }</Option>
                                    <Option value={ "python" }>{ t("makeTypeValues.python") }</Option>
                                    <Option value={ "appinventor" }>{ t("makeTypeValues.appInventor") }</Option>
                                </Select>
                            </div>

                        </div>

                        { filteredWorksheets.length === 0 && (
                            <div className={ "mt-4" }>
                                { t("noResults") }
                            </div>
                        ) }

                        { filteredWorksheets.length > 0 && (
                            <div className="worksheets cols-3-fixed mt-4">
                                { filteredWorksheets.map((worksheet, index) => (
                                    <div key={ index }>
                                        <div
                                            className={ "card border-2 border-brand-orange mt-4 rounded-xl overflow-hidden " }>
                                            <div className={ "card-header bg-brand-orange px-4 py-2" }>
                                                { tPrev(worksheet.title) }
                                            </div>
                                            <div className={ "card-body p-4" }>
                                                <div className={ "mb-4" }>
                                                    { tPrev(worksheet.description) }
                                                </div>
                                                <CyanButton className={ "block text-center mb-4 w-full" }
                                                            onClick={ () => setModalWorksheet(worksheet) }>{ t("download") }</CyanButton>

                                                <div className="grid place-items-center">
                                                    <img
                                                        src={ worksheet.image.replace('static/images', 'images/projects') }
                                                        alt={ worksheet.title }/>
                                                </div>
                                            </div>
                                            <div className={ "card-footer" }>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        ) }
                    </Section>
                </main>
            </div>
            <ModelsModal worksheet={ modalWorksheet } closeModal={ closeModal }/>
        </>
    );
}


export default Models;
