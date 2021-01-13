var ovlBackground = document.querySelector(".ovlBackground")
var ovlBackgroundArray = document.querySelectorAll(".ovlBackground")
var closePageArray = document.querySelectorAll(".xclose")
var wifiClose = document.querySelectorAll(".wifi-close")

// functions for hiding and showing the background layer on every page at the clikc of a button :D
function hidebg(){
    ovlBackgroundArray.forEach(element => {
        element.classList.add("hide")
    });
}
function showbg(){
    ovlBackgroundArray.forEach(element => {
        element.classList.remove("hide")
    });
}
// these are for the different overlays of a site
// add them to anything that you want toggleable
var one = document.querySelectorAll(".one");
var two = document.querySelectorAll(".two");
var three = document.querySelectorAll(".three");
var four = document.querySelectorAll(".four");
var five = document.querySelectorAll(".five");
var six = document.querySelectorAll(".six");

// had to make these weirrd functions to use for every single overlay/buttonm on every page but now it works beautifully 
 // shows overlays
function showone(){
    one.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
    
}
function showtwo(){
    two.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
}
function showthree(){
    three.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
}
function showfour(){
    four.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
}
function showfive(){
    five.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
}
function showsix(){
    six.forEach(element => {
        element.classList.remove("hide")
    });
    window.scrollTo(0,0);
}

// hides overlays
function hideone(){
    one.forEach(element => {
        element.classList.add("hide")
    });
}
function hidetwo(){
    two.forEach(element => {
        element.classList.add("hide")
    });
}
function hidethree(){
    three.forEach(element => {
        element.classList.add("hide")
    });
}
function hidefour(){
    four.forEach(element => {
        element.classList.add("hide")
    });
}
function hidefive(){
    five.forEach(element => {
        element.classList.add("hide")
    });
}
function hidesix(){
    six.forEach(element => {
        element.classList.add("hide")
    });
}


// these are the different buttons on the site oderered from top to bottom. add this class to anything yuo want to
// toggle the overlays with
var btn1 = document.querySelectorAll(".btn1")
var btn2 = document.querySelectorAll(".btn2")
var btn3 = document.querySelectorAll(".btn3")
var btn4 = document.querySelectorAll(".btn4")
var btn5 = document.querySelectorAll(".btn5")
var btn6 = document.querySelectorAll(".btn6")



function resetOvls(){
   
    var everyOvl = document.querySelector(".overlay");
    everyOvl.classList.add("hide");
    console.log("hiding OVL") 
    hidebg()
    // added these for debug purposes. doesnt work witout them
    hideone()
    hidetwo()
    hidethree()
    hidefour()
    hidefive()
    hidesix()
    document.getElementById("slide-box").classList.remove("hide")
};


function showOvl(which){
    // make a func for each overlay
    if(which == "1"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showone()
        console.log("showing OVL")
        showbg()
        // hides the slidebox so that you cant slide down the curtain when you have an overlay up
        document.getElementById("slide-box").classList.add("hide")
    }
    if(which == "2"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showtwo()
        console.log("showing OVL")
        showbg()
        document.getElementById("slide-box").classList.add("hide")
    }
    if(which == "3"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showthree()
        console.log("showing OVL")
        showbg()
        document.getElementById("slide-box").classList.add("hide")
    }
    if(which == "4"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showfour()
        console.log("showing OVL")
        showbg()
        document.getElementById("slide-box").classList.add("hide")
    }
    if(which == "5"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showfive()
        console.log("showing OVL")
        showbg()
        document.getElementById("slide-box").classList.add("hide")
    }
    if(which == "6"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        showsix()
        console.log("showing OVL")
        showbg()
        document.getElementById("slide-box").classList.add("hide")
    }
}

// these are the event listeners that execute the code on click
btn1.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("1")
});
})
btn2.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("2")
});
})
btn3.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("3")
    })
});
btn4.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("4")
    })
});
btn5.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("5")
    })
});
btn6.forEach(element => {
    element.addEventListener("click", function(){
        showOvl("6")
    })
});

// hides all elements and resets its back to main page
ovlBackgroundArray.forEach(element => {
    element.addEventListener("click", function(){
        resetOvls()
    })
});

// Makes so you can click the x to close things
closePageArray.forEach(element => {
    element.addEventListener("click", function(){
        resetOvls()
    })
});
 
wifiClose.forEach( element => {
    element.addEventListener("click", function(){
        document.getElementById("slide-box").classList.add("hide")
        console.log("added hide to slide box")
        // scrolls back to the initial position for iphones 
        if(user.browser.family == "Mobile Safari" || "Chrome Mobile iOS"){
            window.scrollTo(0,25)
            console.log("ew youre using an apple device")
        }
    })
});