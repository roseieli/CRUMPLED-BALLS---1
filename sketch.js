
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bin1=new bin(1200,450);
	paper1=new paper(200,250,40);
	ground1=new floor(width/2,500,width,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  bin1.display();
  paper1.display();
  ground1.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}


}
