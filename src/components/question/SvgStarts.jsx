import SvgStart from "./SvgStart";

function SvgStarts({color, responseOptions}) {

    return (
        <>

            {
                responseOptions?.map((responseOption,i) =>{       
                    return (
                       
                        <SvgStart color={color} responseOption={responseOption}/>
        
                    )
                }) 
            }
        </>
    );
}

export default SvgStarts;