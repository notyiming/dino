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
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<100 && blockLeft>80 && characterBottom<=20){
        block.style.animation = "none";
        alert("Click OK to restart");
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