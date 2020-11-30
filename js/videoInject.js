var video_wrapper = document.querySelector('.frame');
//  Check to see if youtube wrapper exists

// If user clicks on the video wrapper load the video.
function inject(id){
/* Dynamically inject the iframe on demand of the user.
 Pull the youtube url from the data attribute on the wrapper element. */
    video_wrapper.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
