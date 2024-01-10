import Button from '../../components/button/Button';
import SurveyHeader from '../../components/general/survey/SurveyHeader';
import Questions from '../../components/questions/Questions';
import style from "./survey.module.scss";
import {useParams} from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";


function Survey() {
   
  const { id,city } = useParams();    
  const useGlobalStateSurvey = useGlobalState();
  const handleClickSurvey = async() => {
    useGlobalStateSurvey.sendAnswer()
    
  }
   

    return (
        <div className={style.survey}>
          <SurveyHeader />
          <Questions id ={id} city={city}/>
          <div className={style.center}>
            <Button color="primary" text="Enviar" onClick={handleClickSurvey} />
          </div>
        </div>
    );
}

export default Survey;