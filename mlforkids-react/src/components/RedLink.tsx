import React from "react";
import { Link } from "react-router-dom";

interface RedLinkProps {
    children: React.ReactNode | string;
    to: string;
    marginTop?: boolean;
    className?: string;
    target?: string;
    rel?: string;
}

export const RedLink = (props: RedLinkProps) => {
    const {
        children,
        to,
        marginTop = false,
        className = '',
        ...rest
    } = props;

    if (!children || !to) {
        return null;
    }

    return <Link
        to={ to }
        className={
            "RedLink " +
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
    </Link>;
}
