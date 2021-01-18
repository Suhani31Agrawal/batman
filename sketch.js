var boy,boyImage;

function preload(){
    boyImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    createCanvas(600,1200)
   boy=createSprite(300,600,2,2)
    boy.addAnimation("batman",boyImage)
}

function draw(){
    background(255)
    Engine.update(engine)
}   

