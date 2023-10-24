function setup() {
    
  let canvas = createCanvas(335,335); //zone de dessin
  canvas.parent('sketch-holder3');
  
  smooth();
  background(255); //fond blanc
  
  fill(255,255,255); //couleur intérieure des formes
  strokeWeight(5);  //épaisseur de contour des formes
  
  x=0;  // contour noir
  y=35;
  stroke(x); //couleur du contour des cercles
  for (i = 12 ; i<180 ; i+=24)           //On trace un carré de cercles de taille 20
    {
      for (j=12 ; j<170 ; j+=24)
        {
          stroke(x) ;                       //couleur du contour des cercles
          circle(i,j,20);                   //partie haut gauche
          circle(i,2*170-j-5,20);           //partie bas gauche
          circle(2*180-i-25,j,20);          //partie haut droite
          circle(2*180-i-25,2*170-j-5,20);  //partie bas droite
          x=x+y //on éclaircit le contour du cercle à chaque fois qu'on s'approche du centre
        }
      x=0;   //On remet la couleur du contour initiale lorsqu'on change de colonne
      y=y-3; //On réduit la rapidité du fondu de couleur du contour vers le blanc
    }
}