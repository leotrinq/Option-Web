//Trinquet Léo - TP1 : Exercice 1.c

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder1');
  smooth();
  background(230); //fond blanc
  
  noStroke();
  let magenta = [197,80,106];
  let bleu = [55,83,192];
  let marron = [173,86,74];
  
  //23 rectangles de couleur magenta, bleue ou marron
  for (i=0 ; i<23 ; i++)
    {
      let couleur = random([magenta, bleu, marron]);
      fill(couleur[0],couleur[1],couleur[2]);
      rect(random(10,350),random(10,350),random(35,65),random(35,65));      
    }
  
  //28 petits rectangles noirs
  fill(0);
  for (i=0 ; i<14 ; i++)
    {
      rect(random(10,390),random(10,390),random(6,10),random(20,30));      
    }
  for (i=0 ; i<14 ; i++)
    {
      rect(random(10,390),random(10,390),random(20,30),random(6,10));      
    }
}
