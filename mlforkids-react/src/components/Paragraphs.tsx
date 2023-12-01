import SafeHtmlParagraph from "./SafeHtmlParagraph";

interface ParagraphProps {
    children: string[];
}

const Paragraphs = (props: ParagraphProps) => {
    const { children: paragraphs } = props;

    if (!paragraphs || !Array.isArray(paragraphs) || paragraphs.length === 0) {
        return null;
    }

    return (
        <>
            { paragraphs.map((paragraph, index) => (
                <SafeHtmlParagraph key={ index }>
                    { paragraph }
                </SafeHtmlParagraph>
            )) }
        </>
    );
}
export default Paragraphs;
