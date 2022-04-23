import { useState, useRef } from "react";
import { Row, Col, Button, Overlay, Tooltip } from "react-bootstrap";
import { connect } from "react-redux"
import { setCurrentQuestion, setSubmitted } from "../features/quizSlice";

const mapStateToProps = state => ({
    current_question: state.quiz.current_question,
    total_questions: state.quiz.total_questions
}),
    mapDispatchToProps = dispatch => ({
        onSetCurrentQuestion: d => dispatch(setCurrentQuestion(d)),
        onSetSubmitted: d => dispatch(setSubmitted(d))
    });

const Nav = ({ total_questions, current_question }) => {
    const nullRef = useRef(null),
        prev = useRef(null),
        next = useRef(null);

    const [state, setState] = useState({
        show: nullRef,
        is_disabled: true
    }),
        { show, is_disabled } = state;

    return (
        <>
            <Row className="nav py-5">
                <Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto d-flex justify-content-between">
                    <div className="nav__button-wrapper" onClick={() => setState({ ...state, show: !current_question ? prev : nullRef })} onMouseOut={() => setState({ ...state, show: nullRef })}>
                        <Button className="rounded-0" variant="outline-secondary" size="lg" ref={prev} disabled={!current_question} data-disabled-tooltip="There's no more questions to go back to.">Prev</Button>
                    </div>
                    <div className="nav__button-wrapper" onClick={() => setState({ ...state, show: is_disabled ? next : nullRef })} onMouseOut={() => setState({ ...state, show: nullRef })}>
                        <Button className="rounded-0" variant="outline-secondary" size="lg" ref={next} disabled={is_disabled} data-disabled-tooltip="Oops! You need to choose an answer before you can go to the next question.">{total_questions === current_question ? "Next" : "Submit"}</Button>
                    </div>

                    {show.current ? <Overlay target={show.current} show={true} placement="top">
                        {(props) => <Tooltip id="overlay-example" {...props}>
                            {show.current.getAttribute("data-disabled-tooltip")}
                        </Tooltip>}
                    </Overlay> : null}
                </Col>
            </Row>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)