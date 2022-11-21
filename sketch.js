let font;
let points;
let text = "MBS";
let xtxt = 0, ytxt= 250;
let fontSize = 280;
let sizeMax = 80;
let speed = 2;


function preload() {
 font = loadFont('Roboto-Regular.ttf');
  //font = loadFont('DancingScript-Regular.ttf');
}


function setup() {
  
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES);
  fontSize = width/3;
  xtxt = width/2;
  ytxt = height/2;
 
 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fontSize = width/3;
  xtxt = width/2;
  ytxt = height/2;

}

function draw() {
 
  computePoint(map(mouseX, 0, 1200, 0.005, 0.05));

  background(20);

  noFill();
  stroke(255)
 
  beginShape();

  for (let i= 0; i < points.length; i++) {

    vertex(points[i].x, points[i].y);
  }
  endShape(CLOSE);

  strokeWeight(2)
  

  let d = 0;
  let phase =0;

  for (let i= 0; i < points.length; i++) {
    fill( + d)
    stroke(255 - d)
    //d = sin(frameCount*2 + i*2)*10;
   // d = sin(frameCount*2 + i*2)*map(mouseY, 0, 800, 0, 10);
    //d = sin(frameCount) * map(mouseY, 0, 800, 0, 10);
    phase = dist(mouseX, mouseY, points[i].x, points[i].y);

    d = sizeMax * sin(speed *frameCount + phase)
  



    circle(points[i].x, points[i].y, d);



  }
}

function computePoint(factor) {
  
  points = font.textToPoints( text, xtxt, ytxt, fontSize, {
    sampleFactor: factor
});

let bounds = font.textBounds(text, xtxt, ytxt, fontSize);
for (let i= 0; i < points.length; i++) {
let p = points[i];
   p.x =  p.x -(bounds.x - xtxt + bounds.w/2);
    p.y =  p.y  + bounds.h/2
  }
}
