function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F4QDeSR8N/model.json",modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}

lion = 0;
black_panther = 0;
cheetah = 0;
dog = 0;


function gotResults(error,results){
   if(error){
      console.error(error);
   }
   else{
      console.log(results);
      r = Math.floor(Math.random()*255)+1;
g = Math.floor(Math.random()*255)+1;
b = Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML = "detected voice is off" + results[0].label;
document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";

document.getElementById("result_count").innerHTML = "detected lion" + lion + "black panther" + black_panther + "dog" + dog + "cheetah" + cheetah;
document.getElementById("result_count").style.color = "rgb("+r+","+g+","+b+")";
   }
}

