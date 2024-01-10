import { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { GET_SURVEY } from "../config/type";
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
          
    dispatch({ type: "ADD_SELECTED_ANSWER", payload: data });
    
    
  };
  const sendAnswer = async () => {
    const {surveyId, questions} = state;
    try {
      const urlBase = "https://run.mocky.io/v3/2d2f2eb1-c4d3-4335-a130-68f6c9150dd2/"
      const url = urlBase+surveyId
      const res = await axios.post(url,questions);
      
      dispatch({ 
                  type: GET_SURVEY,
                  payload: res
              });
    } catch (error) {
      console.error(error);
    }
  }
    
  return (
    <Context.Provider
      value={{
        questions: state.questions,
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
