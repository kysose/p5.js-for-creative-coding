let size = 40;
let rows; let cols;

let boxes = [];

let font;
let msg = "H"; let points = [];
let fontX = -220; let fontY = 230; let fontSize = 690;

function preload() {
    font = loadFont('assets/FRAMD.ttf'); //p5.js can handle fonts directly
}

function setup(){
    createCanvas(800, 800, WEBGL); //WEBGL allows 3D rendering
    angleMode(DEGREES);
    cols = width/size;
    rows = height/size;

    points  = font.textToPoints(msg, fontX, fontY, fontSize);
    
    for (let i = 0; i < cols; i++) {
        boxes[i] = [];
        for (let j = 0; j < rows; j++) {
            boxes[i][j] = new Box(size/2 + i*size - size*cols/2, size/2 + j*size - size*rows/2);
        }
    }
}

function draw(){
    background(0, 58, 125);
    let distance;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < points.length; k++) {
                distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);
                
                if (distance < 25){
                    boxes[i][j].isLetter = true;
                }
            }

            boxes[i][j].display();
        }
        
    }

    //Draw the outline of letter
    //fill(255, 0, 0)
    //for (let i = 0; i < points.length; i++) {
    //    ellipse(points[i].x, points[i].y, 10, 10);
    //    
    //}

    /* starting code kept for notes

    //let x = map(mouseX, 0, width, 0, 360); //360 degrees
    //rotateX(x); //rotates #around# the specified axis
    //rotateY(x);
    //rotateZ(x);

    fill(255, 0, 0);
    box(50); //box point of origin is in the middle of canvas

    //let's draw anohther box that is 50 to the right and 50 down    
    fill(255); //fill before push() or pop() will save it -> original box would be red too
    push();
    translate(50, 50);
    box(50);
    pop(); //without push() and pop() next box would be drawn in the same place as the original box

    translate(-50, -50);
    box(50);


    */
    
}