import { connect } from "react-redux";

const mapStateToProps = state => ({
    current_question: state.quiz.current_question,
    total_questions: state.quiz.total_questions,
    is_submitted: state.quiz.is_submitted
});
const Progress = ({ total_questions, current_question, is_submitted }) => {
    const total = total_questions + 1,
        percent = 100 / (total - current_question + 1);

    return <div className="progress">
            <progress className="progress__bar animated" value={is_submitted ? 100 : percent} max="100" />
        </div>
}

export default connect(mapStateToProps)(Progress)