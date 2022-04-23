import { Row, Col, Fade, Form } from "react-bootstrap";
import { connect } from "react-redux"
import { setScore, setSubmitted } from "../features/quizSlice";

const mapStateToProps = state => ({
    current_question: state.quiz.current_question,
    question_data: state.quiz.question_data,
    current_score: state.quiz.current_score,
}),
    mapDispatchToProps = dispatch => ({
        onSetScore: d => dispatch(setScore(d)),
        onSetSubmitted: d => dispatch(setSubmitted(d))
    });

const Slide = ({ current_question, current_score, question_data, onSetScore, onSetSubmitted }) => {
    const choices = question_data["multiple_selection"]
        ? Object.entries(question_data["answers"])
        : question_data["answers"]
    return (<Fade appear in={true}>
        <Row className="questions__slide py-5">
            <Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto">
                <h3 className="text-secondary">{question_data.question}</h3>

                <Form>
                    {choices.map((d, i) => (
                        <Form.Group
                            controlId={`question-${current_question}__answer-${i}`}
                            key={`question-${current_question}__answer-${i}`}
                        >
                            <Form.Check
                                type={question_data["multiple_selection"] ? "checkbox" : "radio"}
                                name="question"
                                value={Array.isArray(d) ? d[1] : i}
                                label={Array.isArray(d) ? d[0] : d}
                                onChange={(e) => {
                                    let new_score = parseInt(e.currentTarget.value);

                                    if (question_data["multiple_selection"]) {
                                        let inputs;

                                        const isNone = (d) => (d === "None of these");
                                        const getInputs = (bool) => (
                                            Array.prototype.slice
                                                .call(document.querySelectorAll("input[type=checkbox]"))
                                                .filter((d) => (isNone(d.labels[0].innerText) === bool)));

                                        if (
                                            isNone(e.target.labels[0].innerText) &&
                                            e.currentTarget.checked
                                        ) {
                                            new_score = 0;
                                            inputs = getInputs(false);
                                        } else {
                                            new_score = current_score +
                                                (e.currentTarget.checked ? new_score : -new_score);

                                            inputs = getInputs(true);
                                        }

                                        inputs.forEach((d) => (d.checked = false));
                                    }

                                    onSetSubmitted(false);
                                    onSetScore({ [current_question]: new_score });
                                }}
                            />
                        </Form.Group>
                    ))}
                </Form>
            </Col>
        </Row>
    </Fade>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)