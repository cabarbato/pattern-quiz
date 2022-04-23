import { connect } from "react-redux";
import Questions from "../containers/Questions";
import Results from "../containers/Results";

const mapStateToProps = state => ({
    is_submitted: state.quiz.is_submitted
})

const Quiz = props => <>
    <Questions />
    {props.is_submitted ? <Results /> : null}
</>

export default connect(mapStateToProps)(Quiz);