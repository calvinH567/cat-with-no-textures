var cat,cat2,mouse,mouseAn,bg,bgAn;
function preload() {
    //c1 = loadAnimation("tomOne.png")
 catGroup = new Group();
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,250,20,50);
    cat2 = createSprite(390,230,20,20);

    mouse = createSprite(100,240,20,20);
   // cat.addAnimation("catAn",catAn);
    
    
    
   
}

function draw() {
    if(cat.x - mouse.x < (cat.width + mouse.width)){
        cat.velocityX = 0;
        cat2.velocityX = 0;
    } 
    background(10,100,15);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    
}


function keyPressed(){
    cat.velocityX = -3;
    cat2.velocityX = -3;
  //For moving and changing animation write code here


}
