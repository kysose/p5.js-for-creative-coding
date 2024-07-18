class Flower {
    constructor(r, pts, f_amp, period, speed){
        this.x = [];
        this.y = [];
        this.r = r;
        this.pts = pts;

        this.f_radius = 0;
        this.f_amp = f_amp; //amp controls the length of blades
        this.period = period; // period controls how many blades the flower has
        this.speed = speed;
        this.rot = 0;
    }

    display(){
        stroke(0);
        noFill();
        beginShape();
        for (let i=0; i<this.pts; i++){
            let angle = i/this.pts * 360; //this evenly spaces out the points
            this.f_radius = this.f_amp*cos(angle * this.period);
            this.x[i] = (this.r + this.f_radius)*cos(angle + this.rot);
            this.y[i] = (this.r + this.f_radius)*sin(angle + this.rot);
            vertex(this.x[i], this.y[i]); //vertex function allows us to draw points - vertex need beginShape() and endShape()
        }   
        endShape(CLOSE); //wihtout close the outline of the shape is not connected to it's ends
    
        this.rot += this.speed; //speed of rotation  
    }
}