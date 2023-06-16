const initialData = {
  physics: [
    "physics question 1",
    "physics question 2",
    "physics question 3",
    "physics question 4",
    "physics question 5",
    "physics question 6",
    "physics question 7",
    "physics question 8",
  ],
  math: [
    "math question 1",
    "math question 2",
    "math question 3",
    "math question 4",
    "math question 5",
    "math question 6",
    "math question 7",
    "math question 8",
  ],
  chemistry: [
    "chemistry question 1",
    "chemistry question 2",
    "chemistry question 3",
    "chemistry question 4",
    "chemistry question 5",
    "chemistry question 6",
    "chemistry question 7",
    "chemistry question 8",
  ],
  biology: [
    "biology question 1",
    "biology question 2",
    "biology question 3",
    "biology question 4",
    "biology question 5",
    "biology question 6",
    "biology question 7",
    "biology question 8",
  ],
};

const initialState = {
  selectedSubject: "",
  questionBank: [],
  questions: [],
};

const rotateArray = (arr) => {
  const rotatedArr = [...arr];
  // const firstItem = rotatedArr.shift();
  // rotatedArr.push(firstItem);
  const firstItem = rotatedArr.pop();
  rotatedArr.unshift(firstItem);
  return rotatedArr;
};

const rootReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "SELECT_SUBJECT":
      return {
        ...state,
        selectedSubject: action.payload,

        questionBank: initialData[action.payload],
        questions: [],
      };

    case "SET_QUESTION_SEQUENCE":
      return {
        ...state,
        questions: state.questionBank,
      };

    case "ROTATE_QUESTIONS":
      return {
        ...state,
        questions: rotateArray(state.questions),
      };

    case "RANDOMIZE_QUESTIONS":
      const randomizedQuestions = [...state.questionBank];
      for (let i = randomizedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomizedQuestions[i], randomizedQuestions[j]] = [
          randomizedQuestions[j],
          randomizedQuestions[i],
        ];
      }
      return {
        ...state,
        questions: randomizedQuestions,
      };

    default:
      return state;
  }
};

export default rootReducer;
