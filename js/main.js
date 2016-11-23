/*$(document).ready(function(){
	$("#img_2").hover(function(){
	$(this).css("background-color", "pink");
	});
});
*/
//modals
var modal = document.getElementById('modal1');
var btn = document.getElementById("verMas");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
onload = inicia; 

var cantidadCirculos = 5; 

function inicia() {
  for(c=0; c<cantidadCirculos; c++) {
  circulos = document.createElement("div"); 
  circulos.setAttribute("class", "nieve"); 
  document.getElementById("fondoTotal").appendChild(circulos); 
  }
  for(c=0; c<cantidadCirculos; c++) {
  circulos = document.createElement("div"); 
  circulos.setAttribute("class", "nieve"); 
  document.getElementById("fondoTotal").appendChild(circulos); 
  }

  for(n=0; n<cantidadCirculos; n++) {
  document.querySelectorAll("#fondoTotal .nieve")[n].addEventListener("transitionend", function(){caida(this)}, false); 
  }

  setTimeout(function(){
    for(c=0; c<cantidadCirculos; c++) {
    elCirculo = document.querySelectorAll("#fondoTotal .nieve")[c]; 
    elCirculo.style.left = Math.floor(Math.random()*100)+ "vw"; 
    elCirculo.style.transition = "top 5ms linear"; 
    elCirculo.style.top = elCirculo.style.top = ".5vh";
    }
  }, 15);
}

function caida(T) {

  T.style.transition = "";
  T.style.top = "0"; 

  setTimeout(function(){
  T.style.transitionProperty = "left, top"; 
  T.style.transitionDelay = Math.floor(Math.random()*1000)+ "ms"; 
  T.style.transitionDuration = (Math.floor(Math.random()*15000) + 5000)+ "ms"; 
  T.style.transitionTimingFunction = "ease-in, ease-out"; 
  T.style.left = Math.floor(Math.random()*100)+ "vw"; 
  T.style.top = "110vh"; 
  }, 15);  
}

