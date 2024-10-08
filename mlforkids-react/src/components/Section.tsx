import type React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section = (props: SectionProps) => {
    const {
        children,
        className = '',
        ...rest
    } = props;

    return (
        <section className={`Section px-8 ${className}`} { ...rest }>
            <div className="section-wrapper max-w-6xl mx-auto py-12" >
                { children }
            </div>
        </section>
    );
}

export default Section;
