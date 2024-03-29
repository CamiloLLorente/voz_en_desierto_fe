import { useState, useEffect } from "react";
import { useGlobalState } from "../../context/GlobalState";
import style from "./questions.module.scss";
import Question from "../question/Question";

function Questions({id,city}) {

    const useGlobalStateSurvey = useGlobalState();
    useEffect(() => {
        
        useGlobalStateSurvey.getSurvey(id, city);
    }, []);

            
    return (
        <div className={style.grid_questions}>
            {
                useGlobalStateSurvey.questions?.map((question,i) =>{       
                    return (
                        <div className={style.questions} key={i}>
                           <Question question={question}  i={i}/>
                        </div>
        
                    )
                })      
             }
                
        </div>

       
    );
              
        
  
}

export default Questions;