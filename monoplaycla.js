const player1button=document.getElementById("one");
const player2button=document.getElementById("two");

var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
class player{
 constructor(name,oldpos,amount){
     this.name=name;
     this.oldpos=oldpos;
     this.amount=amount;
 }
 rollDice() {
    var currentposition=Math.floor(Math.random()*6)+1;
    console.log("player got",currentposition);
    changeposition(currentposition);
 }
 changeposition(newpos){
    var newposition=this.oldpos+newpos;
    if(newposition<board.length){
        console.log(newposition);
    this.oldpos=newposition;
    
    console.log("player new",this.oldpos);
    }
    else{
        newposition=newposition%15;
        this.oldpos=newposition;
    console.log("player new",this.oldpos);
    }
 }

}
let p1=new player("raj",0,1000);
let p2=new player("hari",0,1000);


player1button.addEventListener('click',function()
{
    p1.rollDice()
},false);
player2button.addEventListener('click',function()
{
    p2.rollDice()
},false);
