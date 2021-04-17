var img;
var img1;
var img2;
var img3;
var img4; 
var img5;
var img6;
var img7; 
var img8;
var img9;
var initials ='an'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken


function preload() {
// preload() runs once, it may make you wait
//  img2 = loadImage('74.png');  // cat.jpg needs to be next to this .js file

// you can link to an image on your github account
img = loadImage('http://crocodile-milk.github.io/images/straw.jpg');

img1 = loadImage('http://crocodile-milk.github.io/images/loaf.png');

img2 = loadImage('http://crocodile-milk.github.io/images/beans.png');

img3 = loadImage('https://crocodile-milk.github.io/images/sparkle.gif');

img4 = loadImage('https://crocodile-milk.github.io/images/bread.gif');

img5 = loadImage('https://crocodile-milk.github.io/images/mrsparkle.png');

img6 = loadImage('https://crocodile-milk.github.io/images/sheep.gif');

img7 = loadImage('https://crocodile-milk.github.io/images/alpaca.gif');

img8 = loadImage('https://crocodile-milk.github.io/images/purin.gif');

img9 = loadImage('https://crocodile-milk.github.io/images/beebaby.png');

}
function setup() {
createCanvas(1200, 1200);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { 
  //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);

image(img, mouseX-20, mouseY-20, 100, 100);
    
  } else if (toolChoice == '2') { // second tool

//    stroke(20);
//    line(mouseX, mouseY, pmouseX, pmouseY);

  image(img1, mouseX-20, mouseY-20, 300, 300);

  } else if (toolChoice == '3') { // third tool

//    stroke(50, 50, 0, 20);
//    line(mouseX, mouseY, pmouseX, pmouseY);
  image(img2, mouseX-20, mouseY-20, 350, 400);

  } else if (toolChoice == '4') {
  
    
 //   stroke(0, 0, 255);
  //  line(mouseX, mouseY, pmouseX, pmouseY);
     image(img3, mouseX-20, mouseY-20, 90, 90);
    
  } else if (key == '5') { // this tool calls a function
  
 //   stroke(0, 0, 255);
  //  line(mouseX, mouseY, pmouseX, pmouseY);
     image(img4, mouseX-20, mouseY-20, 90, 90);
 
  } else if (toolChoice == '6') { // second tool

//    stroke(50, 50, 0, 20);
//    line(mouseX, mouseY, pmouseX, pmouseY);
  image(img5, mouseX-20, mouseY-20, 406, 449);

    
  } else if (toolChoice == '7') {
    
//    stroke(50, 50, 0, 20);
//    line(mouseX, mouseY, pmouseX, pmouseY);
  image(img6, mouseX-20, mouseY-20, 292, 292);


  } else if (toolChoice == '8') {
    
//    stroke(50, 50, 0, 20);
//    line(mouseX, mouseY, pmouseX, pmouseY);
  image(img7, mouseX-10, mouseY-10, 480, 480);


  } else if (toolChoice == '9') {

    //    stroke(50, 50, 0, 20);
//    line(mouseX, mouseY, pmouseX, pmouseY);
  image(img8, mouseX-20, mouseY-20, 240, 240);

  } else if (toolChoice == '0') {

    //   stroke(0, 0, 255);
  //  line(mouseX, mouseY, pmouseX, pmouseY);
     image(img9, mouseX-20, mouseY-20, 90, 90); 
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
