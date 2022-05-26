const parallax = document.getElementById("parallax");


window.addEventListener("scroll", function(){
    y_value = window.scrollY 
    console.log(y_value)
parallax.style.backgroundPositionY = `${y_value * 0.6}px`
} 
 )
