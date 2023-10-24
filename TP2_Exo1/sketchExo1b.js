//Trinquet Léo - TP2 : Exercice 1 : Stéréoscopie | 21/03

let img;

function preload(){
  img1 =loadImage("../images/photo_G.jpg")
  img2 =loadImage("../images/photo_D.jpg")

}

function setup() {
  let canvas = createCanvas(378, 336);
  canvas.parent('sketch-holder1');
  background(255);
  pixelDensity(1);
  blendMode(ADD)
  img1.loadPixels();
  img2.loadPixels();
  
  for (let i = 0; i < 4*width*height; i=i+4)
    {
        img1.pixels[i+1] = 0; //composante verte
        img1.pixels[i+2] = 0; //composante bleue
      
        img2.pixels[i+0] = 0; //composante rouge
    }
  img1.updatePixels();
  image(img1, 0, 0);
  img2.updatePixels();
  image(img2, 0, 0);
}