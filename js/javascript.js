window.onload = inicia;
var color1 = "#FFFFFF";
var pizarra_canvas;
var pizarra_context;
var x = 0;

function inicia(){

	pizarra_canvas = document.getElementById("pizarra");
	pizarra_context = pizarra_canvas.getContext("2d");
	pizarra_canvas.addEventListener("click", crearEsfera,false);

	var speech = new webkitSpeechRecognition();
	speech.continuous = true;
	speech.interimResults = false;
	speech.lang = "es-ES";
	
	speech.onresult = function (event){
		var textArea = document.getElementById("textArea");
		var content = event.results[event.results.length-1][0].transcript;
		textArea.innerHTML += " "+content;
		switch(content){
			case 'rojo':
				color1 = "#F30B0B";
				break;
			case ' rojo':
				color1 = "#F30B0B";
				break;
			case 'azul':
				color1 = "#3E18E7";
				break;
			case ' azul':
				color1 = "#3E18E7";
				break;
			case 'verde':
				color1 = "#18E72C";
				break;
			case ' verde':
				color1 = "#18E72C";
				break;
			case 'amarillo':
				color1 = "#FBF829";
				break;
			case ' amarillo':
				color1 = "#FBF829";
				break;
			case 'blanco':
				color1 = "#FFFFFF";
				break;
			case ' blanco':
				color1 = "#FFFFFF";
				break;
		}
		pizarra_canvas.addEventListener("click", crearEsfera,false);
	}
	
	speech.onend = function(){
		console.log("Fin speech");
	}	

	speech.start();		
}

function crearEsfera(e){
	pizarra_context.beginPath();
	pizarra_context.fillStyle = color1;
if (x%2==0)
{
	pizarra_context.rect(e.clientX-pizarra_canvas.offsetLeft-20,e.clientY-pizarra_canvas.offsetTop-20, 40, 40);
}
else
{
	pizarra_context.arc(e.clientX-pizarra_canvas.offsetLeft,e.clientY-pizarra_canvas.offsetTop,20,0*Math.PI,2*Math.PI);
}
	pizarra_context.fill();
	pizarra_context.closePath();
	pizarra_context.stroke();
x++;
}


