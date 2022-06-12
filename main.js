
// var myInput = document.createElement("input")
// document.body.appendChild(myInput)
// myInput.placeholder= "Enter full name:";
// var myDate = document.createElement("input")
// document.body.appendChild(myDate)
// myDate.type = "date";
// myDate.addEventListener("focusout" ,saveDeatiles)
// myInput.addEventListener("focusout" ,saveDeatiles)


// function saveDeatiles() {
//     console.log( "name " +myInput.value + " "+  "date" +myDate.value); 
//     // var inputName =myInput.value;
//     // var inputDate =myDate.value;
// }
console.log("hello world");

var distance = 0;
var distanceLeft = 0;
var distanceTop = 0;
var intervalId;
function playGame(){
    play_Game.style.display = "none";
    intervalId = setInterval(()=> {
        player.style.left = distanceLeft++ + 'px';
        player.style.top = distanceTop++ + 'px';
        if(distance>=500){
            clearInterval(intervalId)
            player.src
            alert("Game Over")
        }
    },50)
}

function getPlayerKey(eventG){
    if(eventG.key ==  "ArrowUp"){
        player.style.top = distanceTop-- + 'px';
        
    }
    else if (eventG.key== " "){
        clearInterval(intervalId)
    play_Game.style.display = "none";

    }
}

setTimeout(()=> {
    distanceLeft=0
    distanceTop=0
    play_Game.style.display = "block";
    alert("time over")
    
},2000)

