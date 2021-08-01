noseX=0;
noseY=0;
leftwristx=0;
rightwristx=0;
difference=0;



function preload(){
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550, 500);
    canvas.position(560 , 150);
    PoseNet= ml5.poseNet( video , modelLoaded);
    PoseNet.on("pose" , gotPoses);
}
  
function draw(){
    background(0,255,0);
    textSize(difference);
    fill(0, 0, 255);
    text("Notice" , 50 , 400);
    document.getElementById("font_size").innerHTML="Size of the font will be "+difference+"px";
}

function modelLoaded(){
    console.log("Pose Net is Initialized!")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Nose X is "+noseX+" Nose Y is "+noseY);
        console.log("Left Wrist is "+leftwristx+" Right Wrist is "+rightwristx+" Difference is "+difference);
    }
    
}






