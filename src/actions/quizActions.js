const setCurrentQuestion = (payload) => ({
    type: "SET_CURRENT_QUESTION",
    payload,
  }),
  setScore = (payload) => ({
    type: "SET_SCORE",
    payload,
  }),
  setSubmitted = (payload) => ({
    type: "SET_SUBMITTED",
    payload,
  }),
  reset = () => ({
    type: "RESET",
  });

export { setCurrentQuestion, setScore, setSubmitted, reset };
