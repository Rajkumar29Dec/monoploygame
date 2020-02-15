const player1button=document.getElementById("one");
const player2button=document.getElementById("two");
// console.log(player1button)
player1button.addEventListener('click',rolldice_1);
player2button.addEventListener('click',rolldice_2);
// var player1position=0;
// var player2position=0;
// var player1amount=500;
// var player2amount=500;
// var amount=player1amount;
var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
var player1=["hari",0,1000];
var player2=["haran",0,1000];
// if(player2[2]>0 && player1[2]>0){
function rolldice_1(){
    if(player1[2]>=0){
    let position=Math.floor(Math.random()*6)+1;
    console.log("Player-1 roll",position);
    changeposition1(player1[1],position);
    }
}
function rolldice_2(){
    if(player2[2]>=0){
    let position=Math.floor(Math.random()*6)+1;
    console.log("Player-2 roll",position);
    changeposition2(player2[1],position);
}
}
function changeposition1(old,currentposition){
    if(player1[2]>=0){
    var newposition=old+currentposition;
    if(newposition<board.length){
    player1[1]=newposition;
    console.log("player-1",player1[1]);
    changeMoney1(player1[1]);
    }
    else{
        newposition=newposition%15;
        player1[1]=newposition;
    console.log("player-1",player1[1]);
    changeMoney1(player1[1]);
    }
}
}
function changeposition2(old,currentposition){
    if(player2[2]>=0){
    var newposition=old+currentposition;
    if(newposition<board.length){
    player2[1]=newposition;
    console.log("player-2",player2[1]);
    changeMoney2(player2[1]);
    }
    else{
        newposition=newposition%15;
        player2[1]=newposition;
    console.log("player-2",player2[1]);
    changeMoney2(player2[1]);
    }
}
}
function changeMoney1(p1){
    if(player1[2]>=0){
    var updateMoney=0;
    if(p1<board.length){
        updateMoney=player1[2]-board[p1-1];
    }
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    player1[2]=updateMoney;
    console.log("Player-1 Money",player1[2]);
}
}
function changeMoney2(p2){
    if(player2[2]>=0){
    var updateMoney=0;
    if(p2<board.length){
        updateMoney=player2[2]-board[p2-1];
    }
    else{
        p2=p2%15;
        updateMoney=player2[2]-board[p2-1];
    }
    player2[2]=updateMoney;
    console.log("Player-2 Money",player2[2]);
}
}
// }
// for (let i = 0;i<position.length; i++){
// for (let j = 0; j < value.length; j++) {
//     positon[i] = array[j];
    
// }
// }
// function playgame1(){
// function rand(){
//     var dice = Math.ceil(Math.random())%6+1;
//     update(dice);
//  }
// function update(no){
//        var updateposition1=player1position+no;
//     //    var updateposition2=player2position+no;
//        valueupdate(updateposition1);
// }
// function valueupdate(no){
//       if(amount>0){
//       console.log("you are in the position of"+ no);
//       console.log("possition amount is"+ value[no]);
//       console.log("you have purchased");
//       amount=
//       console.log("Balance "+ amount);
//       }
//       else{
//           console.log("Game Over");
//       }
// }
// }

// document.getElementById("player1").addEventListener("click", rand);