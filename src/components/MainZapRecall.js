import styled from "styled-components"
import logo from "../assets/img/logo.png"
import Cards from "./Cards"

export default function MainZapRecall() {
    return (
        <ScreenConteiner>
            <Title>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </Title>
            <Cards/>


        </ScreenConteiner>

    )
}

const ScreenConteiner = styled.div`

    background-color: #FB6B6B;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
 

`

const Title = styled.section`

    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
        }

    img{
        width: 52px;
    }
    
 


`