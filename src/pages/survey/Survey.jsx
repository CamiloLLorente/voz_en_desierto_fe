import Questions from '../../components/questions/Questions';
import style from "./survey.module.scss";

function Survey() {
   
    
   

    return (
        <div className={style.survey}>
          <Questions />
        </div>
    );
}

export default Survey;