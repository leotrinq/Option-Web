class Etoile
{
  constructor()
  {
    // attributs
    this.x = random(800);
    this.y = random(500);
    // Les faisceaux sont tous de la même couleur pour une étoile donnée
    this.color = color(random(100,255),random(100,255),random(100,255)); 
    stroke(this.color);
    
    // Le nombre de faisceaux est variable
    for (let i=0; i < random(5,15) ; i++) 
      {       
        // La taille des étoiles est variable
        strokeWeight(random(1,2.5)); 
        //centre ellicoïdal
        point(this.x, this.y) 
        strokeWeight(0.2);
        // L'angle entre deux faisceaux successifs est variable
        // La longueur des faisceaux est variable
        line(this.x, this.y, random(this.x-8, this.x+8), random(this.y-8, this.y+8)) 
      }
    for (let j=0; j < random(3,5) ; j++)
      {
        // Les plus longs sont plus rares
        line(this.x, this.y, random(this.x-15, this.x+15), random(this.y-15, this.y+15))
      }
  }
}