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
