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

        active = false;
      }

      function drag(e) {
        if (active) {
        
          // adds this to make it so you dot accidentally scroll
          e.preventDefault();
        
          if (e.type === "touchmove") {
            // moves if you move yo fingah
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }

          xOffset = currentX;
          yOffset = currentY;

          setTranslate(currentX, currentY, dragItem);
        }
      }

      function setTranslate(xPos, yPos, el) {
        // adds all the positioning data togetherto make it do its thing
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


    