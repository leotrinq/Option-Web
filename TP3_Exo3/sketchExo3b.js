//Trinquet Léo - TP3 : Exercice 3 : Slider | 08/04

let slider;

function preload(){
  img1 =loadImage("../images/Initiales1.png")
  img2 =loadImage("../images/Piet1.png")
}

function setup() {
  let canvas = createCanvas(600,600);
  canvas.parent('sketch-holder1');
  
  slider1 = createSlider(1, 576, 288);
  slider1.parent('sketch-holder2');
  slider1.style('width', '80px');
  
  slider2 = createSlider(1, 24, 12);
  slider2.parent('sketch-holder2');
  slider2.style('width', '80px');
}

function draw() {
  clear();
  
  let val1 = slider1.value();
  image(img1, 0, 0, val1,val1); // Correspondance linéaire
  
  let val2 = slider2.value();
  image(img2, 0, 0, val2*val2,val2*val2); // Correspondance polynomiale d'ordre 2
}