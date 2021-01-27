var canvas;
var music;
var s1;
var s2;
var s3;
var s4;
var s5;
var box1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    s1 = createSprite(80, 590, 150, 10);
s1.shapeColor = "red";
    s2 = createSprite(240, 590, 150, 10);
s2.shapeColor = "blue";
    s3 = createSprite(400, 590, 150, 10);
s3.shapeColor = "yellow";
    s4 = createSprite(560, 590, 150, 10);
s4.shapeColor = "green";
    s5 = createSprite(720, 590, 150, 10);
s5.shapeColor = "cyan";
    box1 = createSprite(random(20, 750) ,300, 50, 50);
box1.shapeColor = "white";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box1.velocityX = 5;
    box1.velocityY = 5;
    
    var edges=createEdgeSprites();
    box1.bounceOff(edges);

     
  if (s1.isTouching(box1)&& box1.bounceOff(s1)){
      box1.shapeColor = "red";
      box1.velocityY = -5;
      box1.velocityX = -5;
  }

  if (s2.isTouching(box1)&& box1.bounceOff(s2)){
    box1.shapeColor = "blue";
    box1.velocityY = -5;
      box1.velocityX = -5;
}

if (s3.isTouching(box1)&& box1.bounceOff(s3)){
    box1.shapeColor = "yellow";
    box1.velocityY = -5;
      box1.velocityX = -5;
}

if (s4.isTouching(box1)&& box1.bounceOff(s4)){
    box1.shapeColor = "green";
    box1.velocityY = -5;
      box1.velocityX = -5;
}

if (s5.isTouching(box1)&& box1.bounceOff(s5)){
    box1.shapeColor = "cyan";
    box1.velocityY = -5;
      box1.velocityX = -5;
}

   

    drawSprites();
    //add condition to check if box touching surface and make it box
}
