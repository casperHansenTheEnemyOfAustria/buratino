var user = detect.parse(navigator.userAgent);
var map = document.querySelector(".map-ovl")

if(user.os.name == "Windows 7" || user.os.name == "Windows 8" || user.os.name == "Windows 10" || user.os.name == "Mac OS"){
 console.log("this is a desktop")
 var message = document.querySelector(".map-message")
 message.classList.add("two")
 map.classList.remove("two")
 map.classList.remove("overlay")
 map.classList.add("hide")
}
else{
    var message = document.querySelector(".map-message")
    message.classList.add("hide")
    

}