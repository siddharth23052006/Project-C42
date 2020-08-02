var hr, min, sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(700,700);
}

function draw() {
  background(0);
  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
    translate(350,350);
    rotate(-90);
    stroke(255);
    strokeWeight(6);
    noFill();

    //second hand and arc
    stroke(0,0,255);
    push();
    rotate(secAngle);
    line(0,0,225,0);
    pop();
    arc(0,0,600,600,0,secAngle);

    //minute hand and arc
    stroke(0,255,0);
    push();
    rotate(minAngle);
    line(0,0,180,0);
    pop();
    arc(0,0,585,585,0,minAngle);

    //hour hand and arc
    stroke(255,0,0);
    push();
    rotate(hrAngle);
    line(0,0,130,0);
    pop();
    arc(0,0,570,570,0,hrAngle);
  pop();

/*  if ((hr%12)<10){
    text("Time: 0" + hr%12 + ":" + min + ":" + sec, 20, 20);
  }
  if (min<10){
    text("Time: " + hr%12 + ":0" + min + ":" + sec, 20, 20);
  }
  if(sec<10){
    text("Time: " + hr%12 + ":" + min + ":0" + sec, 20, 20);
  }*/
}