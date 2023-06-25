//import images 
let img_x = "url('./imge/x.png')";
let img_o = "url('./imge/o.png')";

function clickBoard(num) {
  let box = document.getElementById(num);
  box.style.backgroundImage = img_x;
  box.style.backgroundSize = "cover";
}
