const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,crumpledPaper;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/box.png");
  
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,5);
    crumpledPaper = new Paper(400,580,10);
    

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    bin1 = new box(900,510,10,120);
    bin2 = new box(960,565,130,10);
    bin3 = new box(1025,510,10,120);
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    ground.display();
    crumpledPaper.display();
    bin1.display();
    bin2.display();
    bin3.display(); 
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
