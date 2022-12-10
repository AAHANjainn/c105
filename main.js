Webcam.set({
height:300,
width:340,
crop_width:340,
crop_height:250,
image_format:"png",
png_quality:100
});

webcam = document.getElementById("camera");

Webcam.attach(webcam);

console.log("ml5 version"+ ml5.version);

function click_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img src='"+data_uri+"'id='captured_image'>"
    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XR8YmI7ij/" , ModelLoaded);

function ModelLoaded(){
    console.log("model is loaded");

}

function classify_image(){
    img = document.getElementById("captured_image");
    classifier.classify(img , gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence;

    }
}