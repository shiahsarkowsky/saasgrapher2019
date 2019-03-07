// general grapher and button functions
// David's Soft Dev Class 2019

function wtf() {
  f=$("#function").val();
  console.log(f);
  Ggraph();
}

function Ggraph () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx =  (w/2-(i+1))/k;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Red";
    ctx.moveTo(scaledX(x),scaledY(plugX2(x)));
    ctx.lineTo(scaledX(nx),scaledY(plugX2(nx)));
    ctx.stroke();
  }
  $("#yint").text("Y intercept is at (0," + plugX2(0)+")");
  ctx.beginPath();
  ctx.arc(scaledX(0),scaledY(plugX2(0)),5,0,6.28);
  ctx.fill();
} // end of Ggraph()

function zoomIn() {
 k=k+3;
 resetCanvas();
}
function zoomOut() {
 k=k-3;
 resetCanvas();
}

function scaledX(x) {
 newx = w/2+x*k;
 return newx;
}
function scaledY(y) {
 newy = h/2-y*k;
 return newy;
}

function plugX2(x) {
 y = eval(f);
 return y;
}
function init() {
  canvas = document.getElementById("mycanvas");
  ctx = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);

  graphpaper();
}

function graphpaper() {
  // the x and y axis drawn
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(w/2,0);
  ctx.lineTo(w/2,h);
  ctx.stroke();

  ctx.beginPath(); 
  ctx.moveTo(0,h/2);
  ctx.lineTo(w,h/2);
  ctx.stroke();

  // thin line with a 50% opacity using rgba() 
  ctx.lineWidth=1;
  ctx.strokeStyle="rgba(0,0,100,.2)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  //vertical lines
  for (i=0; i<w/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( w/2+i*k, 0 );
    ctx.lineTo( w/2+i*k, h );
    ctx.stroke();


	} // end for loop
  
function reset() {
 init();
 Ggraph();
}
