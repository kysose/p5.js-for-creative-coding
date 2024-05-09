let x; let y; let angle = 0;
let r = 150;
let shiftingAngle = [];
let numAxis = 8;

let x2 = [];
let y2 = [];

function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
    for (let i = 0; i < numAxis; i++) {
        shiftingAngle[i] = i*90/numAxis;        
    }
}

function draw(){
    background(75, 150, 160);
    stroke(255, 100); // 100 is transparency
    //angle = map(mouseX, 0, width, 0, 360);
    x = r*cos(angle);
    y = r*sin(angle);

    translate(width/2, height/2); //this changes the originpoint from upperleft corner to middle of canvas
    noFill(); //big ellipse colorless
    ellipse(0, 0, r*2, r*2);
    fill(0);
    ellipse(x, y, 20, 20);

    /*fill(255);
    ellipse(x, 0, 20, 20);
    ellipse(0, y, 20, 20);

    line(-r, 0, r, 0); //line along x-axis
    line(0, -r, 0, r); //line along y-axis
    */
  
    for (let i = 0; i < numAxis; i++){
        x2[i] = r*cos(angle + shiftingAngle[i]);
        y2[i] = r*sin(angle + shiftingAngle[i]);
        push(); //push() saves the transformation, pop() returns it before we rotate again
        rotate(-shiftingAngle[i]);
        //stroke(0, 0, 255); //color a line with stroke
        line(-r, 0, r, 0); 
        //stroke(0, 255, 0);
        line(0, -r, 0, r); 
        fill(255);
        ellipse(x2[i], 0, 20, 20);
        ellipse(0, y2[i], 20, 20);
        pop();
    }

    angle += 1;
    
}