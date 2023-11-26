import React from 'react';
import DOMPurify from 'dompurify';

interface SafeHtmlTagProps {
    tag: 'span' | 'p' | 'div';
    children: string | Node;
}

const SafeHtmlTag = (props: SafeHtmlTagProps) => {
    const {
        children,
        tag,
        ...rest
    } = props;

    // Sanitize the HTML content
    const sanitizedHtml = DOMPurify.sanitize(children);

    // replace new lines with <br> tags
    const sanitizedHtmlWithBr = sanitizedHtml.replace(/\n/g, '<br/>');

    // Return an element with the sanitized content
    return React.createElement(
        tag,
        { dangerouslySetInnerHTML: { __html: sanitizedHtmlWithBr }, ...rest },
        null
    );
};

export default SafeHtmlTag;
