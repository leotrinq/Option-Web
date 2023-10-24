function setup() {
  createCanvas(400, 400);
}

function draw() {
}


function toggle(txt) {
          var txt=document.getElementById(txt);
          if (txt.style.display == "inline")
          {
            txt.style.display = "none";
          }
          else 
          {
            txt.style.display = "inline";}
}    

function del(txt) {
          var txt=document.getElementById(txt);
          if (txt.style.display == "inline")
          {
            txt.style.display = "none";
          }
}