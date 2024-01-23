import { useState } from "react"
import Card from "../Card/card"
import isWinner from "../Helpers/checkWinner"
function Grid({numberOfCards}){
    const [bord,setBord]=useState(Array(numberOfCards).fill(""))
    const [turn, setTurn]=useState(false)
    const[winner,setWinner]=useState(null)
    function play(index){
        if(turn==true){
            bord[index]='O';
        }else{
            bord[index]='X';
        }
        setBord([...bord])
        setTurn(!turn)
        const win=isWinner(bord, turn ? 'O':'X')
        if(win){
            setWinner(win)
        }
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setBord(Array(numberOfCards).fill(""))
    }
        return(
            <div className="">
                {   
                    winner &&(
                     <>
                     <h1 className="text-white">winner is {winner}</h1>
                     <button className="text-white" onClick={reset}>Reset Game</button>
                     </>
                    )
                }
                <h1 className="text-white">Curent-turn: {(turn) ? 'O':'X'}</h1>
                <div className="h-80 w-80 flex flex-wrap justify-center">
                
                    {bord.map((el,idx)=><Card gameEnd={winner ? true:false} key={idx} player={el} onPlay={play} index={idx} />)}
                
                </div>
            </div>
                    
        )
    
}
export default Grid 