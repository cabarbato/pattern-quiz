import data from "../assets/data/questions.json";

const current_question = 0,
  initial_state = {
    total_questions: data.length - 1,
    current_question,
    current_score: null,
    score: {},
    question_data: data[current_question],
    is_submitted: false,
  };

const quizReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      const new_question = state.current_question + action.payload;
      return Object.assign({}, state, {
        current_question: new_question,
        question_data: data[new_question],
        current_score: null,
      });
    case "SET_SUBMITTED":
      return Object.assign({}, state, { is_submitted: action.payload });
    case "SET_SCORE":
      return Object.assign({}, state, {
        score: { ...state.score, ...action.payload },
        current_score: Object.values(action.payload)[0],
      });
    case "RESET":
      return Object.assign({}, state, {
        ...initial_state,
        current_question,
        question_data: data[current_question],
      });
    default:
      return state;
  }
};

export default quizReducer;
