class Box{

    constructor(x,y,width,height){

    var box_options = {
        restitution: .8
     }
   
     this.boxObject = BODIES.rectangle(x,y,width,height, box_options); //creating engine object
     WORLD.add(worldAB, this.boxObject);
     
     this.w = width;
     this.h = height;

   
    }


    display(){

        var pos = this.boxObject.position;
        var angle = this.boxObject.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }




} 