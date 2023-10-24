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

function toggle1(txt) {
          var txt=document.getElementById(txt);
          var currWidth = txt.getBoundingClientRect().height;
          txt.style.height = currWidth + 220 + "px";


}

function toggle2(txt) {
          var txt=document.getElementById(txt);
          var currWidth = txt.getBoundingClientRect().height;
          txt.style.height = currWidth + -220 + "px";
}