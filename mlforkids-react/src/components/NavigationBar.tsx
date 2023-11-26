import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Logo from "./svg/Logo";
import { RedButton } from "./RedButton";

const NavigationBar = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'NavigationBar' });

    const linkClassNameFn = ({ isActive }: { isActive: boolean }) =>
        (isActive ? 'text-menu-active cursor-default hover:no-underline ' : 'text-menu hover:text-menu-hover ') +
        "text-xl font-semibold " +
        "no-underline hover:underline";

    return (
        <nav
            id="NavigationBar"
            className={
                "navigation-bar " +
                "bg-brand-white " +
                "shadow-lg sticky top-0 z-50 " +
                "p-4"
            }>
            <ul className={ "flex flex-wrap justify-between items-center" }>
                <li className={ "p-2" }>
                    <NavLink to="/" className={ linkClassNameFn } end>
                        <Logo title={ t('home') }/>
                        <span className={"md:hidden"}>{ t('home') }</span>
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <NavLink to="/about" className={ linkClassNameFn }>
                        { t('about') }
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <NavLink to="/create-project" className={ linkClassNameFn }>
                        { t('createProject') }
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <NavLink to="/models" className={ linkClassNameFn }>
                        { t('models') }
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <NavLink to="/textbook" className={ linkClassNameFn }>
                        { t('textbook') }
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <NavLink to="/faq" className={ linkClassNameFn }>
                        { t('faq') }
                    </NavLink>
                </li>
                <li className={ "p-2" }>
                    <RedButton
                        newTab
                        href="https://scratch.machinelearningforkids.co.uk"
                    >
                        { t('letsStart') }
                    </RedButton>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
