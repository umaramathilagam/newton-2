
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(200,600,100);
	bob2 = new Bob(300,600,100);
	bob3 = new Bob(400,600,100);
	bob4 = new Bob(500,600,100);
	bob5 = new Bob(600,600,100);
	roof = new Roof(400,50,500,30)
	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);
    

	Engine.run(engine);
  
}


function draw() {
  background('white');
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
 
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){	
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-105,y:-105})
} 
}


