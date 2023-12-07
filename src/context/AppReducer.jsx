import {GET_SURVEY, ADD_SELECTED_ANSWER} from "../config/type"
import {surveyUpdate} from "../service/surveyService"

export default (state, action) => {
  switch (action.type) {
    
    case GET_SURVEY:
      return {
        ...state,
        questions: action.payload,
      };
    case ADD_SELECTED_ANSWER:  
      const newSurvey = surveyUpdate(state, action) 
      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, action.payload],
        questions: newSurvey
      }
    default:
      return state;
  }
};
