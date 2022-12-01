import Card from "./Card"
import { cards } from "./Deck"

export default function Cards(){
    return(
        <>
            {cards.map((el,i)=> 
            
            <Card key={i+1}  question={el.question} asnwer={el.answer} index = {i+1}/>

            
            )}
            
        
        </>
    )
}

