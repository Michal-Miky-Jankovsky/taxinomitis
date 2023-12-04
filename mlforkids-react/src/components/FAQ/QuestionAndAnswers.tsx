import SafeHtmlParagraph from "../SafeHtmlParagraph";
import React from "react";
import { Collapse } from "@material-tailwind/react";

interface QuestionAndAnswersProps {
    questionAndAnswers: {
        question: string;
        answers: string[];
    }
}


const QuestionAndAnswers = (props: QuestionAndAnswersProps) => {
    const { questionAndAnswers } = props;


    const [ open, setOpen ] = React.useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <div onClick={ toggleOpen } className={"flex items-end flex-auto"}>
                <h3 className={ "text-xl font-semibold my-2 grow" }>
                    { questionAndAnswers.question }
                </h3>
                <div className={ "text-brand-red ml-2 mb-1" }>
                    { open ? "▲" : "▼" }
                </div>
            </div>
            <Collapse open={ open }>
                {
                    questionAndAnswers.answers.map(
                        (answer, index) => (
                            <SafeHtmlParagraph key={ index }>
                                { answer }
                            </SafeHtmlParagraph>
                        )
                    )
                }
            </Collapse>
        </>
    )
}

export default QuestionAndAnswers;
