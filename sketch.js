
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")

    cat1=loadImage("images/cat1.png")
    cat2=loadImage("images/cat2.png")
    cat3=loadImage("images/cat3.png")
    cat4=loadImage("images/cat4.png")

    mouse1=loadImage("images/mouse1.png")
    mouse2=loadImage("images/mouse2.png")
    mouse3=loadImage("images/mouse3.png")
    mouse4=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(900,600,50,50)
    cat.addAnimation("catty",cat1)
    cat.scale=0.25

    mouse=createSprite(200,600,50,50)
    mouse.addAnimation("mouse",mouse1)
    mouse.scale=0.25

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.x-=10
      cat.addAnimation("cat2",cat2)
      cat.changeAnimation("cat2")
  }

  if(keyCode===RIGHT_ARROW){
    mouse.x+=10 
    mouse.addAnimation("mouse2",mouse2)
    mouse.changeAnimation("mouse2")
}


}
