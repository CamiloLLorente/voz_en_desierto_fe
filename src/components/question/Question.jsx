import SvgStars from "../star/SvgStars";
import style from "./question.module.scss";

function Question(params) {
    const {question, options} = params.question;
    return (
        <>
            <p className={style.p}> {question} </p>
            <span className={style.span}>
                 <SvgStars question={params.question} responseOptions={options} />
            </span>
        </>

    )        
    
}

export default Question;