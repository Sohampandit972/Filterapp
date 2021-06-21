noseX=0;
noseY=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/Cx5pngw2/png-clipart-moustache-moustache.png');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300)
image(clown_nose, noseX, noseY, 50,50)
}

function take_snapshot(){
    save('MyFilterImage.png');
}       

function modelLoaded(){
consol.log('Posenet is Initialized')
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

noseX = results[0].pose.nose.x-20;
noseY = results[0].pose.nose.y-20;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}