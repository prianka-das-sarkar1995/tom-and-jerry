var cat,mouseImg;
function preload() {
    //load the images here
    cat=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImg=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,200);
    cat.addImage(cat);
    mouseImg=createSprite(300,300);
    mouseImg.addImage(mouseImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
