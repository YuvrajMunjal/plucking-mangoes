
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var mango1,mango2,mango3,mango4,mango5;
var tree,rock,boy,mango;
var treeImg,boyImg;
var ground;
function preload()
{
	boyImg = loadImage("sprites/boy.png");
	treeImg = loadImage("sprites/tree.png");
	
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
	strokeWeight(4)
	ground = new Ground(750,700,1500,5);

	boy = createSprite(150,600,25,150)
	boy.addImage(boyImg)
	boy.scale =0.15;
	
	tree = createSprite(1000,388,25,150)
	tree.addImage(treeImg)
	tree.scale = 0.5
	
	mango1 = new Mango(600,150);
	mango2 = new Mango(550,100);
	mango3 = new Mango(450,160);
	mango4 = new Mango(500,140);

	rock = new Stone(25,250,rock,boy)
	rock.scale = 0.1 

	Engine.run(engine);
  
}


function draw() {
  background(255,255,255);
  Engine.update(engine);

 
	
	
  ground.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  rock.display();

  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)

 

 
}

function detectcollision(lstone,lmango){
	mangoBodyPosition =lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false	);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{ x: mouseX, y: mouseY })
	
	}
	
	function mouseReleased(){
		rock.fly();
		
		}

		function keypressed(){
			if(keyCode === 32 ){
				Matter.Body.setPosition(stoneObj.body,{x:235, y :420})
				launcherObject.attach(stoneObj.body)
			}
		}