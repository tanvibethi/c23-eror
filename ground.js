class ground {
    constructor(x, y, width, height){

        this.w = width;
        this.h = height;
        var grounds_options;
        grounds_options = {
            isStatic: true
        }
        this.grnd = BODIES.rectangle(x, y, width, height, grounds_options);
        WORLD.add(worldAB, this.grnd);

    }

    display(){

        var pos = this.grnd.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h)

    }
}