var paragraphe = document.getElementById("paragraphe-intro");

let longeur = 125;
function cacherIntro() {
    paragraphe.classList.add("cacher");
    
}
function setup() {
    var cnv = createCanvas(500, 500);
   /*  var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y + 240); */ 
    background(0, 0, 255);
}
  
function draw() {

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            stroke(249, 163, 44);
            noFill();
            square(i * 125, j * 125, 125);
        }

    }
}   
