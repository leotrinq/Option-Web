//Trinquet Léo - TP1 : Exercice 1.b.1

function setup() {
 
  let canvas = createCanvas(410,500);
  canvas.parent('sketch-holder2');

  smooth();

  // fond noir
  fill(0);
  rect(-10,-10,400,504);
  
  strokeWeight(10);
  
  //carré rouge
  fill(255,0,0); 
  square(2,2,100);
 
  //carrés blancs
  fill(255,255,255); 
  square(2,100,110);
  square(98,2,200);
  rect(290,200,110,198);
  
  //carré bleu
  fill(0,0,255); 
  square(2,200,288);
  
  //carré vert
  fill(0,255,0); 
  rect(290,2,110,198);
  
  //carré jaune
  fill(255,255,0);
  square(290,380,110);
}