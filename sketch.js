var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png" , "images/fairyImage2.png")

}

function setup() {
	createCanvas(800, 500);

	//create fairy sprite and add animation for fairy
fairy = createSprite(130,280)
fairy.addAnimation("faire", fairyImg)
fairy.scale = 0.18


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y >255 && starBody.position.y > 255){
	Matter.Body.setStatic(starBody,true)
}


  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20
	
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x  -20
	
	}


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
