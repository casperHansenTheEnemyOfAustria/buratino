var table = document.querySelectorAll("table")
var selected = document.querySelector("selected")
var addRound = document.querySelector(".add-round")
var addRect = document.querySelector(".add-rect")
var current = document.querySelectorAll("table")
var i1 = 1
var i2 = 17
function plusMinus(operator){
    if(operator == 2){
        // for adding square
        if(i1 <= 15){
            addTable(i1)
            i1 = i1 + 1
        }
        else{
            i1 = 1
        };
    }
    else if(operator == 1){
        if(i2 <= 20){ 
            // for adding circle
            addTable(i2)
            i2 = i2 + 1
        }
        else{
            i2 = 17
        }
    }
    else if(operator == 0){
        removeTable()
    }
}

function addTable(number){
    n = number.toString();
    console.log("at"+n)
    current = document.querySelector(".table"+n)
    console.log("showing table"+n)
    current.classList.remove("hide")        
}

function removeTable(){
    selected.classList.add("hide")
    console.log("removed teble")
}

// addRound.addEventListener("click", plusMinus(1))
// addRect.addEventListener("click", plusMinus(2))