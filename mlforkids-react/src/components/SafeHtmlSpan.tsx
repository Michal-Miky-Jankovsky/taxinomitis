import React from 'react';
import SafeHtmlTag from "./SafeHtmlTag";

interface SafeHtmlSpanProps {
    children: string | Node;
    className?: string;
}

const SafeHtmlSpan = (props: SafeHtmlSpanProps) => {
    return <SafeHtmlTag tag="span" { ...props } />
};

export default SafeHtmlSpan;
