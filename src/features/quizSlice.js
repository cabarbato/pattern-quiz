import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import pythias from '../apis/pythias';
import data from "../assets/data/questions.json";
import param_data from "../assets/data/parameters.json";


const current_question = 0,
  initialState = {
    total_questions: data.length - 1,
    current_question,
    current_score: null,
    score: {},
    question_data: data[current_question],
    is_submitted: false,
    loading: 'idle',
    results: []
  };

const setSubmitted = createAsyncThunk(
  process.env.REACT_APP_ENDPOINT,
  async (is_submitted, thunkAPI, _) => {
    if (is_submitted) {
      const parameters = [
          ["forSale", true],
          ["page_size", 10]
        ],
        score = thunkAPI.getState().quiz.score

      Object.entries(score).forEach(({
        k,
        v
      }) => parameters.push([param_data[k], param_data[v]]))

      const params = new URLSearchParams(parameters);

      const response = await pythias.get(process.env.REACT_APP_ENDPOINT, {
        params
      }),
      results = response.data.page_results;
      
      return {
        is_submitted,
        results
      }
    }
    else return {
    is_submitted,
    results: []
    }
  }
)

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion(state, action) {
      const new_question = state.current_question + action.payload;

      state.current_question = new_question
      state.question_data = data[new_question]
      state.current_score = null
    },
    setScore(state, action) {
      state.score = {
        ...state.score,
        ...action.payload
      }
      state.current_score = Object.values(action.payload)[0]
    },
    reset(state, action) {
      state = {
        ...initialState,
        current_question,
        question_data: data[current_question],
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(setSubmitted.fulfilled, (state, action) => {
      state.loading = "success"
      state.is_submitted = action.payload.is_submitted
      state.results = action.payload.results
    })
    builder.addCase(setSubmitted.rejected, (state, action) => {
      state.loading = "rejected"
      state.is_submitted = false
      state.results = []
    })
  }
})

export const {
  setCurrentQuestion,
  setScore,
  reset
} = quizSlice.actions
export {
  setSubmitted
}
export default quizSlice.reducer