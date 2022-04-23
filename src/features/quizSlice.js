import { createSlice } from '@reduxjs/toolkit'
import data from "../assets/data/questions.json";


const current_question = 0,
initialState =  {
  total_questions: data.length - 1,
  current_question,
  current_score: null,
  score: {},
  question_data: data[current_question],
  is_submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion(state, action) {
      const new_question = state.current_question + action.payload;
      state = {
        ...state,
        current_question: new_question,
        question_data: data[new_question],
        current_score: null,
      }
    },
    setScore(state, action) {
      state = {
        ...state,
        score: { ...state.score, ...action.payload },
        current_score: Object.values(action.payload)[0],
      }
    },
    setSubmitted(state, action) {
      state = {
        ...state,
        is_submitted: action.payload
      }
    },
    reset(state, action) {
      state = {
        ...initialState,
        current_question,
        question_data: data[current_question],
      }
    },
  }
})

export const { setCurrentQuestion, setScore, setSubmitted, reset } = quizSlice.actions
export default quizSlice.reducer