img="";
noseX=0;
noseY=0;
marioX= 325;
marioY= 325;
function preload() {
	img = loadImage("mario05.png")
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin= loadsound("coin.wav");
	mario_gameover= loadsound("gameover.wav");
	mario_die= loadsound("mariodie.wav")
	mario_kick= loadsound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1250,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
console.log("Model is loaded");
}
function gotPoses(results)
{
if(results.length > 0)
{
	console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}
}
function draw() {
	game()
}






