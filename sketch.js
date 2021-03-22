const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, ground;
var backGroundImg

var gameState="onSling";

 function preload(){
  polygonImg = loadImage("sprites/polygon.png");   
 }

function setup(){
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,390,1200,10);
 platform = new Ground(390, 340, 185, 10);
  
  polygon= new Box(150,300,20,20);
  polygon.addImage="polygonImg"; 

   box1=new Box(300,335,30,40);
   box2=new Box(330,335,30,40);
   box3=new Box(360,335,30,40);
   box4=new Box(390,335,30,40);
   box5=new Box(420,335,30,40);
   box6=new Box(450,335,30,40);
   box7=new Box(480,335,30,40);

   box8=new Box(330,235,30,40);
   box9=new Box(330,235,30,40);
   box10=new Box(330,235,30,40);
   box11=new Box(330,235,30,40);
   box12=new Box(330,235,30,40);

   box13=new Box(330,195,30,40);
   box14=new Box(330,195,30,40);
   box15=new Box(330,195,30,40);

   box16=new Box(330,95,30,40);

   slingShot= new Sling(this.polygon,{x:100, y:300});
}

 function draw(){
    background(backgroundImg);
    Engine.update(engine);
    textSize(35);
    fill("red");
    text("score"+score,width-300,50);


  ground.display();
  platform.display();

  polygon.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 
  box13.display(); 
  box14.display();
  box15.display();

  box16.display();  
 }

 function mouseDragged(){
   if(gameState== "launched"){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

 }
 }


       function mouseReleased(){
       sling.fly();
       gameState="launched";
}    

       function keyPressed(){
       if(keyCode === 32){
       sling.attach(polygon.body);
      }
   }



