img = "";
status = "";
Objects = [];

function preload() {
img = "loadImage('dog_cat.jpg')";
}
function setup() {
    canvas =createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTMl = "status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(225);
        g = random(225);
        b = random(225);
        objectDetector.detect(video, gotResult);
        for (1 = 0; 1< Objects. length;1++){
        document.getElementById("status").innerHTML ="Status : object Detected";
        document.getElementById("number_of_objects").innerHTML = "number of objects detected are : "+Objects.length;
        fill(r,g,b);
        precent = floor(Objects [i].confidence * 100);
        text(Objects [i].label + "" + percent + "%", Objects[i].x, Objects[i].y);
        noFill();
        stroke(r,g,b)
        rect(Objects[i].x, Objects[i].y, Objects[i].width, Objects[i].height);                                                                                                                                                                                                                                                                                                                                                                        
    }
    fill("#FF0000")
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350 );
}

    fill("FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("FF0000")
    rect(300, 90, 270, 320 );
}
function modelLoaded()  {
    console.log("Model Loaded!")
    status = true;
    objectDetector.document(video,gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error)
    }
    console.log(results);
    Objects = results;
}

for (i = o; i < Objects.length; i++) 
{
    document.getElementById("status").innerHTML = "Status : object Detected";

    fill("#FF0000");
    precent = floor(Objects[i].confidence * 100);
    text(Objects[i].label + " "+ precent + "%", Objects[i].y,);
}
  


