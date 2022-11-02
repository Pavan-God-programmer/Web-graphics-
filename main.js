// Drawing bacses

// Setup the canavs
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// let's da some stuff
// Draw rectabngle

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50);
// Set outlien
// css colors
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50);
