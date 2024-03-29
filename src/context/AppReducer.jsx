import {GET_SURVEY, ADD_SELECTED_ANSWER, SET_URL_BASE_DESTINATION, SEND_SURVEY} from "../config/type"
import {surveyUpdate} from "../service/surveyService"

export default (state, action) => {
  switch (action.type) {
    
    case GET_SURVEY:
      return {
        ...state,
        surveyId: action.payload.id,
        questions: action.payload.dataNormalize,
        status: action.payload.status,
      };
    case SET_URL_BASE_DESTINATION:
      return {
        ...state,
        urlBaseDestination: action.payload,
      };
    case ADD_SELECTED_ANSWER:  
      const newSurvey = surveyUpdate(state, action) 
      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, action.payload],
        questions: newSurvey
      }
    case SEND_SURVEY:
      return {
        ...state,
        status:action.payload
      }
    default:
      return state;
  }
};
