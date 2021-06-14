function preload() {
    loadImage("flower_pot.jpg");
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult() {
        if(error) {
            console.log(error);
        }
        else {
            console.log(results);
        }
}