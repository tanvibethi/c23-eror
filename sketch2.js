//namespacing done to make code more easily readable!
const WORLD = Matter.World;
const ENGINE = Matter.Engine;
const BODIES = Matter.Bodies;

//objects created for the game
var engine, world, ground, ball;

function setup() {
createCanvas(400,400);
engine = ENGINE.create();
world = engine.world; //namespacing

var ground_options = {

isStatic: true
}

ground = BODIES.rectangle(200,390,200,50,ground_options);
WORLD.add(world,ground);

var ball_options = {

restitution: 1.0
}

ball = BODIES.circle(200,100,20, ball_options);
WORLD.add(world,ball);

console.log(ground);
console.log(ground.type);
console.log(ground.position.x);
console.log(ground.position.y);
;

}

function draw() {

//updating the engine every millisecond
ENGINE.update(engine);
background("black");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,390,50);

ellipse(ball.position.x,ball.position.y, 50);

}

