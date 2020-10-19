class log{

    constructor(x,y,height, angle){

    var log_options = {
        restitution: .8,
        density: 1.2,
        friction: 1
     }
     
   
     this.body= BODIES.rectangle(x,y,20,height, log_options); //creating engine object
     //Matter.Body.setAngle(this.logObject, angle);
     WORLD.add(worldAB, this.body);
     
     this.w = 20;
     this.h = height;
    }


    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }




} 