
// Namespacing for making the code more readable
//these are the 3 main modules from matter.js that we are going to use in angry birds
 const ENGINE = Matter.Engine; //gives physics engine propereties to all objects
 const WORLD = Matter.World; // creates the world that will have all the objects
 const BODIES = Matter.Bodies; // creates all the objects


var engine, worldAB, groundObject;
var box1, box2, box3, box4;
var ground1;
var pig1, pig2;
var log1;


function setup() {
  createCanvas(1200,400);

  engine = ENGINE.create(); //command to create the physic engine
  worldAB = engine.world; //creating the world from the engine 


  box1 = new Box(850, 50, 50, 50);
  box2 = new Box(950, 50, 50, 50);
  box3 = new Box(850, 150, 50, 50);
  box4 = new Box(950, 150, 50, 50);
  ground1 = new ground(600, 400, 1200, 50);
  pig1 = new pig(900, 50, 30, 30);
  //pig2 = new pig(900, 150,);
  log1 = new log(900, 50, 300, PI/2);

  console.log(box1);

}

function draw() {
  background(0,0,0);

  ENGINE.update(engine); // update the engine

  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();

}