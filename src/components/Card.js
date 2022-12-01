import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"

export default function Card({ question, asnwer, index }) {
    const [clickClosed , setClickClosed] = useState(false)
    const [clickClosed2 , setClickClosed2] = useState(true)
    const [clickOpen, setClickOpen] = useState(true)
    const [clickOpen2 , setClickOpen2] = useState(true)


    function clickSetaPlay(){
        setClickClosed(true)
        setClickOpen(false)
    }


    function clickSetaVirar(){
        setClickOpen(true)
        setClickOpen2(false)
    }

    return (

        <>
            <CardClosed clicked={clickClosed}>
                <p>
                    {`Pergunta ${index}`}
                </p>
                <img onClick={clickSetaPlay} src={seta_play}/>
            </CardClosed>
            <CardOpen clicked={clickOpen}>
                <p>
                    {question}
                </p>
                <img onClick={clickSetaVirar} src={seta_virar}/>
            </CardOpen>
            <CardOpen2 clicked={clickOpen2}>
                <p>
                    {asnwer}
                </p>
                <button>
                </button>
            </CardOpen2>
            <CardClosed2 clicked={clickClosed2}>

            </CardClosed2>

        </>
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

`