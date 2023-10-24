//Trinquet Léo - TP3 : Exercice 1 :  Un insecte volant | 28/03


// VARIABLES GLOBALES 
// ========================
let nomImage1 = "../images/insecte.png";
let nomImage2 = "../images/background.png";
let spriteSheet;
let animatedCharacter = [];
let imageEnCours; // représente l'image affichée à l'instant t
let imageBackground; // représente l'image de fond
let nbImages = 4; // nombre d'images au total
let nbSprite = 0; //type nombre = compteur de l'image en cours
let timer =0;
let posBack = 0; // compteur pour faire défiler le fond

let width=500; 

// PRECHARGEMENT DES IMAGES
// ========================
function preload() {
  spriteSheet = loadImage(nomImage1);
  imageBackground = loadImage(nomImage2);
}

// INITIALISATION 
// ========================
function setup() {
  // on créé le canvas HTML 5
  let canvas = createCanvas(width,480);
  canvas.parent('sketch-holder1');

  
  // on découpe l'image principale en sous images qu'on stocke dans un tableau

  let i = 0;
  while(i<4)
    {
      i+=4
      imageEnCours = spriteSheet.get(0,240,240,240);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(240,240,240,240);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(480,240,240,240);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(720,0,240,240);
      animatedCharacter.push(imageEnCours) ;
      // on récupère la bonne image dans la grille      
    }
  
}

// AFFICHAGE TRAME PAR TRAME 
// ===============================
function draw() {
  posBack += 2; // pour faire défiler le fond, on prépare une sorte de compteur
  if(timer > 2){
    timer = 0;
    
    // on affiche le fond en 2 fois : le bord droit de l'image se colle complètement à gauche tandis que puis le bord gauche de l'image ira de la fin du bord droit de l'image jusqu'au bord droit du canvas
    image(imageBackground,posBack,0);
    image(imageBackground, posBack - 2160,0);
    
    // on dessine un sol vert
    fill(75,125,0);
    rect(0,400,width,80);
    
    
    // on affiche l'insecte
    image(animatedCharacter[nbSprite],width/3,100);
    
    // vérification du compteur pour boucler le sprite si besoin. 
    nbSprite += 1;
    if(nbSprite > nbImages-1){ // comme on n'a que 7 images dans la spritesheet, on recommence à 0 quand on arrive au bout
      nbSprite = 0;
    }
  }
  else{
    timer++; 
  }
  if(posBack > +2160){ // quand on a fait le tour du bandeau de fond
    posBack = 0; // alors on reprend au début
  }
}