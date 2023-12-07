import { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  questions: [],
  selectedAnswers: [],
};

export const Context = createContext(initialState);

export const useGlobalState = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useGlobalState must be used within a GlobalState");
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

    const getSurvey = async () => {
      try {
        const res = await axios.get("https://run.mocky.io/v3/2d2f2eb1-c4d3-4335-a130-68f6c9150dd2");
        const data = res.data.data.questions;
        const dataNormalize= data.map(question => {
           const questionstextopcmultiple= question.questionstextopcmultiple.map(element => {
            return {...element,number: Number(element.number), color: "#AAAAAA", selected:false};
            
           });
           return {...question,options: questionstextopcmultiple}
        });
        dispatch({ type: "GET_SURVEY", payload: dataNormalize });
      } catch (error) {
        console.error(error);
      }
      
    };
    const addSelectedAnswer = async (data) => {
           
      dispatch({ type: "ADD_SELECTED_ANSWER", payload: data });
      
      
    };



  return (
    <Context.Provider
      value={{
        questions: state.questions,
        selectedAnswers: state.selectedAnswers,
        getSurvey,
        addSelectedAnswer
      }}
    >
      {children}
    </Context.Provider>
  );
};
