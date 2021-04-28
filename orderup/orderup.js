var ballx = 150;
var bally = 150;
var ballSize = 200;
var score =0;
var gameState= "L1";
var img1; //coffee
var img2; //soda
var img3; //fries
var img4; //burger
var img5; //the kitchen background


function preload() {
img1 = loadImage('https://crocodile-milk.github.io/images/coffee.png');
img2 = loadImage('https://crocodile-milk.github.io/images/soda.gif');
img3 = loadImage('https://crocodile-milk.github.io/images/fries.gif');
img4 = loadImage('https://crocodile-milk.github.io/images/burger.gif');
img5 = loadImage('https://crocodile-milk.github.io/images/kitchen.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img5); //the kitchen background
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
    if (gameState=="L4"){
   levelFour(); 
  }
    if (gameState == "END") {
    levelEnd();
    }
text(("Score: " + score), width/2, 40);
} // end draw


function levelOne(){ //level 1 starts here
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1; //score
  }
  if(score>5){
 gameState= "L2";
  }
  
  image(img1, ballx, bally, ballSize, ballSize); //coffee cursor

  
} // end level one===================================

function levelTwo(){ //level 2 starts here
  background(img5); //the kitchen background
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1; //score
  }
  if(score>10){
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img2, ballx, bally, ballSize, ballSize); //soda cursor
} // end level two===================================

function levelThree(){ //level 3 starts here
    background(img5); //the kitchen background
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
  gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img3, ballx, bally, ballSize, ballSize); //fries cursor
  
} // end level three===================================

function levelFour(){ //level 4 starts here
    background(img5); //the kitchen background
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>24){
  gameState = "END";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img4, ballx, bally, ballSize, ballSize); //burger cursor
} // end of level four===================================

    if (score>=25){
    gameState ="END"; 


} // end GAME===================================

  function levelEnd() {
  background(172,209,242);
  fill(255);
  text('CONGRATS!',300, 300);
  text('You Won!',300, 350);
}
