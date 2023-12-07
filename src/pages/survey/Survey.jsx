import Button from '../../components/button/Button';
import SurveyHeader from '../../components/general/survey/SurveyHeader';
import Questions from '../../components/questions/Questions';
import style from "./survey.module.scss";

function Survey() {
   
    
   

    return (
        <div className={style.survey}>
          <SurveyHeader />
          <Questions />
          <div className={style.center}>
            <Button color="primary" text="Enviar" />
          </div>
        </div>
    );
}

export default Survey;