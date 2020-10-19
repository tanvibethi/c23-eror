class pig{

    constructor(x,y){

    var options = {
        restitution: .8
     }
   
     this.Object = BODIES.rectangle(x,y,50, 50, options); //creating engine object
     WORLD.add(worldAB, this.Object);
     
     this.w = 50;
     this.h = 50;

   
    }


    display(){

        var pos = this.Object.position;
        var angle = this.Object.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }




} 