function jump() {
	if (!$("#character").hasClass("animate")){
		$("#character").addClass("animate");
	}	
	setTimeout(function(){
        $("#character").removeClass('animate');
}, 500);
}

function duck() {

}

var character = document.getElementById("character");
var block = document.getElementById("block");

var counter = 0;

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<120 && blockLeft>100 && characterTop>=130){
        block.style.animation = "none";
        alert("Noo, try again dude");
        counter=0;
        block.style.animation = "block 3s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 30);


document.onkeydown = function(e) {
    switch(e.which) {

        case 38:
        jump();
        break;

        case 40: 
        duck();
        break;

        case 32:
        jump();
        break;

        default: return; 
    }
    e.preventDefault(); 
};