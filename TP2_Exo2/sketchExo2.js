//Trinquet Léo - TP2 : Exercice 2 :  Panorama urbain sur fond étoilé | 23/03


function setup() {
  let canvas = createCanvas(680, 500);
  canvas.parent('sketch-holder1');
  background(0,0,10); // ciel noir
  //background(10,19,50); // ciel bleu
  for (let n=0 ; n<600 ; n++)
    {
      new Etoile();
    }

  //URBAIN
  fenêtres = [] //On ajoute les coordonnées de chaque fenêtre pour la partie allumer/éteindre
  x = 8; // largeur des fenêtres+écart
  let y = 4; // distance entre deux bâtiments
    noStroke();
    fill(150); //fond bâtiments
    
    //Bâtiments
    rect(0    +    y,500,6*x,-170) //6x (5fenêtres+bord)
    rect(6*x  +  2*y,500,3*x,-220)
    rect(9*x  +  3*y,500,8*x,-90)
    rect(17*x +  4*y,500,5*x,-150)
    rect(22*x +  5*y,500,9*x,-200)
    rect(31*x +  6*y,500,8*x,-250)
    rect(39*x +  7*y,500,4*x,-260)
    rect(43*x +  8*y,500,9*x,-120)
    rect(52*x +  9*y,500,8*x,-180)
    rect(60*x + 10*y,500,3*x,-270)
    rect(63*x + 11*y,500,4*x,-160)
    rect(67*x + 12*y,500,8*x,-140)
    rect(75*x + 13*y,500,3*x,-150)
    
    let h = 10; //hauteur fenêtres
    
    //Fenêtres Bâtiment 1 :
    
    
    // fenêtres de haut en bas
    for (let j=500-170+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=2*y-1 ; i<5*x+2*y ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
            
          }
      }
    
    //Fenêtres Bâtiment 2 :
    for (let j=500-220+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=6*x  +  3*y-1 ; i<8*x+3*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            fenêtres.push(rect(i,j,x,h));
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 3 :
    for (let j=500-90+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=9*x  +  4*y-1 ; i<16*x+4*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 4 :
    for (let j=500-150+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=17*x  +  5*y-1 ; i<21*x+5*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 5 :
    for (let j=500-200+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=22*x  +  6*y-1 ; i<30*x+6*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 6 :
    for (let j=500-250+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=31*x  +  7*y-1 ; i<38*x+7*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 7 :
    for (let j=500-260+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=39*x  +  8*y-1 ; i<42*x+8*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 8 :
    for (let j=500-120+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=43*x  +  9*y-1 ; i<51*x+9*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 9 :
    for (let j=500-180+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=52*x  +  10*y-1 ; i<59*x+10*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 10 :
    for (let j=500-270+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=60*x  +  11*y-1 ; i<62*x+11*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 11 :
    for (let j=500-160+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=63*x  +  12*y-1 ; i<66*x+12*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 12 :
    for (let j=500-140+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=67*x  +  13*y-1 ; i<74*x+13*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
    
    //Fenêtres Bâtiment 13 :
    for (let j=500-150+4 ; j<485 ; j+=h+1) 
      {
        h = random(7,13);
        for(let i=75*x  +  14*y-1 ; i<77*x+14*y-1 ; i+=x+0.25)
          {
            let couleur = random(100,220);
            fill(couleur,couleur,0);
            rect(i,j,x,h);
            append(fenêtres,i);
            append(fenêtres,j);
            append(fenêtres,h);
            append(fenêtres,couleur);
          }
      }
} 


function mouseClicked() {
  for (var i = 0; i < fenêtres.length-4; i+=4) {
    var d = dist(mouseX, mouseY, fenêtres[i], fenêtres[i+1]);
    if (d<7)
    {
      if (fenêtres[i+3] < 160) //Si la fenêtre est éteinte, l'allumer
        {
          fill(220,220,0);
          rect(fenêtres[i],fenêtres[i+1],x,fenêtres[i+2]);
          let newFenêtres=[fenêtres[i],fenêtres[i+1],fenêtres[i+2],220]
          fenêtres.splice(i-1,4);
          splice(fenêtres,newFenêtres,i-1)
        }
      else // Sinon l'éteindre
        {
          fill(100,100,0);
          rect(fenêtres[i],fenêtres[i+1],x,fenêtres[i+2]);
          let newFenêtres=[fenêtres[i],fenêtres[i+1],fenêtres[i+2],100]
          fenêtres.splice(i-1,4);
          splice(fenêtres,newFenêtres,i-1)
        }
    }
  }
}

function draw() {
  /*
  for (let n=0 ; n<100 ; n++)
    {
      new Filante();
    }*/
}