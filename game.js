var dude= document.getElementById('guy');
var container= document.getElementById('container');
function anim(e){
alert(e.keyCode);
}
document.onkeydown = anim;
