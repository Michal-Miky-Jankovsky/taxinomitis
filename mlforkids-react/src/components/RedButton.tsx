import React from "react";

interface RedButtonProps {
    children: React.ReactNode | string;
    href: string;
    newTab?: boolean;
    marginTop?: boolean;
    className?: string;
    target?: string;
    rel?: string;
}

export const RedButton = (props: RedButtonProps) => {
    const {
        children,
        href,
        newTab = false,
        marginTop = false,
        className = '',
        ...rest
    } = props;

    return <a
        href={ href }
        target={ newTab ? '_blank' : undefined }
        className={
            // reset default <a> styles
            'no-underline ' +
            // styles
            'inline-block ' +
            'py-2 px-6 ' +
            'text-xl font-semibold ' +
            'text-brand-white bg-brand-red ' +
            'hover:bg-brand-red-hover ' +
            'rounded-full ' +
            // todo why not cursor pointer by default?
            'cursor-pointer ' +
            (marginTop ? 'mt-6 ' : '') +
            className
        }
        { ...rest }
    >
        { children }
    </a>;
}
