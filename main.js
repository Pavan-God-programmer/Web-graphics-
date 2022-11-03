// Drawing bacses

// Setup the canavs
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// let's da some stuff

// Draw rectabngle
//set
//use

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); // Set outlien
// css colors
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50);

// Dawn text
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 300, 50);

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 150);

// Draw lines
ctx.lineWidth = 40;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 250);
ctx.lineTo(700, 200);
ctx.stroke();
