//  The scripts for quad solver solutions, graph, zoom, and reset functions.
function QF() {
    // getting values to do quadratic formula
    a = $("#quadA").val();
    b = $("#linB").val();
    c = $("#constant").val();
    results();
    graphQuad();
    console.log(a, b, c);
} //close QF
function results() {

    // finding vertext and displaying symline and yint results
    vX = -(b * 1) / (2 * a);
    vX = vX.toFixed(2);
    vY = plugX(vX).toFixed(2);
    $("#vertex").text("Vertex is at (" + vX + "," + vY + ")");
    $("#symLine").text("Line of Symmetry is at x = " + vX);
    $("#yint").text("The y-intercept is at (0," + c + ")");
    $("#cp").text("The corresponding point is at (" + 2 * vX + "," + c + ")");

    
	ctx.lineWidth= 2;
	ctx.strokeStyle= "rgba(0,50,200,.3)";
	ctx.setLineDash([10,5]);
	
	ctx.beginPath();
	ctx.moveTo(scaledX(vX),0);
	ctx.lineTo(scaledX(vX),h);
	ctx.stroke();
	ctx.setLineDash([0]);

    ctx.beginPath();
    ctx.arc(scaledX(0), scaledY(plugX(0)), 3, 0, 6.28);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(scaledX(vX), scaledY(vY), 3, 0, 6.28);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(scaledX(2*vX), scaledY(c), 3, 0, 6.28);
    ctx.fill();

    //quadratic formula and solutions
    d = b ** 2 - 4 * a * c
    x1 = (-b + Math.sqrt(d)) / (2 * a)
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    x1 = Math.round(x1 * 100) / 100;
    x2 = Math.round(x2 * 100) / 100;
    $("#solution1").text("The x-intercept is at (" + x1 + ",0)");
    $("#solution2").text("The x-intercept is at (" + x2 + ",0)");


    ctx.beginPath();
    ctx.arc(scaledX(x1),scaledY(0),3,0,6.28);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(scaledX(x2),scaledY(0),3,0,6.28);
    ctx.fill();


} //close results
function plugX(x) {
    y = a * x ** 2 + b * x + c * 1;
    return y;
}
//Graph the thing  
function graphQuad() {
    for (var i = 0; i < w; i++) {
        x = (w / 2 - i) / k;
        nx = (w / 2 - (i + 1)) / k;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "Red";
        ctx.moveTo(scaledX(x), scaledY(plugX(x)));
        ctx.lineTo(scaledX(nx), scaledY(plugX(nx)));
        ctx.stroke();
    } // end for loop
} // end graphQuad
function scaledX(x) {
    newx = w / 2 + x * k;
    return newx;
}

function scaledY(y) {
    newy = h / 2 - y * k;
    return newy;
}

function zoomIn() {
    ctx.clearRect(0, 0, w, h);
    k += 3;
    graphpaper();
    graphQuad();
    results();

    if (k >= 19) {
    	$(".zoomIn").hide()
    }
    if (k >= 5) {
    	$(".zoomOut").show()
    }
}

function zoomOut() {
    ctx.clearRect(0, 0, w, h);
    k -= 3;
    graphpaper();
    graphQuad();
    results();

    if (k <= 5) {
    	$(".zoomOut").hide()
    }
    if (k >= 13) {
    	$(".zoomIn").show()
    }
}

function reset() {
	ctx.clearRect(0,0,w,h);
	graphpaper();
}