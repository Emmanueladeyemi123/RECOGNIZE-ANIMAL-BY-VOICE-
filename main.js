

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4KHW6DC75/model.json" ,modelReady());
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,results)
{
    if (error){
        console.error(error);
    }
    if (results[0].label=="cat"){
        animals.src="cat.jfif";
    }
    else if (results[0].label=="dog"){
        animals.src="dog.jfif";
    }
    else if (results[0].label=="cow"){
        animals.src="cow.jfif";
    }
    else{
        animals.src="cat.jfif";
    }

}

cat=document.getElementById("cat.jfif");
dog=document.getElementById("dog.jfif");
cow=document.getElementById("cow.jfif");
lion=document.getElementById("lion.jfif");

