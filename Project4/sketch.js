// setting up a flower = new Flower(r, pts, f_amp, period, speed)
let f;

function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
    f = new Flower(100, 100, 15, 7, 1);
}

function draw(){
    background(220);
    translate(width/2, height/2);
    f.display();
   
    
}