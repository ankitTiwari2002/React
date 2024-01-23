function isWinner(bord,symbol){
    //row
    if(bord[0]==bord[1] && bord[1]==bord[2] && bord[2]==symbol) return symbol;
    if(bord[3]==bord[4] && bord[4]==bord[5] && bord[5]==symbol) return symbol;
    if(bord[6]==bord[7] && bord[7]==bord[8] && bord[8]==symbol) return symbol;

    //column
    if(bord[0]==bord[3] && bord[3]==bord[6] && bord[6]==symbol) return symbol;
    if(bord[1]==bord[4] && bord[4]==bord[7] && bord[7]==symbol) return symbol;
    if(bord[2]==bord[5] && bord[5]==bord[8] && bord[8]==symbol) return symbol;

    //diagonal
    if(bord[0]==bord[4] && bord[4]==bord[8] && bord[4]==symbol) return symbol;
    if(bord[2]==bord[4] && bord[4]==bord[6] && bord[4]==symbol) return symbol;
}
export default isWinner