var card=document.getElementById("cards")
var total=document.getElementById("total")
var  message=document.getElementById("message")
var ctotal=document.getElementById("ctotal")

var pcard=[]

var sum=0
var csum=0
var win=false
var game=true
var sgame=false
var player=prompt("Enter Player Name")
var amount=prompt("Enter the Amount")

function getrandom(){
    var random =Math.floor(Math.random()*13+1)
    if(random>10){
    return 10
    }
    else if(random==1){
    return 11
    }
    else{
    return random
    }    
}
function start(){
    
    sgame=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
    sum=num1+num2
    csum=num3+num4
    pcard=[num1,num2]
    
    
    render()   
}
function render(){
    card.innerHTML="Cards: "
    
    total.innerHTML="total: "
    
    
    for(var i=0; i<pcard.length ;i++){
        card.innerHTML +=` ${pcard[i]} `
        
        
        
    }
    total.innerHTML = `Total : ${sum}`
    ctotal.innerHTML = `Computer total : ${csum}`
    
    if(sum<21){
        message.innerHTML="do you want another card"
    }
   else if(sum==21&&csum<21){
        amount *=2
        message.innerHTML=`Congrats ,${player} You Won Rs. ${amount}`
        win=true
    }
    else {
        message.innerHTML=`Sorry ,${player} You Lost Rs. ${amount}`
        game=false
        
        
    }
    
}
function newcard(){
  if(win==false&&game==true&&sgame==true){
    var num=getrandom()
    pcard.push(num)
    sum +=num
    
    while(csum<17){
        var cnum=getrandom()
        csum +=cnum
    }
    render()
    if(sum>21){
    winner()
    }
    }
}

function winner(){
    if(sgame=true){
        while(csum<17&&csum<sum){
        var cnum=getrandom()
        csum +=cnum
    }
    ctotal.innerHTML=`Computer total: ${csum}`
    if(sum>21|| (csum<=21&&csum>sum)){
        message.innerHTML=`Sorry ,${player} You Lost Rs. ${amount}`
        
    }
    else if(sum=csum){
        message.innerHTML="It is a Tie"
    }
    else{
        amount *=2
        message.innerHTML=`Congrats ,${player} You Won Rs.${amount}`
    }
    game=false
    }
    
}
