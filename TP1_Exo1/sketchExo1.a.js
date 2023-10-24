//Trinquet Léo - TP1 : Exercice 1.a

function setup() {
  
  x=400
  y=400
  let canvas = createCanvas(x,y); //zone de dessin
  canvas.parent('sketch-holder1');
  
  smooth();
  background(0); //fond noir

  strokeWeight(x/20); //épaisseur des traits
  
  //Effet Glow
  fill(255,255,255,3/2);
  for(i = 0; i < 150; i++){
    ellipse(width/2,height/2, i*3);
  }
  
  //Lettre L
  stroke(255,255, 255);
  line(x/3, x/6, x/3, x*2/3); // ligne blanche verticale
  line(x/3, x*1.9/3, x*2/3, x*2/3); // ligne blanche horizontale
  
  //Lettre T
  stroke(100,100, 100);
  line(x*5/12, x/3, x*11/12, x/3); // ligne grise verticale
  line(x*2/3, x/3, x*2/3, x*5/6); // ligne grise horizontale
  
  //Point Rouge
  stroke(255,100, 100);
  line(x/2, x/2, x/2, x/2); // point rouge
}
