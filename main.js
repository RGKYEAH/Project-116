smokePipe_x = 0;
smokePipe_y = 0;

function preload() {
    smokePipe = loadImage("https://i.postimg.cc/vmp8GY1K/smoke-pipe.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,300,300);
    image(smokePipe,smokePipe_x-30,smokePipe_y+10,30,30);
}

function snapshot() {
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        smokePipe_x = results[0].pose.nose.x;
        smokePipe_y = results[0].pose.nose.y;
        console.log("X = " + smokePipe_x);
        console.log("Y = " + smokePipe_y);

    }
}