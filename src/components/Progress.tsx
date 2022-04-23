import { current } from "@reduxjs/toolkit";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux"

const mapStateToProps = state => ({
    current_question: state.quiz.current_question,
    total_questions: state.quiz.total_questions
});
const Progress = ({total_questions, current_question}) => {
const total = total_questions + 1,
current = current_question + 1;

return (<Row className="py-5">
<Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto">
    <ProgressBar now={100 * (total / ((total - current) + 1))} label={`Question ${current} of ${total}`} />
</Col>
</Row>)}

export default connect(mapStateToProps)(Progress)