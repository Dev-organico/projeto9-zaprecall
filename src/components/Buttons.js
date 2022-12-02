import styled from "styled-components"

export default function Buttons({setDoneCount,doneCount,setClickOpen2,setClickClosed2,setWordColor}){
    let finalColor =  ""
    

    function clickButton(color){
        setDoneCount(doneCount + 1)
        setClickOpen2(true)
        setClickClosed2(false)
        setWordColor(color)
        
    }

    return(
        <DivButtons>
            <ButtonRed data-test="no-btn" onClick={()=> clickButton("#FF3030")}>
                Não lembrei
            </ButtonRed>
            <ButtonOrange data-test="partial-btn" onClick={()=> clickButton("#FF922E")}>
                Quase não lembrei
            </ButtonOrange>
            <ButtonGreen data-test="zap-btn" onClick={()=> clickButton("#2FBE34")}>
                Zap!
            </ButtonGreen>
        </DivButtons>
        
        
    )
        
}

const DivButtons = styled.div`
    width: 300px;
    height: 38px;
    display: flex;
    justify-content: space-between;

`
const ButtonRed = styled.button`
    height: 37px;
    width: 85px;
    border: none;
    border-radius:3px;
    background-color:#FF3030;
    cursor:pointer;
    font-family:"Recursive";
    font-size: 12px;
    color: white;
    font-weight:400;

    
        
    
`

const ButtonOrange = styled(ButtonRed)`
    background-color:#FF922E;
`
const ButtonGreen = styled(ButtonRed)`
    background-color:#2FBE34;
`
