import QuestionAndAnswers from "./QuestionAndAnswers";

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
                        <div key={ index } className={ "QuestionAndAnswer border-b border-brand-red" }>
                            <QuestionAndAnswers questionAndAnswers={questionAndAnswers } />
                        </div>
                    )
            ) }
        </div>
    );
}
export default QuestionsAndAnswers;
