function setup() {
createCanvas(600, 600);
}
function draw() {

background (120);
strokeWeight(20);

c=color (300,200,400, 380);

//right eye
arc(390, 160, 80, 80, 3.14, 1.57);


//left eye
arc(190, 160, 80, 80, PI, TWO_PI+HALF_PI);

//mouth
fill(255, 255, 255);
  arc(290, 340, 200, 180, 6, PI + QUARTER_PI, CHORD); 

fill(c);
}
