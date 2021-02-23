//the physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  //loading image for background
  background_Img = loadImage("images/background.png");
  background2_Img = loadImage("images/background2.png");
  background3_Img = loadImage("images/background3.png");
}

function setup() 
{
  //creating the canvas
	canvas = createCanvas(350,600);

  //creating the engine and world
	engine = Engine.create();
	world = engine.world;

  //creating the button
  

//running the engine
	Engine.run(engine);
}


function draw() 
{
  //updating the engine
  Engine.update(engine);
  
  //giving function for the button to chose bottles

  rectMode(CENTER);

  background(background2_Img);

  drawSprites();
}

