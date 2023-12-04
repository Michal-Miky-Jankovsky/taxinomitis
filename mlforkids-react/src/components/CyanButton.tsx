import React from "react";

interface CyanButtonProps {
    children: React.ReactNode | string;
    onClick: () => void;
    marginTop?: boolean;
    className?: string;
    rel?: string;
}

export const CyanButton = (props: CyanButtonProps) => {
    const {
        children,
        onClick,
        marginTop = false,
        className = '',
        ...rest
    } = props;

    if (!children || !onClick) {
        return null;
    }

    return <button
        onClick={ onClick }
        className={
            "CyanButton " +
            // reset default <a> styles
            'no-underline ' +
            // styles
            // 'inline-block ' +
            'py-2 px-6 ' +
            'text-xl font-semibold ' +
            'text-brand-white bg-brand-cyan ' +
            'hover:bg-brand-cyan-hover ' +
            'rounded-full ' +
            // todo why not cursor pointer by default?
            'cursor-pointer ' +
            (marginTop ? 'mt-6 ' : '') +
            className
        }
        { ...rest }
    >
        { children }
    </button>;
}
