import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import Buttons from "./Buttons"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"

export default function Card({ question, asnwer, index, setDoneCount ,doneCount}) {
    const [clickClosed , setClickClosed] = useState(false)
    const [clickClosed2 , setClickClosed2] = useState(true)
    const [clickOpen, setClickOpen] = useState(true)
    const [clickOpen2 , setClickOpen2] = useState(true)
    const [wordColor , setWordColor] = useState("")


    function clickSetaPlay(){
        setClickClosed(true)
        setClickOpen(false)
    }


    function clickSetaVirar(){
        setClickOpen(true)
        setClickOpen2(false)
    }

    function selectIcon(){
        if(wordColor === "#FF3030"){
            return icone_erro
        }
        if(wordColor === "#FF922E"){
        return icone_quase
        }
        if(wordColor === "#2FBE34"){
            return icone_certo
        }
    }

    function selectTest(){
        if(wordColor === "#FF3030"){
            return "no-icon"
        }
        if(wordColor === "#FF922E"){
            return "partial-icon"
        }
        if(wordColor === "#2FBE34"){
            return "zap-icon"
        }
    }
        

        

    return (

        <div data-test="flashcard" >
            <CardClosed clicked={clickClosed}>
                <p data-test="flashcard-text">
                    {`Pergunta ${index}`}
                </p>
                <img data-test="play-btn" onClick={clickSetaPlay} src={seta_play}/>
            </CardClosed>
            <CardOpen clicked={clickOpen}>
                <p data-test="flashcard-text">
                    {question}
                </p>
                <img data-test="turn-btn" onClick={clickSetaVirar} src={seta_virar}/>
            </CardOpen>
            <CardOpen2 clicked={clickOpen2}>
                <p data-test="flashcard-text">
                    {asnwer}
                </p>
                <Buttons 
                setDoneCount={setDoneCount} 
                doneCount={doneCount} 
                setClickClosed2={setClickClosed2}
                setClickOpen2={setClickOpen2}
                setWordColor={setWordColor}
                />
            </CardOpen2>
            <CardClosed2 color={wordColor} clicked={clickClosed2}>
                <p data-test="flashcard-text">
                    {`Pergunta ${index}`}
                </p>
                <img data-test={selectTest()} src={selectIcon()} />
            </CardClosed2>

        </div>
    )
}

const CardClosed = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props=> props.clicked?"none":"flex"};
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img{
        cursor: pointer;
    }
`

const CardOpen = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props=> props.clicked?"none":"flex"};
    flex-direction: column;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;

    }

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`
const CardOpen2 = styled(CardOpen)`
    display: ${props=> props.clicked?"none":"flex"};
    
`
const CardClosed2 = styled(CardClosed)`
    display: ${props=> props.clicked?"none":"flex"};
    p{
        color:${props=> props.color};
        text-decoration: line-through;
    }
    img{
        cursor: auto;
    }
`