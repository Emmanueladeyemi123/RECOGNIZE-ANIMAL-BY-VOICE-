

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4KHW6DC75/model.json" ,modelReady());
}

function modelReady(){
    classifier.classify(gotResult());
}

function gotResult(error,result)
{
    console.log("Got result");
}