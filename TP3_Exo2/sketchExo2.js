//Trinquet Léo - TP3 : Exercice 2 :  Un petit monstre gourmand | 28/03

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

let width=400; 

let mangé = false;

// PRECHARGEMENT DES IMAGES
// ========================
function preload() {
  spriteSheet = loadImage(nomImage1);
  imageBackground = loadImage(nomImage2);
}

function setup() {
  let canvas = createCanvas(width,600);
  canvas.parent('sketch-holder1');
  background(109,208,247);
  frameRate(100);
  

  // on découpe l'image principale en sous images qu'on stocke dans un tableau

  let i = 0;
  while(i<4)
    {
      i+=4
      imageEnCours = spriteSheet.get(0,240,240,240);
      imageEnCours.resize(120,120);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(240,240,240,240);
      imageEnCours.resize(120,120);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(480,240,240,240);
      imageEnCours.resize(120,120);
      animatedCharacter.push(imageEnCours) ;
      imageEnCours = spriteSheet.get(720,0,240,240);
      imageEnCours.resize(120,120);
      animatedCharacter.push(imageEnCours) ;
      // on récupère la bonne image dans la grille      
    }
}


function draw() {
  
  //=======================Fond Ciel==========================
  posBack += 2; // pour faire défiler le fond, on prépare une sorte de compteur
  if(timer > 2){
    timer = 0;
    
    // on affiche le fond en 2 fois : le bord droit de l'image se colle complètement à gauche tandis que puis le bord gauche de l'image ira de la fin du bord droit de l'image jusqu'au bord droit du canvas
    image(imageBackground,posBack,0);
    image(imageBackground, posBack - 2160,0);
    
  if(posBack > +2160){ // quand on a fait le tour du bandeau de fond
    posBack = 0; // alors on reprend au début
  }
  //=========================================================
    
    
//===================================================================
//=============================Monstre===============================
//===================================================================
  //Tête
  strokeWeight(15);
  stroke(66,36,100);
  noFill();
  curve(329, 400, 312, 163, 379, 149, 290, -162);
  curve(352, 353, 294, 94, 342, 33, 3, -239);
  curve(600, 33, 197, 42, 200, -43, -120, -191);
  curve(width-329, 400, width-312, 163, width-379, 149, width-290, -162);
  curve(width-352, 353, width-294, 94, width-342, 33, width-3, -239);
  strokeWeight(5);
  fill(153,51,255);
  curve(600, 1500, 92, 200, 308, 200, -200, 1500);
  
  //fond bleu
  fill(109,208,247);
  noStroke();
  rect(0,400,400,200);
    
  //flaque verte
  strokeWeight(10);
  stroke(28,66,29);
  fill(87,161,76);
  ellipse(200,560,500,150);
  
  //Corps
  noFill();
  strokeWeight(150);
  stroke(80,17,44);
  curve(-1000, -1000, 202, 230, 185, 600, 1200, 1500);
  strokeWeight(80);
  stroke(153,51,255);
  curve(-1000, -1000, 202, 222, 185, 600, 1200, 1500);
  noStroke();
  fill(250,83,113);
  ellipse(183,300,20,40);
  ellipse(154,394,20,30);
  ellipse(88,477,20,40);
  ellipse(98,566,20,40);
  ellipse(307,292,20,40);
  ellipse(304,410,20,40);
  ellipse(226,485,20,30);
  ellipse(233,570,20,30);
  strokeWeight(10);
  stroke(111,38,93);
  noFill();
  curve(230, 226, 210, 307, 289, 301, 230, 226);
  curve(294, 332, 198, 389, 267, 427, 294, 332);
  curve(210, 414, 185, 494, 128, 445, 210, 414);
  curve(168, 447, 116, 561, 200, 558, 168, 447);
  
  //Bouche
  strokeWeight(10);
  stroke(155,65,75);
  fill(30,15,36);
  ellipse(200,210,210,100);
    
  
  //Dents
  strokeWeight(2);
  stroke(12);
  fill(255);
  triangle(109,192,121,183,124,205);
  triangle(144,174,161,169,159,193);
  triangle(186,166,207,166,198,190);
  triangle(width-144,174,width-161,169,width-159,193);
  triangle(width-109,192,width-121,183,width-124,205);
  triangle(109,height-192-180,121,height-183-180,124,height-205-180);
  triangle(144,height-174-180,161,height-169-180,159,height-193-180);
  triangle(186,height-166-180,207,height-166-180,198,height-190-180);
  triangle(width-144,height-174-180,width-161,height-169-180,width-159,height-193-180);
  triangle(width-109,height-192-180,width-121,height-183-180,width-124,height-205-180);
  
  //Salive
  strokeWeight(3);
  stroke(28,66,29);
  fill(87,161,76);
  arc(177, 254, 10, 65, 0, PI);
  arc(210, 254, 10, 15, 0, PI);
  arc(121, 236, 10, 60, PI/4, -PI/1.1);
  arc(276, 238, 12, 150, -PI/4, PI/1.1);
//===================================================================
//===================================================================
//===================================================================
    
  //========Lorsqu'on appuie sur B========
    if (key === 'b') {
        fermerbouche();
      }
  //======================================
    
    if (dist(mouseX,mouseY,200,210) < 100 && mouseY > 165 && mouseY < 250){
      
      fermerbouche();
      mangé = true;
   }
    
    if(mangé == true)
      {
        fermerbouche();
      }
    
  //==========coordonnées souris==========
  /*if (mouseIsPressed) {
      background(109,208,247);
      noStroke();
      fill(255);
      rect(290,530,110,70);
      fill(255, 0, 0);
      textSize(30);
      text('X : '+ mouseX, 300,560);
      text('Y : '+ mouseY, 300,590);

  }*/
  //======================================
    
  /* 
  //==================Cercle autour de la souris=====================
  stroke(0);
  strokeWeight(3);
  fill(150);
  circle(random(pmouseX-3,pmouseX+3),random(pmouseY-3,pmouseY+3), 20);
  //==================================================================
  */ 
    
  //=====================Orientation des yeux======================== 
  //Si la souris est au niveau des yeux, ils regardent en face, sinon ils suivent la souris
  if (dist(200,150,mouseX,mouseY) < 85 && mouseY < 160){ 
    strokeWeight(5);
    stroke(77,20,149);
    fill(79,116,220);
    circle(111,145,30);
    noStroke();
    fill(89,252,251);
    circle(111,145,10);

    stroke(77,20,149);
    fill(79,116,220);
    circle(131,94,25);
    noStroke();
    fill(89,252,251);
    circle(131,94,8);

    stroke(77,20,149);
    fill(79,116,220);
    circle(187,61,35);
    noStroke();
    fill(89,252,251);
    circle(187,61,15);

    stroke(77,20,149);
    fill(79,116,220);
    circle(171,137,20);
    noStroke();
    fill(89,252,251);
    circle(171,137,4);

    stroke(77,20,149);
    fill(79,116,220);
    circle(230,130,35);
    noStroke();
    fill(89,252,251);
    circle(230,130,15);

    stroke(77,20,149);
    fill(79,116,220);
    circle(287,145,30);
    noStroke();
    fill(89,252,251);
    circle(287,145,10);

    stroke(77,20,149);
    fill(79,116,220);
    circle(267,110,23);
    noStroke();
    fill(89,252,251);
    circle(267,110,6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(250,70,23);
    noStroke();
    fill(89,252,251);
    circle(250,70,6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(218,89,23);
    noStroke();
    fill(89,252,251);
    circle(218,89,6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(171,103,23);
    noStroke();
    fill(89,252,251);
    circle(171,103,6);
  } else {
    strokeWeight(5);
    stroke(77,20,149);
    fill(79,116,220);
    circle(111,145,30);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 104, 118),constrain(mouseY, 138, 152),10);

    stroke(77,20,149);
    fill(79,116,220);
    circle(131,94,25);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 124, 138),constrain(mouseY, 87, 101),8);

    stroke(77,20,149);
    fill(79,116,220);
    circle(187,61,35);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 180, 194),constrain(mouseY, 54, 68),15);

    stroke(77,20,149);
    fill(79,116,220);
    circle(171,137,20);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 164, 178),constrain(mouseY, 130, 144),4);

    stroke(77,20,149);
    fill(79,116,220);
    circle(230,130,35);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 223, 237),constrain(mouseY, 123, 137),15);

    stroke(77,20,149);
    fill(79,116,220);
    circle(287,145,30);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 280, 294),constrain(mouseY, 138, 152),10);

    stroke(77,20,149);
    fill(79,116,220);
    circle(267,110,23);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 260, 274),constrain(mouseY, 103, 117),6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(250,70,23);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 243, 257),constrain(mouseY, 63, 77),6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(218,89,23);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 211, 225),constrain(mouseY, 82, 96),6);

    stroke(77,20,149);
    fill(79,116,220);
    circle(171,103,23);
    noStroke();
    fill(89,252,251);
    circle(constrain(mouseX, 164, 178),constrain(mouseY, 96, 110),6);
  }
  //=================================================================
  
  //=======================Affichage Insecte========================= 
    if (mangé == false)
      {
        image(animatedCharacter[nbSprite],random(pmouseX-4,pmouseX+4)-40,random(pmouseY-4,pmouseY+4)-65);        
      }
    // vérification du compteur pour boucler le sprite si besoin. 
    nbSprite += 1;
    if(nbSprite > nbImages-1){ // comme on n'a que 7 images dans la spritesheet, on recommence à 0 quand on arrive au bout
      nbSprite = 0;
    }
  }
  else{
    timer++; 
  }
  //=================================================================
}


//==================fermerbouche=====================
function fermerbouche()
{
  //=======================Fond Ciel==========================
  posBack += 2; // pour faire défiler le fond, on prépare une sorte de compteur
  if(timer > 2){
    timer = 0;
  }
    // on affiche le fond en 2 fois : le bord droit de l'image se colle complètement à gauche tandis que puis le bord gauche de l'image ira de la fin du bord droit de l'image jusqu'au bord droit du canvas
    image(imageBackground,posBack,0);
    image(imageBackground, posBack - 2160,0);
    
  if(posBack > +2160){ // quand on a fait le tour du bandeau de fond
    posBack = 0; // alors on reprend au début
  }
  //=========================================================
    
  //flaque verte
  strokeWeight(10);
  stroke(28,66,29);
  fill(87,161,76);
  ellipse(200,560,500,150);
  
  //Corps
  noFill();
  strokeWeight(150);
  stroke(80,17,44);
  curve(-1000, -1000, 202, 230, 185, 600, 1200, 1500);
  strokeWeight(80);
  stroke(153,51,255);
  curve(-1000, -1000, 202, 222, 185, 600, 1200, 1500);
  noStroke();
  fill(250,83,113);
  ellipse(183,300,20,40);
  ellipse(154,394,20,30);
  ellipse(88,477,20,40);
  ellipse(98,566,20,40);
  ellipse(307,292,20,40);
  ellipse(304,410,20,40);
  ellipse(226,485,20,30);
  ellipse(233,570,20,30);
  strokeWeight(10);
  stroke(111,38,93);
  noFill();
  curve(230, 226, 210, 307, 289, 301, 230, 226);
  curve(294, 332, 198, 389, 267, 427, 294, 332);
  curve(210, 414, 185, 494, 128, 445, 210, 414);
  curve(168, 447, 116, 561, 200, 558, 168, 447);
  
  //Tête
  strokeWeight(15);
  stroke(66,36,100);
  noFill();
  curve(329, 400, 312, 163, 379, 149, 290, -162);
  curve(352, 353, 294, 94, 342, 33, 3, -239);
  curve(600, 33, 197, 42, 200, -43, -120, -191);
  curve(width-329, 400, width-312, 163, width-379, 149, width-290, -162);
  curve(width-352, 353, width-294, 94, width-342, 33, width-3, -239);
  strokeWeight(5);
  fill(153,51,255);
  curve(600, 1500, 92, 200, 308, 200, -200, 1500);
  curve(92, -400, 92, 200, 308, 200, 200, -400);
  
  //Bouche
  strokeWeight(10);
  stroke(155,65,75);
  fill(30,15,36);
  ellipse(200,210,210,50);
  
  //Dents
  strokeWeight(2);
  stroke(12);
  fill(255);
  
  triangle(125,height-192-180-7,137,height-183-180-13,131,height-205-180-11);//6
  triangle(149,226,170,228,160,200);//7
  triangle(190,229,210,229,200,200);//8
  triangle(width-149,226,width-170,228,width-160,200);//9
  triangle(width-125,height-192-180-7,width-137,height-183-180-13,width-131,height-205-180-11);//10
  
  triangle(109,205,121,183+17,118,216);//1
  triangle(131,197,152,193,145,215);//2
  triangle(168,192,189,191,180,220);//3
  triangle(width-168,192,width-189,191,width-180,220);//4
  triangle(width-131,197,width-152,194,width-145,215);//5
  triangle(width-109,205,width-121,183+17,width-118,205+11);//5'
   
  //Bouche
  strokeWeight(10);
  stroke(155,65,75);
  noFill(30,15,36);
  ellipse(200,210,210,60);
  
  //Salive
  strokeWeight(3);
  stroke(28,66,29);
  fill(87,161,76);
  arc(174, 229, 10, 65, 0, PI);
  arc(214, 229, 10, 15, 0, PI);
  arc(108, 215, 10, 60, PI/4, -PI/1.1);
  arc(290, 218, 12, 150, -PI/4, PI/1.1);
}
//===================================================














