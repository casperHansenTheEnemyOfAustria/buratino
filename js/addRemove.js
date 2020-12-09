var table = document.querySelectorAll("table")
var selected = document.querySelector("selected")
var i1 = 1
var i2 = 17
function plusMinus(operator){
    if(operator == 2){
        if(i1 <= 15){
            addTable(i1)
            i1 += 1
        }
        else{
            i1 = 1
        };
    }
    else if(operator == 1){
        if(i2 <= 20){ 
            addTable(i2)
            i2 += 1
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
    var current = document.querySelector("table"+n)
    console.log("showing table"+n)
    current.classList.remove("hide")
}

function removeTable(){
    selected.classList.add("hide")
    console.log("removed teble")
}

