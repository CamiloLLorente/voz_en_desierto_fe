import { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { GET_SURVEY, ADD_SELECTED_ANSWER, SEND_SURVEY } from "../config/type";
import {getSurveyService} from "../service/surveyService"
import {initialState} from './initialState'




export const Context = createContext(initialState);

export const useGlobalState = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useGlobalState must be used within a GlobalState");
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getSurvey = async (id,city) => {
    getSurveyService(id, city, dispatch);
  }
  const addSelectedAnswer = async (data) => {      
    dispatch({ type: ADD_SELECTED_ANSWER, payload: data });
    
  };
  const sendAnswer = async () => {
    const {surveyId, questions, urlBaseDestination} = state;
    try {
      const urlBase = urlBaseDestination
      const url = `${urlBase}/catchment/main/review/complete/review/survey`
      const data = {
        id: surveyId,
        questions: questions
      }
      const res = await axios.put(url,data);
      console.log(res);
      
      dispatch({ 
                  type: SEND_SURVEY,
                  payload: res.data.status
              });
    } catch (error) {
      console.error(error);
    }
  }
    
  return (
    <Context.Provider
      value={{
        questions: state.questions,
        status: state.status,
        selectedAnswers: state.selectedAnswers,
        surveyId: state.surveyId,
        urlBaseDestination: state.urlBaseDestination,
        getSurvey,
        addSelectedAnswer,
        sendAnswer
      }}
    >
      {children}
    </Context.Provider>
  );
};
