import { connect } from "react-redux";
import Questions from "../containers/Questions";
import Results from "../containers/Results";

const mapStateToProps = state => ({
    is_submitted: state.quiz.is_submitted
})

const Quiz = props => <>
    <Questions />
    <section className="container" id="results">
        {props.is_submitted ? <Results /> : null}
    </section>
</>

export default connect(mapStateToProps)(Quiz);