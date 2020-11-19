
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinOb, paperOb, groundOb;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

//	paperOb = new paper(50,450,40);
	dustbinOb = new Dustbin(1200, 650);
	groundOb = new Ground(650, 600, 1200, 40);

	//Create the Bodies Here.
	 Engine.run(engine);
  
}


function draw() {
  background(0);

//	paperOb.display()
	dustbinOb.display()
	groundOb.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		paperOb.Body.applyForce(paperOb.body, paperOb.body.position,{x:85,y:-85});

	}
}