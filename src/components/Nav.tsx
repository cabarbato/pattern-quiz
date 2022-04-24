import { useState, useRef } from "react";
import { Button, Overlay, Tooltip } from "react-bootstrap";
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
    const nullRef = useRef(null),
        prev = useRef(null),
        next = useRef(null);

    const [state, setState] = useState({
        show: nullRef,
    }),
        { show } = state;

    const is_last = current_question >= total_questions;

    return <nav>
        <div className="nav__button-wrapper" onClick={() => setState({ ...state, show: !current_question ? prev : nullRef })} onMouseOut={() => setState({ ...state, show: nullRef })}>
            <button
                className={`outline ${!current_question  ? "secondary" : null}`} ref={prev}
                disabled={!current_question}
                onClick={() => { is_last && is_submitted ? onReset() : onSetCurrentQuestion(-1) }}
                data-disabled-tooltip="There's no more questions to go back to.">
                {is_submitted ? "Start Over" : "Prev"}</button>
        </div>
        <div className="nav__button-wrapper" onClick={() => setState({ ...state, show: current_score === null ? next : nullRef })} onMouseOut={() => setState({ ...state, show: nullRef })}>
            <button
                className={`outline ${current_score === null  ? "secondary" : null}`} ref={next}
                disabled={current_score === null || is_submitted}
                onClick={() => { is_last ? onSetSubmitted(true) : onSetCurrentQuestion(1) }}
                data-disabled-tooltip="Oops! You need to choose an answer before you can go to the next question.">{is_last ? "Submit" : "Next"}</button>
        </div>

        {show.current ? <Overlay target={show.current} show={true} placement="top">
            {(props) => <Tooltip id="overlay-example" {...props}>
                {show.current.getAttribute("data-disabled-tooltip")}
            </Tooltip>}
        </Overlay> : null}
    </nav>
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)