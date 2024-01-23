import Icon from "./Icon/icon"
function Card({gameEnd,player,onPlay,index}){
    let icon=<Icon/>
    if(player=='X'){
        icon=<Icon name="cross"/>
    }
    else if(player=='O'){
        icon=<Icon name='circle'/>
    }

    return(
        <div className="flex mx-3 w-20 h-20  border-black border-2 rounded-xl
         bg-yellow-300 items-center justify-center" onClick={()=>!gameEnd && player=="" && onPlay(index)}>
            
            {icon}
        
        </div>
    )
}
export default Card