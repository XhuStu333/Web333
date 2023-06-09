/*汉堡式导航栏*/
var x = document.getElementById("topNav");
var btnNav=document.getElementsByClassName("icon")[0];
btnNav.onclick=navShow;
function navShow() {   
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }      
  console.log("你点了一哈");
  }