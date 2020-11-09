const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint




function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(1000,550);
  

  box1 = new Box(430,235,30,40)
  box2 = new Box(460,235,30,40)
  box3 = new Box(490,235,30,40)
  box4 = new Box(520,235,30,40)
  box5 = new Box(550,235,30,40)
  box6 = new Box(460,205,30,40)
  box7 = new Box(490,205,30,40)
  box8 = new Box(520,205,30,40)
  //topist
  box9 = new Box(490,155,30,40)
 
  ground = new Ground(490,280,200,20)

  ground1 = new Ground(810,150,200,20)
  box11 = new Box(750,120,30,40)
  box22 = new Box(780,120,30,40)
  box33 = new Box(810,120,30,40)
  box44= new Box(840,120,30,40)
  box55= new Box(870,120,30,40)
  box66= new Box(780,95,30,40)
  box77= new Box(810,95,30,40)
  box88 = new Box(840,95,30,40)
  //topist123
  box99 = new Box(810,50,30,40)

  circle = new Hey(100,250,500,500)

  chain = new Chain(circle.body ,{x:100,y:250} , 10, 0.04)

  ground3 = new Ground(500,500,1000,50)
  
}

function draw() {
  background("yellow");  
Engine.update(engine);
 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box11.display();
  box22.display();
  box33.display();
  box44.display();
  box55.display();
  box66.display();
  box77.display();
  box88.display();
  box99.display();
  ground.display();
  ground1.display();
 circle.display();
 chain.display();
 ground3.display();


  
}
function mouseDragged(){

  Matter.Body.setPosition(circle.body,{x:mouseX , y:mouseY})
  
      
  }
  
  function mouseReleased(){
  chain.fly();
  mouseDragged=false
  
  
  }
  function keyPressed(){
    if(keyCode===32){
    chain.attach(circle.body)
    mouseDragged();
    }
  }
