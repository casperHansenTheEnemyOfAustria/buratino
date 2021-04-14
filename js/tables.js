// for the love of all that is holy do not check the console i beg you
// console looks fine again
function warningText(){
  var warning = document.querySelector(".warning");
  var warning2 = document.querySelector(".warning2");
  warning.classList.add("hide");
  warning2.classList.add("hide")
}
function colliding(){
  function collisionDetection(number2){
      dragMe = document.querySelector(".selected")
      rect = document.querySelector(".table"+number2)
      var warning = document.querySelector(".warning")
      var warning2 = document.querySelector(".warning2")
      function isCollapsed(dragMe, rect){
          var object_1 = dragMe.getBoundingClientRect();
          var object_2 = rect.getBoundingClientRect();
          // checks if boundaries of the two items collide
          if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
              object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
          //   rect.classList.add("collide");
                // does something on collision
              if (number2 == "16"){
                console.log("collision detected at skåpsbyrå")
                warning2.classList.remove("hide")
              }
              else{
                console.log("collision detected at"+number2)
                warning.classList.remove("hide")
              }
              // setTimeout(function(){
              //     warning.classList.add("hide")
              // }, 3000)
          }
        
          //   rect.classList.remove("collide");
            // undoes something on not collision
            
          
      }
      if (rect != dragMe){
          // makes it do that an item cannot collide with itself
          isCollapsed(dragMe, rect)
      }

  } 
  function multiFunc(number){
    // runs function on all of the items 
      collisionDetection("1")
      collisionDetection("2")
      collisionDetection("3")
      collisionDetection(  "4")
      collisionDetection(  "5")
      collisionDetection(  "6")
      collisionDetection(  "7")
      collisionDetection(  "8")
      collisionDetection(  "9")
      collisionDetection(  "10")
      collisionDetection(  "11")
      collisionDetection(  "12")
      collisionDetection(  "13")
      collisionDetection(  "14")
      collisionDetection(  "15")
      collisionDetection(  "16")
  }
  // runs function on all of the items^2
  multiFunc("1")
  multiFunc("2")
  multiFunc("3")
  multiFunc("4")
  multiFunc("5")
  multiFunc("6")
  multiFunc("7")
  multiFunc("8")
  multiFunc("9")
  multiFunc("10")
  multiFunc("11")
  multiFunc("12")
  multiFunc("13")
  multiFunc("14")
  multiFunc("15")
}





var table = document.querySelector(".table")

document.querySelector(".table15").classList.add("selected")
tables("1")
tables("2")
tables("3")
tables("4")
tables("5")
tables("6")
tables("7")
tables("8")
tables("9")
tables("10")
tables("11")
tables("12")
tables("13")
tables("14")
tables("15")


function tables(number){
  console.log("running on" + number)
  var dragItem = document.querySelector(".table" + number);
  var containers = document.querySelectorAll(".table" + number)

  // soon to be added for coloring
  function resetColors(){
    var tables = document.querySelectorAll(".table")
    tables.forEach( table => {
    table.classList.remove("selected")
    }
    );
  }
  
  
// makes the selected item look selected
  
  

      var active = false;
      var currentX;
      var currentY;
      var initialX;
      var initialY;
      var xOffset = 0;
      var yOffset = 0;
  
  containers.forEach( container => {
      container.addEventListener("touchstart", dragStart, false);
      container.addEventListener("touchend", dragEnd, false);
      container.addEventListener("touchmove", drag, false);
      container.addEventListener("mousedown", dragStart, false);
      container.addEventListener("mouseup", dragEnd, false);
      container.addEventListener("mousemove", drag, false);
  });




      function dragStart(e) {
        resetColors()
       
        dragItem.classList.add("selected")
        // check pos at start
        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
          active = true;
        }
      }

      function dragEnd(e) {
        // leave pos at end
        initialX = currentX;
        initialY = currentY;
        warningText()
        colliding()
        active = false;
        // colision detetction once someone lets go of table
        
      }

      function drag(e) {
        if (active) {
        
          // adds this to make it so you dot accidentally scroll
          e.preventDefault();
        
          if (e.type === "touchmove") {
            // moves if you move yo fingah
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
            warningText()
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }

          xOffset = currentX;
          yOffset = currentY;
          colliding()
          setTranslate(currentX, currentY, dragItem);
        }
      }

      function setTranslate(xPos, yPos, el) {
        // adds all the positioning data togetherto make it do its thing
        warningText()
        colliding()
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }

    // functions for rotating the tables
    var horizontal = document.querySelector(".horizontal")
    var vertical = document.querySelector(".vertical")
    function rotationAdd(){
      var rotatable = document.querySelector(".selected")
      rotatable.classList.add("rotated-table")
    }
    function rotationRemove(){
      var rotatable = document.querySelector(".selected")
      rotatable.classList.remove("rotated-table")
    }

    horizontal.addEventListener("click", rotationAdd())
    vertical.addEventListener("click", rotationRemove())


    