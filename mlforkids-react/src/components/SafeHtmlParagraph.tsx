import React from 'react';
import SafeHtmlTag from "./SafeHtmlTag";

interface SafeHtmlParagraphProps {
    children: string | Node;
    className?: string;
}

const SafeHtmlParagraph = (props: SafeHtmlParagraphProps) => {
    return <SafeHtmlTag tag="p" { ...props }/>;
};

export default SafeHtmlParagraph;
