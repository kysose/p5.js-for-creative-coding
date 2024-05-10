class Box {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.isLetter = false;
        this.angle = 0;
        this.depth = 0;
    }

    display(){
        stroke(255, 100);
        noFill();
        if (this.isLetter == true){
            stroke(255);
            this.angle += 1;
            this.depth += 2*sin(this.angle);
        }
        else{
            this.angle -= 1;
            stroke(18, 164, 200);
        }

        
        push();
        translate(this.x, this.y, this.depth); // if you move this after rotateX & Y he whole grid spins around one axis
        rotateX(this.angle);
        rotateY(this.angle);
        box(size - 1/3*size); // -1/3*size gives a little space 
        pop(); 
    }
}