var paddle;
//var ball;
var bubble = [];
var ball;
var edges;
var backgroundImg;
var ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,ballimg8,ballimg9,ballimg10;
var score = 0;
var ballArr;
function preload(){
	backgroundImg = loadImage("backgroud.jpg");
	ballimg1 = loadImage("beigeBall.png");
	ballimg2 = loadImage("blackBall.png");
	ballimg3 = loadImage("blackishBrownBall.png");
	ballimg4 = loadImage("chocolateBrownBall.png");
	ballimg5 = loadImage("darkBlueBall.png");
	ballimg6 = loadImage("darkBrownBall.png");
	ballimg7 = loadImage("gerrnBall.png");
	ballimg8 = loadImage("greyBall.png");
	ballimg9 = loadImage("lightBrownBall.png");
	ballimg10 = loadImage("peachBall.png");
}

function setup() {

	ballArr = [ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,ballimg8,ballimg9,ballimg10];
	//console.log(ballArr);

	createCanvas(1000, 980);
	//Create object for paddle.
	paddle = new Paddle(400,900,150,30);

	//create object for ball.
	//ball = new Ball(450,885,30);
	ball = createSprite(450,885,30,30);
	
	//create object for bubble

	//bubble = new Bubble(400,200,80);
	for(var k = 0; k<=width; k = k+65){
        var bubbleObj = new Bubble(k,height-1800/2,70,20);
        bubbleObj.bubbleImg();
        bubble.push(bubbleObj);
        //var bubbleTemp = createSprite(k,height-1700 /2,70,20);
       // bubbleTemp.addImage(ballArr[Math.round(random(0,9))]);
	  }

	 /* for(var k = 0; k<=width; k = k+70){
		bubble.push(new Bubble(k,height-1700/2,70,20));
	  }

	  for(var k = 0; k<=width; k = k+65){
		bubble.push(new Bubble(k,height-1500/2,70,20));
	  }

	  for(var k = 0; k<=width; k = k+70){
		bubble.push(new Bubble(k,height-1300/2,70,20));
	  }*/

	 // if(ball_test.bounceOff(bubble)){
		score += 20
	//  }

	edges = createEdgeSprites();

	for(var temp in bubble){
		/*if(ball_test.x === bubble[temp].x ){
			console.log("same");
		}*/
		var d = int(dist(ball.x,ball.y,bubble[temp].x,bubble[temp].y));
		if(d <10){
			console.log(d);
		}
	}
	
}


function draw() {
  background(backgroundImg);

	paddle.display();
	paddle.movePaddle();
	//ball.display();
//	ball.bounceBall();
	fill("blue");
	//bubble.display();
	/*for (var j = 0; j < bubble.length; j++) {
   
		bubble[j].bubbleImg();
	  }*/

	if(keyDown("space") && ball.velocityX === 0 && ball.velocityY === 0){
		ball.velocityX = 2;
		ball.velocityY = -8;
	}

	ball.bounceOff(edges[0]);
	ball.bounceOff(edges[1]);
	ball.bounceOff(edges[2]);
	ball.bounceOff(edges[3]);
	//ball_test.bounceOff(paddle);
    
    for(var temp in bubble){
       // console.log(bubble[temp].bubble);
		if(ball.isTouching(bubble[temp].bubble)){
			console.log("hi");
		}
	}

	/*if(ball_test.collide(paddle)){
		ball_test.velocityX = 0;
		ball_test.velocityY = 0;
	}*/

	textSize(40);
	text("Score" + score,50,50);

	drawSprites();



}



