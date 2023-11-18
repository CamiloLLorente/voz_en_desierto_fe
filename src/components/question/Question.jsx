import SvgStarts from "./SvgStarts";
import style from "./question.module.scss";

function Question({survey}) {
    const {question, questionstextopcmultiple} = survey;
    return (
        <>
            <p> {question} </p>
            <span>
                 <SvgStarts color="#000" responseOptions={questionstextopcmultiple}/>
            </span>
        </>

    )        
    
}

export default Question;