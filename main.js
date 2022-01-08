function setup() {
  canvas = createCanvas(280, 280);
  canvas.position(450, 200);
  background("white");
}
  function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML = "label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "confidence: " + Math.round(results[0].confidence * 100) + " %";
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }
array_1['pen','paper','skull','camera','book','bottle']

random_no=Math.floor((Math.random()*array_1.length)+1)

Element_of_array_1[random_no]