import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Logo from "./svg/Logo";
import { RedButton } from "./RedButton";

const NavigationBar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'NavigationBar' });

    const linkClassNameFn = ({ isActive }: { isActive: boolean }) =>
        (isActive ? 'text-menu-active cursor-default hover:no-underline ' : 'text-menu hover:text-menu-hover ') +
        "text-xl font-semibold " +
        "no-underline hover:underline";

    return (
        <nav
            id="NavigationBar"
            className={ "sticky top-0 z-50" }>

            <button
                className="md:hidden p-6 absolute top-2 right-2 bg-hamburger-background"
                onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
            >
                <span className={ isMobileMenuOpen ? "hidden" : "block" }>☰ MENU</span> {/* Hamburger Icon */ }
                <span className={ isMobileMenuOpen ? "block" : "hidden" }>X</span> {/* Close menu */ }
            </button>

            <ul className={
                (isMobileMenuOpen ? 'block ' : 'hidden ') +
                'md:flex ' +
                'flex-wrap justify-between items-center ' +
                'bg-brand-white shadow-lg ' +
                'p-4'
            }>
                <li className={ "p-2" }>
                    <NavLink to="/" className={ linkClassNameFn } end>
                        <Logo className={ "hidden md:block" } title={ t('home') }/>
                        <span className={ "md:hidden" }>{ t('home') }</span>
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
