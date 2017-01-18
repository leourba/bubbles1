var bubbles = [];
var img;
var bakg;
var a= 0;
function preload(){
  img=loadImage('https://raw.githubusercontent.com/leourba/a/master/images/bubble.png');
  backg=loadImage('https://raw.githubusercontent.com/leourba/a/master/images/back.jpg');
}


function setup() {
  createCanvas(1200, 400);

  for (i = 0; i < 400; i++) {
    bubbles[i] = {
      x: 0,
      y: 0,
      vx: 1,
      vy: 2,
      size: 50,

      display: function() {
        image(img,this.x, this.y, this.size, this.size);

      },
      move: function() {

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
      },
      checkedges: function() {
        if (this.x < 0 || this.x > width) {
          this.vx = this.vx * -1;

        }
        if (this.y < 0 || this.y > height) {
          this.vy = this.vy * -1;

        }


      }
    }
  }
print(bubbles);
} 

function draw() {
  background(backg);
  fill(255);
  noStroke();
  
  for (i = 0; i < a ; i++) {
    bubbles[i].display();
    bubbles[i].move();
    bubbles[i].checkedges();
  }
  text(a,50,50);
  
}

function mousePressed(){
    a=a+1;
    
    bubbles[a-1].x=mouseX;
    bubbles[a-1].y=mouseY;
    
  }