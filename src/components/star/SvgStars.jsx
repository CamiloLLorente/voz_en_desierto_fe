import SvgStar from "./SvgStar";
import { useGlobalState } from "../../context/GlobalState";



function SvgStars({question, responseOptions}) {

    const useGlobalStateSurvey = useGlobalState();
    const handleClick = (responseOption) => {
       
        let selectedAnswer = {
            id : question.consecutive,
            number : responseOption.number
        }
        useGlobalStateSurvey.addSelectedAnswer(selectedAnswer);
      
    }
    

    return (
        <>

            {
                responseOptions?.map((responseOption,i) =>{     
                    
                    return (
                        <span onClick={()=> handleClick(responseOption)}>

                            <SvgStar  color={responseOption.color} key={i} onClick={handleClick}/>
                        </span>
                       
        
                    )
                }) 
            }
        </>
    );
}

export default SvgStars;