import { useState, useEffect } from "react";
import { useGlobalState } from "../../context/GlobalState";
import style from "./questions.module.scss";
import Question from "../question/Question";

function Questions() {

    const useGlobalStateSurvey = useGlobalState();
    
    useEffect(() => {
        
        useGlobalStateSurvey.getSurvey();
    }, []);

            
    return (
        <>
            {
                useGlobalStateSurvey.survey?.map((survey,i) =>{       
                    return (
                        <div className={style.questions} key={i}>
                           <Question survey={survey} />
                        </div>
        
                    )
                })      
             }
                
        </>

       
    );
              
        
  
}

export default Questions;