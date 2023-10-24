//Trinquet Léo - TP1 : Exercice 2 & 3: Petit monstre + Mouvement des yeux | 14/03

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent('sketch-holder1');
  background(100);
  
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
  
}

function draw() {
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

  
}