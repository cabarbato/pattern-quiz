import { useRef } from "react";
import { connect } from "react-redux"
import { setCurrentQuestion, setSubmitted, reset } from "../features/quizSlice";

const mapStateToProps = state => ({
    current_question: state.quiz.current_question,
    total_questions: state.quiz.total_questions,
    is_submitted: state.quiz.is_submitted,
    current_score: state.quiz.current_score
}),
    mapDispatchToProps = dispatch => ({
        onSetCurrentQuestion: (e) => dispatch(setCurrentQuestion(e)),
        onSetSubmitted: (e) => dispatch(setSubmitted(e)),
        onReset: (e) => dispatch(reset(e)),
    });

const Nav = ({ total_questions, current_question, current_score, is_submitted, onSetCurrentQuestion, onSetSubmitted, onReset }) => {
    const is_last = current_question >= total_questions;

    return <nav className="nav">
        <div className="nav__button-wrapper" /* data-tooltip={!current_question ? "There's no more questions to go back to." : null} */>
            <button
                className={`outline ${!current_question ? "secondary" : null}`}
                disabled={!current_question}
                onClick={() => { is_last && is_submitted ? onReset() : onSetCurrentQuestion(-1) }}>
                {is_submitted ? "Start Over" : "Prev"}</button>
        </div>
        <div className="nav__button-wrapper" /* data-tooltip={current_score === null ? "Oops! You need to choose an answer before you can go to the next question." : null} */>
            <button
                className={`outline ${current_score === null ? "secondary" : null}`}
                disabled={current_score === null || is_submitted}
                onClick={() => { is_last ? onSetSubmitted(true) : onSetCurrentQuestion(1) }}>
                {is_last ? "Submit" : "Next"}</button>
        </div>
    </nav>
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)