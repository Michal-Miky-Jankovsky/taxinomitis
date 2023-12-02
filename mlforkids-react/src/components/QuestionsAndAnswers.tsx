import SafeHtmlParagraph from "./SafeHtmlParagraph";

interface QuestionsAndAnswersProps {
    children: {
        question: string;
        answers: string[];
    }[];
}

const QuestionsAndAnswers = (props: QuestionsAndAnswersProps) => {
    const { children: questionsAndAnswers } = props;

    if (!questionsAndAnswers || !Array.isArray(questionsAndAnswers) || questionsAndAnswers.length === 0) {
        return null;
    }

    return (
        <div className={ "QuestionsAndAnswers" }>
            { questionsAndAnswers.map(
                (questionAndAnswers, index) =>
                    (
                        <div key={ index } className={ "QuestionAndAnswer" }>
                            <h3 className={ "text-xl font-semibold mb-2" }>
                                { questionAndAnswers.question }
                            </h3>
                            { questionAndAnswers.answers.map(
                                (answer, index) => (
                                    <SafeHtmlParagraph key={ index }>
                                        { answer }
                                    </SafeHtmlParagraph>
                                )
                            ) }
                        </div>
                    )
            ) }
        </div>
    );
}
export default QuestionsAndAnswers;
