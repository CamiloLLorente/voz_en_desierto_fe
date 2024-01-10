import {COLOR_STAR_NOT_SELECTED, COLOR_STAR_SELECTED} from "../config/config"
import {URL_SIFINCA_CTG,URL_SIFINCA_DEMO,URL_SIFINCA_MTR} from "../config/config"
import axios from "axios";
import { GET_SURVEY, SET_URL_BASE_DESTINATION } from "../config/type";



export const surveyUpdate = (state, action) => {

    let selectedAnswer = action.payload
    const newSurvey = state.questions.map(question => {
        const options = question.options.map(option => {

            if(question.consecutive === selectedAnswer.id){//solo editar la pregunta selecionada
            
                if(option.number <= selectedAnswer.number){// cambiar color a las estrellas por detras de la seleccionada a color amarillo.
                    let newOption = {...option, color: COLOR_STAR_SELECTED, selected:false};
                    if(option.number === selectedAnswer.number){
                        newOption.selected = true;
                    }
                    return newOption;
                    
                }
                return {...option, color: COLOR_STAR_NOT_SELECTED, selected: false};// cambiar color a las estrellas por delante de la seleccionada a color gris y marcarlas como no seleccionadas.
            }
            return option
         
        
        });

        return {...question, options:options}//dejar los todos los elementos de objeto iguales(...question), el unico que cambia es 'options' 
    });

    return newSurvey;

}

export const getUrl = (city) =>{
    console.log(city)

    const urlBase = {
        c:URL_SIFINCA_CTG,
        m:URL_SIFINCA_MTR,
        d:URL_SIFINCA_DEMO
    }
    if(!urlBase.hasOwnProperty(city)){
        return "URL NO FOUND"
    }

    return urlBase[city];
}


export const getSurveyService = async (id,city, dispatch) => {
    const urlBaseDestination = getUrl(city);
    let surveyId = id;
      dispatch({ 
          type: SET_URL_BASE_DESTINATION,
          payload: urlBaseDestination
      });
    try {
      const res = await axios.get(`${urlBaseDestination}/catchment/main/review/survey/${surveyId}`);
      const data = res.data.data.questions;
      const id = res.data.data.id;
      const dataNormalize= data.map(question => {
         const questionstextopcmultiple= question.questionstextopcmultiple.map(element => {
          return {...element,number: Number(element.number), color: "#AAAAAA", selected:false};
          
         });
         return {...question,options: questionstextopcmultiple}
      });
      dispatch({ 
                  type: GET_SURVEY,
                  payload: {
                    dataNormalize, 
                    id
                  }
              });
    } catch (error) {
      console.error(error);
    }
    
  };