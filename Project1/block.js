class Block{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 70;
    }

    display(){
        noFill();
        stroke(this.c); //this is the square outline color
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        if(this.angle > 0 && this.angle < 45){
            this.drawRect();
        }
        else{
            this.drawX();
        }

        pop();
    }

    move(){

        let distance 
        if (pmouseX - mouseX != 0 || pmouseY - mouseY !=0){

        distance = dist(mouseX, mouseY, this.x, this.y); //dist() calculates the distance between two points
        //mouseX & Y = mouse position, width & height /2 = center of rectangle
        //print(distance);
        //check if mouse is close to rectangle:
            if (distance < distanceMouse) {
                this.angle += 1; //makes the rectangle spin 
                this.c = 255; //makes the outlines white when mouse is close
            }
        }
        
        // If rectangles are already rotating, keep rotating until angle = 90
        if (this.angle > 0 && this.angle < 90){
            this.angle += 1;
            if(this.c < 70){
                this.c -= 3;
            }
        }
        else{
            this.angle = 0;
            this.c = 70;
        }
    }

    drawRect(){

        rect(0, 0, size - offset, size - offset);
    }

    drawX(){
        
        let margin = -size/2;
        line(margin + offset/2, margin + offset/2, margin + size - offset/2, margin + size - offset/2);
        line(margin + size - offset/2, margin + offset/2, margin + offset/2, margin + size - offset/2);
    }
}