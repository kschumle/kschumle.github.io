let randomnumber1=Math.floor(Math.random() * 13) + 1;
let randomnumber2=Math.floor(Math.random() * 13) + 1;
let randomnumber3=Math.floor(Math.random() * 13) + 1;
let randomnumber4=Math.floor(Math.random() * 13) + 1;
let randomnumber5=Math.floor(Math.random() * 13) + 1;

function Reset(){

    document.getElementById("Card1").textContent="";
    document.getElementById("Card2").textContent="";
    document.getElementById("Card3").textContent="";
    document.getElementById("Card4").textContent="";
    document.getElementById("Card5").textContent="";
    randomnumber1=Math.floor(Math.random() * 13) + 1;
    randomnumber2=Math.floor(Math.random() * 13) + 1;
    randomnumber3=Math.floor(Math.random() * 13) + 1;
    randomnumber4=Math.floor(Math.random() * 13) + 1;
    randomnumber5=Math.floor(Math.random() * 13) + 1;
}


function Start() {
    let card1= randomnumber1;
    console.log(card1);
    

        if (card1==1){
            document.getElementById("Card1").textContent="2";
        
        }
        else if (card1==2) {
            document.getElementById("Card1").textContent="3";
        }
        else if (card1==3) {
            document.getElementById("Card1").textContent="4";
        }
        else if (card1==4) {
            document.getElementById("Card1").textContent="5";
        }
        else if (card1==5) {
            document.getElementById("Card1").textContent="6";
        }
        else if (card1==6) {
            document.getElementById("Card1").textContent="7";
        }
        else if (card1==7) {
            document.getElementById("Card1").textContent="8";
        }
        else if (card1==8) {
            document.getElementById("Card1").textContent="9";
        }
        else if (card1==9) {
            document.getElementById("Card1").textContent="10";
        }
        else if (card1==10) {
            document.getElementById("Card1").textContent="Jack";
        }
        else if (card1==11) {
            document.getElementById("Card1").textContent="Queen";
        }
        else if (card1==12) {
            document.getElementById("Card1").textContent="King";
        }
        else  {
            document.getElementById("Card1").textContent="Ace";
        } 
        return card1;
}


function Higher1() {
    let card2= randomnumber2;
    console.log(card2);

        if (card2==1){
            document.getElementById("Card2").textContent="2";
        
        }
        else if (card2==2) {
            document.getElementById("Card2").textContent="3";
        }
        else if (card2==3) {
            document.getElementById("Card2").textContent="4";
        }
        else if (card2==4) {
            document.getElementById("Card2").textContent="5";
        }
        else if (card2==5) {
            document.getElementById("Card2").textContent="6";
        }
        else if (card2==6) {
            document.getElementById("Card2").textContent="7";
        }
        else if (card2==7) {
            document.getElementById("Card2").textContent="8";
        }
        else if (card2==8) {
            document.getElementById("Card2").textContent="9";
        }
        else if (card2==9) {
            document.getElementById("Card2").textContent="10";
        }
        else if (card2==10) {
            document.getElementById("Card2").textContent="Jack";
        }
        else if (card2==11) {
            document.getElementById("Card2").textContent="Queen";
        }
        else if (card2==12) {
            document.getElementById("Card2").textContent="King";
        }
        else  {
            document.getElementById("Card2").textContent="Ace";
        } 

        if (card2 < randomnumber1) {

            alert("You Lose, Try Again!")
        }

        else{
        }

        return card2;


        
}


function Higher2() {
    let card3= randomnumber3;
    console.log(card3);

        if (card3==1){
            document.getElementById("Card3").textContent="2";
        
        }
        else if (card3==2) {
            document.getElementById("Card3").textContent="3";
        }
        else if (card3==3) {
            document.getElementById("Card3").textContent="4";
        }
        else if (card3==4) {
            document.getElementById("Card3").textContent="5";
        }
        else if (card3==5) {
            document.getElementById("Card3").textContent="6";
        }
        else if (card3==6) {
            document.getElementById("Card3").textContent="7";
        }
        else if (card3==7) {
            document.getElementById("Card3").textContent="8";
        }
        else if (card3==8) {
            document.getElementById("Card3").textContent="9";
        }
        else if (card3==9) {
            document.getElementById("Card3").textContent="10";
        }
        else if (card3==10) {
            document.getElementById("Card3").textContent="Jack";
        }
        else if (card3==11) {
            document.getElementById("Card3").textContent="Queen";
        }
        else if (card3==12) {
            document.getElementById("Card3").textContent="King";
        }
        else  {
            document.getElementById("Card3").textContent="Ace";
        }
        
        if (card3 < randomnumber2){

            alert("You Lose, Try Again!")
        }

        else {

        }

        return card3;
        
}

function Higher3() {
    let card4= randomnumber4;
    console.log(card4);

        if (card4==1){
            document.getElementById("Card4").textContent="2";
        
        }
        else if (card4==2) {
            document.getElementById("Card4").textContent="3";
        }
        else if (card4==3) {
            document.getElementById("Card4").textContent="4";
        }
        else if (card4==4) {
            document.getElementById("Card4").textContent="5";
        }
        else if (card4==5) {
            document.getElementById("Card4").textContent="6";
        }
        else if (card4==6) {
            document.getElementById("Card4").textContent="7";
        }
        else if (card4==7) {
            document.getElementById("Card4").textContent="8";
        }
        else if (card4==8) {
            document.getElementById("Card4").textContent="9";
        }
        else if (card4==9) {
            document.getElementById("Card4").textContent="10";
        }
        else if (card4==10) {
            document.getElementById("Card4").textContent="Jack";
        }
        else if (card4==11) {
            document.getElementById("Card4").textContent="Queen";
        }
        else if (card4==12) {
            document.getElementById("Card4").textContent="King";
        }
        else  {
            document.getElementById("Card4").textContent="Ace";
        } 

        if (card4 < randomnumber3){

            alert("You Lose, Try Again!")
        }

        else {

        }

        return card4;
        
}
function Higher4() {
    let card5= randomnumber5;
    console.log(card5);

        if (card5==1){
            document.getElementById("Card5").textContent="2";
        
        }
        else if (card5==2) {
            document.getElementById("Card5").textContent="3";
        }
        else if (card5==3) {
            document.getElementById("Card5").textContent="4";
        }
        else if (card5==4) {
            document.getElementById("Card5").textContent="5";
        }
        else if (card5==5) {
            document.getElementById("Card5").textContent="6";
        }
        else if (card5==6) {
            document.getElementById("Card5").textContent="7";
        }
        else if (card5==7) {
            document.getElementById("Card5").textContent="8";
        }
        else if (card5==8) {
            document.getElementById("Card5").textContent="9";
        }
        else if (card5==9) {
            document.getElementById("Card5").textContent="10";
        }
        else if (card5==10) {
            document.getElementById("Card5").textContent="Jack";
        }
        else if (card5==11) {
            document.getElementById("Card5").textContent="Queen";
        }
        else if (card5==12) {
            document.getElementById("Card5").textContent="King";
        }
        else  {
            document.getElementById("Card5").textContent="Ace";
        } 

        if (card5 < randomnumber4){

            alert("You Lose, Try Again!")
        }

        else {

            alert("You Win! Congratulations")

        }
        
}

function Lower1() {
    let card2= randomnumber2;
    console.log(card2);

        if (card2==1){
            document.getElementById("Card2").textContent="2";
        
        }
        else if (card2==2) {
            document.getElementById("Card2").textContent="3";
        }
        else if (card2==3) {
            document.getElementById("Card2").textContent="4";
        }
        else if (card2==4) {
            document.getElementById("Card2").textContent="5";
        }
        else if (card2==5) {
            document.getElementById("Card2").textContent="6";
        }
        else if (card2==6) {
            document.getElementById("Card2").textContent="7";
        }
        else if (card2==7) {
            document.getElementById("Card2").textContent="8";
        }
        else if (card2==8) {
            document.getElementById("Card2").textContent="9";
        }
        else if (card2==9) {
            document.getElementById("Card2").textContent="10";
        }
        else if (card2==10) {
            document.getElementById("Card2").textContent="Jack";
        }
        else if (card2==11) {
            document.getElementById("Card2").textContent="Queen";
        }
        else if (card2==12) {
            document.getElementById("Card2").textContent="King";
        }
        else  {
            document.getElementById("Card2").textContent="Ace";
        } 

        if (card2 > randomnumber1) {

            alert("You Lose, Try Again!")
        }

        else{
        }

        return card2;
        
}


function Lower2() {
    let card3= randomnumber3;
    console.log(card3);

        if (card3==1){
            document.getElementById("Card3").textContent="2";
        
        }
        else if (card3==2) {
            document.getElementById("Card3").textContent="3";
        }
        else if (card3==3) {
            document.getElementById("Card3").textContent="4";
        }
        else if (card3==4) {
            document.getElementById("Card3").textContent="5";
        }
        else if (card3==5) {
            document.getElementById("Card3").textContent="6";
        }
        else if (card3==6) {
            document.getElementById("Card3").textContent="7";
        }
        else if (card3==7) {
            document.getElementById("Card3").textContent="8";
        }
        else if (card3==8) {
            document.getElementById("Card3").textContent="9";
        }
        else if (card3==9) {
            document.getElementById("Card3").textContent="10";
        }
        else if (card3==10) {
            document.getElementById("Card3").textContent="Jack";
        }
        else if (card3==11) {
            document.getElementById("Card3").textContent="Queen";
        }
        else if (card3==12) {
            document.getElementById("Card3").textContent="King";
        }
        else  {
            document.getElementById("Card3").textContent="Ace";
        }
        
        if (card3 > randomnumber2) {

            alert("You Lost. Try Again!")
        }

        else{
        }

        return card3;
        
}

function Lower3() {
    let card4= randomnumber4;
    console.log(card4);

        if (card4==1){
            document.getElementById("Card4").textContent="2";
        
        }
        else if (card4==2) {
            document.getElementById("Card4").textContent="3";
        }
        else if (card4==3) {
            document.getElementById("Card4").textContent="4";
        }
        else if (card4==4) {
            document.getElementById("Card4").textContent="5";
        }
        else if (card4==5) {
            document.getElementById("Card4").textContent="6";
        }
        else if (card4==6) {
            document.getElementById("Card4").textContent="7";
        }
        else if (card4==7) {
            document.getElementById("Card4").textContent="8";
        }
        else if (card4==8) {
            document.getElementById("Card4").textContent="9";
        }
        else if (card4==9) {
            document.getElementById("Card4").textContent="10";
        }
        else if (card4==10) {
            document.getElementById("Card4").textContent="Jack";
        }
        else if (card4==11) {
            document.getElementById("Card4").textContent="Queen";
        }
        else if (card4==12) {
            document.getElementById("Card4").textContent="King";
        }
        else  {
            document.getElementById("Card4").textContent="Ace";
        } 

        if (card4 > randomnumber3) {

            alert("You Lost. Try Again!")
        }

        else{
        }

        return card4;
        
}
function Lower4() {
    let card5= randomnumber5;
    console.log(card5);

        if (card5==1){
            document.getElementById("Card5").textContent="2";
        
        }
        else if (card5==2) {
            document.getElementById("Card5").textContent="3";
        }
        else if (card5==3) {
            document.getElementById("Card5").textContent="4";
        }
        else if (card5==4) {
            document.getElementById("Card5").textContent="5";
        }
        else if (card5==5) {
            document.getElementById("Card5").textContent="6";
        }
        else if (card5==6) {
            document.getElementById("Card5").textContent="7";
        }
        else if (card5==7) {
            document.getElementById("Card5").textContent="8";
        }
        else if (card5==8) {
            document.getElementById("Card5").textContent="9";
        }
        else if (card5==9) {
            document.getElementById("Card5").textContent="10";
        }
        else if (card5==10) {
            document.getElementById("Card5").textContent="Jack";
        }
        else if (card5==11) {
            document.getElementById("Card5").textContent="Queen";
        }
        else if (card5==12) {
            document.getElementById("Card5").textContent="King";
        }
        else  {
            document.getElementById("Card5").textContent="Ace";
        }
        
        if (card5 > randomnumber4){

            alert("You Lose, Try Again!")
        }

        else {

            alert("You Win! Congratulations")

        }

   
        
}



