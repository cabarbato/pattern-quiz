import { connect } from "react-redux"
import { setScore, setSubmitted } from "../features/quizSlice";

const mapStateToProps = (state) => {
    return {
        current_question: state.quiz.current_question,
        current_score: state.quiz.current_score,
        question_data: state.quiz.question_data,
    };
},
    mapDispatchToProps = (dispatch) => {
        return {
            onSetScore: (e) => dispatch(setScore(e)),
            onSetSubmitted: (e) => dispatch(setSubmitted(e)),
        };
    };

const Slide = ({ current_question, current_score, question_data, onSetScore, onSetSubmitted }) => {
    const choices = question_data["multiple_selection"]
        ? Object.entries(question_data["answers"])
        : question_data["answers"],
        answer_type = question_data["multiple_selection"] ? "checkbox" : "radio";

    const changeValue = (e) => {
        let new_score = e;

        if (answer_type === "checkbox") {
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
                new_score =
                    current_score +
                    (e.currentTarget.checked ? new_score : -new_score);

                inputs = getInputs(true);
            }

            inputs.forEach((d) => (d.checked = false));
        }

        onSetSubmitted(false);
        onSetScore({ [current_question]: new_score });
    }

    return (
        <div className="slide">
            <div className="slide__title">
                <h2 className="animate">{question_data.question}</h2>
                {/* {question_data.selection_type === "multiple" ? <h4>(Select all that apply)</h4> : null} */}
            </div>
            {/* @ts-ignore */}
            <div className={`slide__answers ${question_data.content_type}`}>
                {choices.map((d, i) => {
                    const value = Array.isArray(d) ? d[1] : i,
                        checked = parseInt(current_score) === value;
                        
                    return (
                        <label
                            key={Array.isArray(d) ? d[1] : i} htmlFor={value} role="button" className={checked ? "secondary" : "outline secondary"}>
                            <input type={answer_type} id={value} onChange={e => e.target.checked && changeValue(e.target.value)} name="question" checked={checked} value={value} />
                            {question_data.content_type === "images" ? <img src={`${window.location.href}/static/media/${question_data.param}/${d}`} alt={`Option ${i + 1}: ${d.replace('.jpg','')}`} /> : d}
                        </label>
                    )
                })}
            </div>
        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)