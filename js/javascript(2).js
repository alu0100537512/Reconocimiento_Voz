{\rtf1\ansi\deff0{\fonttbl{\f0\fnil\fcharset0 Courier New;}}
{\*\generator Msftedit 5.41.21.2509;}\viewkind4\uc1\pard\lang3082\f0\fs22 //Javascript Document\par
window.onload = hablar;\par
var color1 = "#F3E2A9";\par
var pizarra_canvas;\par
var pizarra_context;\par
var eleccion = 0;\par
\par
function hablar()\{\par
\par
\tab pizarra_canvas = document.getElementById("pizarra");\par
\tab pizarra_context = pizarra_canvas.getContext("2d");\par
\tab pizarra_canvas.addEventListener("click", crearEsfera,false);\par
\par
\tab var speech = new webkitSpeechRecognition();\par
\tab speech.continuous = true;\par
\tab speech.interimResults = false;\par
\tab speech.lang = "es-ES";\par
\tab\par
\tab speech.onresult = function (event)\{\par
\tab\tab var textArea = document.getElementById("textArea");\par
\tab\tab var content = event.results[event.results.length-1][0].transcript;\par
\tab\tab textArea.innerHTML += " "+content;\par
\tab\tab switch(content)\{\par
\tab\tab\tab case 'rojo':\par
\tab\tab\tab\tab color1 = "#F30B0B";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case ' rojo':\par
\tab\tab\tab\tab color1 = "#F30B0B";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case 'azul':\par
\tab\tab\tab\tab color1 = "#3E18E7";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case ' azul':\par
\tab\tab\tab\tab color1 = "#3E18E7";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case 'verde':\par
\tab\tab\tab\tab color1 = "#18E72C";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case ' verde':\par
\tab\tab\tab\tab color1 = "#18E72C";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case 'amarillo':\par
\tab\tab\tab\tab color1 = "#FBF829";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case ' amarillo':\par
\tab\tab\tab\tab color1 = "#FBF829";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case 'blanco':\par
\tab\tab\tab\tab color1 = "#FFFFFF";\par
\tab\tab\tab\tab break;\par
\tab\tab\tab case ' blanco':\par
\tab\tab\tab\tab color1 = "#FFFFFF";\par
\tab\tab\tab\tab break;\par
\tab\tab\}\par
\tab\tab pizarra_canvas.addEventListener("click", crearEsfera,false);\par
\tab\}\par
\tab\par
\tab speech.onend = function()\{\par
\tab\tab console.log("Fin speech");\par
\tab\}\tab\par
\par
\tab speech.start();\tab\tab\par
\}\par
\par
function crearEsfera(e)\{\par
\tab pizarra_context.beginPath();\par
\tab pizarra_context.fillStyle = color1;\par
if (x%2==0)\par
\tab pizarra_context.rect(e.clientX-\tab pizarra_canvas.offsetLeft,e.clientY-pizarra_canvas.offsetTop, 50, 50);\par
\pard else\par
\pard     pizarra_context.arc(e.clientX-\tab pizarra_canvas.offsetLeft,e.clientY-\tab pizarra_canvas.offsetTop,20,0*Math.PI,2*Math.PI);\par
\par
\tab pizarra_context.fill();\par
\tab pizarra_context.closePath();\par
\tab pizarra_context.stroke();\par
\pard   \tab x++;\par
\pard\}\par
\par
\par
\par
}
 