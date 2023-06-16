export const selectSubject = (subject) => {
  return {
    type: "SELECT_SUBJECT",
    payload: subject,
  };
};

export const setQuestionSequence = () => {
  return {
    type: "SET_QUESTION_SEQUENCE",
  };
};

export const rotateQuestions = () => {
  return {
    type: "ROTATE_QUESTIONS",
  };
};

export const randomizeQuestions = () => {
  return {
    type: "RANDOMIZE_QUESTIONS",
  };
};
