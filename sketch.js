
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof,bob,rope;

function preload()
{
	
}

function setup() {

  createCanvas(1600, 700);
 
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

    roofs = new Roof(width/2,height/4,800,30);
    bob1 = new Bob(800,500,100);
    bob2 = new Bob(900,500,100);
    bob3 = new Bob(1000,500,100);
    bob4 = new Bob(1100,500,100);
    bob5 = new Bob(700,500,100);
    bob6 = new Bob(600,500,100);
    bob7 = new Bob(500,500,100);
   
    rope1 = new Rope(this.body,{x:100,y:200});

    
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofs.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  rope1.display();
 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope1.fly();
}



