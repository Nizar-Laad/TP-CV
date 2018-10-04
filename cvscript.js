function hideshow(elementid,elementclass) {
    var x = document.getElementById(elementid);
    
    var k= document.getElementsByClassName(elementclass);
    var i;


    if (x.style.display === "block") {

	for(i=0; i<k.length ;i++){
		k[i].style.display="none";
}

    } else {
	for(i=0; i<k.length ;i++){
		k[i].style.display="none";
}
	
	
	var randvar = 2;
	let timerId = setInterval(function (){x.style.fontSize= randvar++ + "px";}, 70);
setTimeout(() => { clearInterval(timerId);}, 1000);
	   
		
	
        x.style.display = "block";
	
	
	
    }
}  

var tooltipsHTML = document.getElementsByClassName("tooltip");
var tooltips = [];
var tooltiptextsHTML = document.getElementsByClassName("tooltiptext");
var tooltiptexts = [];

for (var i = 0; i < tooltipsHTML.length; i++) {
  tooltips = [...tooltips, tooltipsHTML.item(i)];
  tooltiptexts = [...tooltiptexts, tooltiptextsHTML.item(i)];
}

tooltips.forEach(function(tooltip) {
  tooltip.onmousemove = function(event) {
    var rect = tooltip.getBoundingClientRect();
    var x = event.clientX - rect.x;
    tooltiptexts.forEach(function(tooltiptext) {
      tooltiptext.style.left = x + "px";
    });
  };
});

var levels = {
	Francais : 4,
	Anglais : 4,
	Arabe : 5,
	Espagnol :1

};

for (field in levels) {
  var stars = document.getElementsByClassName(field).item(0);
  var children = stars.children;
  for (var i = 0; i < levels[field]; i++) {
    var star = children.item(i);
    star.className = "fas fa-star";
  }
}
