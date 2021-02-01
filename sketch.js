const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var Drops;

var human;

var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
  thunder1=loadImage("thunderbolt/1.png");
  thunder2=loadImage("thunderbolt/2.png");
  thunder3=loadImage("thunderbolt/3.png");
  thunder4=loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(300,700);  
    
   engine = Engine.create();
   world = engine.world;

   Drops=new Drop(200,100,20);

   human = new Human(150,500,300,300);

   Engine.run(engine);
}

function draw(){
    background("black");

    Drops.display();

    human.display();

    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);

        rand=Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default : break;
        }
        thunder.scale = random(0.3,0.6,0.3,0.6);
    }
}   

