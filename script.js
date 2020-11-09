// By ptech12
// L-Fractal Tree
var axiom = 'F';
var sentence = axiom;
var len = 110;
var angle;
rules = [];
rules[0] = {
    a: "F",
    b: "FF+[+FF-F-F]-[-F+F+F]"
};

function generate(){
    len *= 0.56;
    var nextSentence = "";
    for(let i=0 ; i<sentence.length; i++){
        var curr = sentence.charAt(i);
        var flag =false;
        for (let j = 0; j < rules.length; j++) {
            if(curr === rules[j].a){
                nextSentence += rules[j].b;
                flag = true;
                break;
            }
        }
        if(!flag){
            nextSentence += curr;
        }
    }
    sentence =  nextSentence;
    console.log(sentence.length);
    
    createP(sentence);
    turtle();
}
function turtle(){
    background(51);
    strokeWeight(5);
    resetMatrix();
    translate(width/4, height);
    stroke(255);
    for(let i = 0; i < sentence.length; ++i){
        var current  = sentence.charAt(i);
        if(current == "F"){
            line(0, 0, 0, -len);
            translate(0, -len);
        }else if(current == "+"){
            rotate(angle);
        }else if(current == "-"){
            rotate(-(angle));
            stroke(0,0,255, 1000);
        }else if(current == "["){
            push();
            
            stroke(0, 255, 0, 1000);
        }else if (current == "]"){
            pop();
            stroke(255);
        }
        strokeWeight(3);
        // len -= 1;
    }
}

function setup(){
    createCanvas(1000, 1000);
    var btn = createButton("Generate");
    turtle();
    btn.mousePressed(generate);
    var slide = createSlider(0, 100, 100/2, 0.2);
    angle =  -slide.value();
    createP(sentence);
}