const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var polygon;
var point;


function setup() {
  createCanvas(800,400);


  engine=Engine.create();
  world=engine.world;



  ground=new Ground(400,400,900,30);
  stand=new Ground(400,200,220,10);
  polygon=new Ball(50,200,35);
  
  box1=new Yellow(320,150,30,30);
  box2=new Yellow(350,150,30,30);
  box3=new Yellow(380,150,30,30);
  box4=new Yellow(410,150,30,30);
  box5=new Yellow(440,150,30,30);
  
  box7=new Green(337,120,30,30);
  box8=new Green(367,120,30,30);
  box9=new Green(397,120,30,30);
  box10=new Green(427,120,30,30);
  box12=new Pink(353,90,30,30);
  box13=new Pink(383,90,30,30);
  box14=new Pink(413,90,30,30);

  box16=new Purple(369,60,30,30);
  box17=new Purple(399,60,30,30);
  box21=new Red(390,0,30,30);
  point=new Point(polygon.body,{x:150,y:50})
  

 



  Engine.run(engine);
}

function draw() {
  background("red");  
  Engine.update(engine);

  

  ground.display();
  stand.display();
  polygon.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  
  box12.display();
  box13.display();
  box14.display();
  
  box16.display();
  box17.display();
  

  
  box21.display();
  point.display();
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    point.fly();
}