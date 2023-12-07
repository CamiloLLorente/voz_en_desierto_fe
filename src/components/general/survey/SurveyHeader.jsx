import React from 'react';
import style from './survey_header.module.scss';
import SvgStar from '../../star/SvgStar';
import { COLOR_STAR_SELECTED } from '../../../config/config';


const SurveyHeader = (props) =>{
    const defaultOptions = [
        "No recomendado", "Basico", "No es malo", "Muy bueno", "Increible"
    ]
    return (
        <section className={style.survey_header}>
            <div className={style.info}>
                <p className={style.p}>Calificación General</p>
                <p className="">¿Usted cómo califica este inmueble?</p>
                <div className={style.stars}>

                    {defaultOptions.map((option) =>{
                        return(
                            <div className={style.star_info}>

                                <SvgStar color={COLOR_STAR_SELECTED}/>
                                <p className={style.description_star}>{option}</p>
                            </div>

                        )
                        // <SvgStar color="#AAAAAA"/>
                    })}
                </div>

            </div>
            {/* <div className="description">
                <p className={style.p}>Calificación General</p>
                <div className={style.stars}>

                    {defaultOptions.map((option) =>{
                        return(

                            <SvgStar color='#AAAAAA'/>

                        )
                        // <SvgStar color="#AAAAAA"/>
                    })}
                </div>
            </div> */}
        </section>
    );
}

export default SurveyHeader;