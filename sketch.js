
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1, box2, box3;
var dustbin, dustbinimg;

function preload(){
	dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1190, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,450,70);
	ground = new Ground(590,height,1200,20)


	Engine.run(engine);

	

	
	box1 = new Box(990,680,200,20);
	box2 = new Box(1090,590,20,200);
	box3 = new Box(900,590,20,200);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  paper.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
 
 // dustbinimg.image(dustbingreen.png);
 image(dustbinimg, 996 ,591, 230, 210);
}


function keyPressed () {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 720, y : -720})
	}
}
