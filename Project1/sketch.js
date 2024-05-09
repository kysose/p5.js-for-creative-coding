let distanceMouse = 15;
let cols; let rows; let size = 10; let offset = 4;
let blocks = [];

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width/size;
    rows = height/size;

    //let's create a 2D array:
    for (let i = 0; i < cols; i++){
        blocks[i] = [];
        for (let j = 0; j < rows; j++){
            blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size); //needs size/2 to center
        }
    }


  }
  
  function draw() {
    background(0);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            blocks[i][j].move();
            blocks[i][j].display();
        }
    }

    //print(pmouseX, mouseX, pmouseY, mouseY); // pmouse = previous mouse coordinate
  }
  