const Question = ({ question, answer }) => {
    return (
        <details className="question--container">
            <summary className="question">{question}</summary>
            <p className="answer">{answer}</p>
        </details>
    )
}

export default Question;