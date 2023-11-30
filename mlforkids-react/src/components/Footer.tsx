import React from 'react';
import { useTranslation } from 'react-i18next';
import SafeHtmlParagraph from "./SafeHtmlParagraph";
import SafeHtmlSpan from "./SafeHtmlSpan";
import Logo from "./svg/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Footer' });
    const { t: tNav } = useTranslation('translation', { keyPrefix: 'NavigationBar' });

    return (
        <footer className="text-gray-600 bg-gray-100 px-4 py-6">
            <div className="wrapper p-12">
                <div className="mb-8">
                    <span className="inline-block align-center mr-6">
                        <span className="flex justify-center items-center bg-white rounded-full h-16 w-16">
                            <Logo/>
                        </span>
                    </span>
                    <SafeHtmlSpan className="inline-block align-center text-xl font-medium">
                        { t('header') }
                    </SafeHtmlSpan>
                </div>
                <div className="cols-3-fixed">
                    <SafeHtmlParagraph>{ t('p1') }</SafeHtmlParagraph>
                    <p>
                        <Link to="/">
                            { tNav('home') }
                        </Link>
                        <br/>
                        <Link to="/about">
                            { tNav('about') }
                        </Link>
                        <br/>
                        <Link to="/create-project">
                            { tNav('createProject') }
                        </Link>
                        <br/>
                        <Link to="/models">
                            { tNav('models') }
                        </Link>
                        <br/>
                        <Link to="/textbook">
                            { tNav('textbook') }
                        </Link>
                        <br/>
                        <Link to="/faq">
                            { tNav('faq') }
                        </Link>
                    </p>
                    <SafeHtmlParagraph>{ t('p3') }</SafeHtmlParagraph>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
