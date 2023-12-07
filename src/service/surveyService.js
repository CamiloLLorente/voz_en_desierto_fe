import {COLOR_STAR_NOT_SELECTED, COLOR_STAR_SELECTED} from "../config/config"

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