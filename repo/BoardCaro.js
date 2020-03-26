let flag=true;
let Caro = function (rows,cols) {
    this.rows = rows;
    this.cols = cols;

    this.drawBoardCaro = function () {
        let board = [];
        board='<table style="position: absolute" width="'+this.cols*33+'px" height="'+this.rows*33+'px" border="1px solid black" cellspacing="0" cellpadding="3">';
        for (let i=0;i<this.cols;i++){
            board+='<tr>';
            for (let j=0;j<this.rows;j++){
                board+='<td onclick="player(this)" align="center" id="\'+i+\',\'+j\'">&nbsp;&nbsp;</td>'
            }
            board+='</tr>';
        }
        board+='</table>';
        document.getElementById("tableCaro").innerHTML = board;
    }
};


function player(cell) {
   if (flag){
       cell.innerHTML = "X";
       flag=false;
   }else {
       cell.innerHTML ="O";
       flag=true;
   }
}