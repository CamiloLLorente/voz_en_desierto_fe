import { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  survey: [],
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
      const res = await axios.get("https://run.mocky.io/v3/133672d3-cdea-490c-8585-4f826d9ef8c1");
      const data = res.data.data.questions;
      console.log(data);
      dispatch({ type: "GET_SURVEY", payload: data });
    } catch (error) {
      console.error(error);
    }
    
  };



  return (
    <Context.Provider
      value={{
        survey: state.survey,
        getSurvey,
      }}
    >
      {children}
    </Context.Provider>
  );
};
