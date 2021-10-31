function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(460, 200);
    webcam = createCapture(VIDEO);
    webcam.hide();
    Pose_net = ml5.poseNet(webcam, modelLoaded);
    Pose_net.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Intialized");
}

function gotPoses(results) {
    if (results.legnth > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = "+noseX);
        console.log("nose y ="+noseY);
    }
}
