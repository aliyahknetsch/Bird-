var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var characterTop = 50
var y_vel = 1
document.addEventListener("click", jump)

hole.addEventListener('animationiteration', () => {   
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole.style.top = -(top) + "px";
    counter++;
});
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0 ) {
        y_vel += 0.04
        characterTop += y_vel
        character.style.top = (characterTop) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480) ||((blockLeft<45)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop + 130)))){
        alert("Ha, you lose. Score: " + (counter));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

function jump () {
    jumping = 1
    let jumpCount = 0;
    var jumpInterval = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            y_vel=-2.5
            character.style.top = (characterTop) + "px";
        }
        if(jumpCount>20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0
        }
        jumpCount++
    }, 10);
}