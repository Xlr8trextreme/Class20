var mR,fR;

function setup() {
  createCanvas(800,800);
  fR=createSprite(400, 400, 150, 150);
  fR.shapeColor="green"
  fR.debug=true;
  
  //fR.velocityX=2;
  mR=createSprite(400, 400, 50, 50);
  mR.shapeColor="green"
  mR.debug=true;
 // mR.velocityX=-3;
  
}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

  console.log("dist b/w centers "+ (mR.x-fR.x));
  console.log("sum "+ (mR.width+fR.width)/2);

  if((mR.x-fR.x)<=(mR.width+fR.width)/2 && (fR.x-mR.x)<=(mR.width+fR.width)/2&&
  (mR.y-fR.y)<=(mR.height+fR.height)/2 && (fR.y-mR.y)<=(mR.height+fR.height)/2){
    fR.shapeColor="red"
    mR.shapeColor="red"
  }else {
    mR.shapeColor="green"
    fR.shapeColor="green"
  }

/*
if (mR.x - fR.x < fR.width/2 + mR.width/2
    && fR.x - mR.x < fR.width/2 + mR.width/2) {
  mR.velocityX = mR.velocityX * (-1);
  fR.velocityX = fR.velocityX * (-1);
}
if (mR.y - fR.y < fR.height/2 + mR.height/2
  && fR.y - mR.y < fR.height/2 + mR.height/2){
  mR.velocityY = mR.velocityY * (-1);
  fR.velocityY = fR.velocityY * (-1);
}
*/
  drawSprites();
}