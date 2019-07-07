
var xspacing = 12;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 400.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

var sensor1;
var sensor2;


function setup() {
  createCanvas(windowWidth, windowHeight);

  w = width+12;
  dx = (TWO_PI / period) * xspacing;
  // dx =1;
  yvalues = new Array(floor(w/xspacing));
  // print(dx);

}

//end of setup

function draw() {
  //background(344, 54, 23);
   background(255, 92, 64);

 calcWave();
 renderWave();
  sensor1 = map(mouseX, 0, width, 0.5, 4);
  sensor2 = map(mouseY, 0, height, 2, 1);
}




function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)

  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;

  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sensor2*sin(x * sensor1) * amplitude ;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(217,171,248);
  // A simple way to draw the wave with an ellipse at each location


  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/5+yvalues[x], 6, 300);
  }
}
