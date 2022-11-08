// Drawing bacses

// Setup the canavs
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//stroe image
let htmlLogoImg = document.getElementById("html-log");
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
ctx.strokeText("Hello Canvas!", 350, 100);

// Draw lines
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(700, 150);
ctx.lineTo(600, 100);
ctx.stroke();

// Graw a polygon
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath();
ctx.fill();

//Circlrs
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000ff";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.lineWidth = 2;
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 500, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.lineWidth = 2;
ctx.fillStyle = "#FFFF00";
ctx.beginPath();
ctx.arc(250, 500, 20, 0, 2 * Math.PI);
ctx.fill();
//draw image
ctx.drawImage(htmlLogoImg, 200, 200);
