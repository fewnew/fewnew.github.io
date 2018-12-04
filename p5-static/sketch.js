function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(239, 175, 255);
  fill(251, 255, 28);
  ellipse(width/2, height/2, 200,200);
  fill(28, 164, 255);
  triangle(300,230,500,230,400,100);
  strokeWeight(8);
  stroke(19, 142, 8);
  ellipse(370, 260, 30,40);
  ellipse(440, 260, 30,40);
  strokeWeight(1);
  stroke(0);
  fill(255, 190, 28);
  rect(400,290,180,20);
  fill(255, 28, 137);
  noStroke();
  arc(400, 350, 80, 60, 0, PI+QUARTER_PI, CHORD);
}