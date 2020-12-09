var table = document.querySelectorAll("table")
var selected = document.querySelector(".selected")
var addRound = document.querySelector(".add-round")
var addRect = document.querySelector(".add-rect")
var current = document.querySelectorAll("table")
var i1 = 1
var i2 = 17
var recentlyDeleted 
var deleted
var deleted1
var deleted2
var temp
function plusMinus(operator){
    
    if(operator == 2){
        temp = i1
        // checks if it has been deleted recently and if it is a square
        if(recentlyDeleted <=15 && deleted1 == true){
            // makes the next one to be shown the same as the recently deleted one
            i1 = recentlyDeleted
        }
        
        // for adding square
        if(i1 <= 15){
            
            addTable(i1)
            if(deleted1 == true){
                // goes bac kone if it has already shown one before
                i1 = temp - 1
            }
            else{
                // makes the item the stored one beforee things were deleted
                i1 = temp
            }
            // resets if something was deleted or not
            deleted1 = false
            // goes on to the next table
            i1 = i1 + 1   
        }
        else{
            // goes back to the first table
            i1 = 1
            // add what happens if there are max tables here
            console.log("max square tables")
        };
        
    }
    else if(operator == 1){
        temp = i2
        // checks if it has been deleted recently and if it is a circle
        if(recentlyDeleted <=20 && deleted2== true){
            
            i2 = recentlyDeleted
        }
        if(i2 <= 20){ 
            // for adding circle
            addTable(i2)
            if(deleted2 == true){
                // assigns the store value -1 since last shownb table wasnt the one before this one
                i2 = temp - 1
            }
            else{
                // assigns the stored value back to the iterator
                i2 = temp
            }
            deleted2 = false
            
            i2 = i2 + 1
        }
        else{
            // add what happens if there are max tables here
            console.log("max circle tables")
            // goes back to the first table
            i2 = 17
        }
    }
    else if(operator == 0){
        // runs remove table function
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
    var selected = document.querySelector(".selected")
    selected.classList.add("hide")
    // takes the id of the recetly deleted table
    name = selected.id
    // stores the id as int
    recentlyDeleted = parseInt(name)

    if(recentlyDeleted <=15){
        // checks if square or circle
        deleted1 = true
    }
    else{
        deleted2 = true
    }
    // this gets used by the show func to show the one recently deleted
    console.log("class name"+name)
}

// addRound.addEventListener("click", plusMinus(1))
// addRect.addEventListener("click", plusMinus(2))