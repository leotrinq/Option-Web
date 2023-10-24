//Trinquet Léo - TP1 : Exercice 4 : Tablettes à Dessin | 14/03

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.parent('sketch-holder1');
  background(100);
  
  strokeWeight(3);
  fill(200);
  rect(20,20,100,360); //Rectangle gris
  fill(255);
  rect(150,20,530,360); //Rectangle blanc
  
  strokeWeight(2);
  fill(255,0,0);
  rect(35,35,25,25); //Rouge
  
  fill(51,255,255);
  rect(80,35,25,25); //Cyan
  
  fill(255,153,51);
  rect(35,80,25,25); //Orange
  
  fill(0,128,253);
  rect(80,80,25,25); //Bleu
  
  fill(255,255,51);
  rect(35,125,25,25); //Jaune
  
  fill(0,0,204);
  rect(80,125,25,25); //Bleu foncé
  
  fill(51,255,51);
  rect(35,170,25,25); //Vert clair
  
  fill(153,51,255);
  rect(80,170,25,25); //Violet
  
  fill(0,153,0);
  rect(35,215,25,25); //Vert foncé
  
  fill(255,102,255);
  rect(80,215,25,25); //Rose
  
  fill(255);
  rect(35,260,25,25); //Blanc
  
  fill(0);
  rect(80,260,25,25); //Noir
  
  fill(255);
  rect(35,295,70,70); //Couleur choisie
  
  stroke(255);
}


function draw() {
  //==========coordonnées==========
    //Rouge
    if(mouseIsPressed){
      if(mouseX>35 && mouseX < 60 && mouseY > 35 && mouseY <60)
        {
          stroke(0);
          strokeWeight(2);
          fill(255,0,0);
          rect(35,295,70,70);
          stroke(255,0,0);
        }
      //Cyan
      else if(mouseX>80 && mouseX<105 && mouseY>35 && mouseY<60)
        {
          stroke(0);
          strokeWeight(2);
          fill(51,255,255);
          rect(35,295,70,70);
          stroke(51,255,255);
        }
      //Orange
      else if(mouseX>35 && mouseX < 60 && mouseY>80 && mouseY<105)
        {
          stroke(0);
          strokeWeight(2);
          fill(255,153,51);
          rect(35,295,70,70);
          stroke(255,153,51);
        }
      //Bleu
      else if(mouseX>80 && mouseX < 105 && mouseY>80 && mouseY<105)
        {
          stroke(0);
          strokeWeight(2);
          fill(0,128,253);
          rect(35,295,70,70);
          stroke(0,128,253);
        }
      //Jaune
      else if(mouseX>35 && mouseX < 60 && mouseY>125 && mouseY<150)
        {
          stroke(0);
          strokeWeight(2);
          fill(255,255,51);
          rect(35,295,70,70);
          stroke(255,255,51);
        }
      //Bleu Foncé
      else if(mouseX>80 && mouseX < 105 && mouseY>125 && mouseY<150)
        {
          stroke(0);
          strokeWeight(2);
          fill(0,0,204);
          rect(35,295,70,70);
          stroke(0,0,204);
        }
      //Vert clair
      else if(mouseX>35 && mouseX < 60 && mouseY>170 && mouseY<195)
        {
          stroke(0);
          strokeWeight(2);
          fill(51,255,51);
          rect(35,295,70,70);
          stroke(51,255,51);
        }
      //Violet
      else if(mouseX>80 && mouseX < 105 && mouseY>170 && mouseY<195)
        {
          stroke(0);
          strokeWeight(2);
          fill(153,51,255);
          rect(35,295,70,70);
          stroke(153,51,255);
        }
      //Vert Foncé
      else if(mouseX>35 && mouseX < 60 && mouseY>215 && mouseY<240)
        {
          stroke(0);
          strokeWeight(2);
          fill(0,153,0);
          rect(35,295,70,70);
          stroke(0,153,0);
        }
      //Rose
      else if(mouseX>80 && mouseX < 105 && mouseY>215 && mouseY<240)
        {
          stroke(0);
          strokeWeight(2);
          fill(255,102,255);
          rect(35,295,70,70);
          stroke(255,102,255);
        }
      //Blanc
      else if(mouseX>35 && mouseX < 60 && mouseY>260 && mouseY<285)
        {
          stroke(0);
          strokeWeight(2);
          fill(255);
          rect(35,295,70,70);
          stroke(255);
        }
      //Noir
      else if(mouseX>80 && mouseX < 105 && mouseY>260 && mouseY<285)
        {
          stroke(0);
          strokeWeight(2);
          fill(0);
          rect(35,295,70,70);
          stroke(0);
        }
    }
  //Si on appuie dans la zone de dessin, une ligne apparait
   if (mouseIsPressed && (mouseX>152 && mouseX < 678) && (mouseY>22 && mouseY < 378)) {
    
    strokeWeight(5);
    line(mouseX,mouseY,pmouseX,pmouseY);

   }

}