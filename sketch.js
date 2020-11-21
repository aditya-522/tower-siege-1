
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

var engine, world;
var ground; 

var ground, stand1, stand2;

function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,700);
 
  engine = Engine.create();
  world = engine.world;
 
  ground=new Ground(width/2,height,width,20) 

  stand1 = new Ground(500,500,350,15);
 
  block2=new Box(400,470)
  block3=new Box(450,470)
  block4=new Box(500,470)
  block5=new Box(550,470)
  block6=new Box(600,470)
 
  block9=new Box(450,420)
  block10=new Box(500,420)
  block11=new Box(550,420)

  block12=new Box(500,370)

  polygon = Bodies.circle(50,200,40);
  World.add(world,polygon);

  slingshot = new SlingShot(polygon,{x:250,y:300})
  
}
function draw() {
  background(220);  
  
  ground.display()

  stand1.display()
  
  fill("red")
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  fill("blue")
  block9.display()
  block10.display()
  block11.display()
  fill("yellow")
  block12.display()
  slingshot.display()

  imageMode(CENTER)
  image(polygonImage,polygon.position.x, polygon.position.y, 60,60)

}

function keyPressed(){
	if(keyCode === 32){
    Matter.Body.setPosition(polygon, {x:250,y:300})
		slingshot.attach(polygon.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
