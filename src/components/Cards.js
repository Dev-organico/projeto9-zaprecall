import Card from "./Card"
import cards from "./Deck"

export default function Cards({setDoneCount,doneCount}){
    return(
        <>
            {cards.map((el,i)=> 
            
            <Card key={i+1}  doneCount={doneCount} setDoneCount={setDoneCount}  question={el.question} asnwer={el.answer} index = {i+1}/>

            
            )}
            
        
        </>
    )
}

