function resetVideos(){
    // this resets all the video tags
      frame1 = document.querySelector(".frame1")
      frame2 = document.querySelector(".frame2")  
      frame3 = document.querySelector(".frame3")  
      frame4 = document.querySelector(".frame4")
      
      frame1.innerHTML = " "
      frame2.innerHTML = " "
      frame3.innerHTML = " "
      frame4.innerHTML = " "
}



function videos(num){
    // add the video embed id to the id
    if (num == 1){
        id = "u8a-z8ExrGk"
    }
    if (num == 2){
        id = "lvPeqqdYqgk"
    }
    if (num == 3){
        id = "-SyOdY81OVk"
    }
    if (num == 4){
        id = "Uf7_-DXAqKo"
    }

    console.log("clicks"+num)
    var video_wrapper = document.querySelector('.frame'+num); 
    resetVideos()
    // this puts the vibeo embed wherever its told to
    video_wrapper.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'?autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

