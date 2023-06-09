const left = document.querySelector("#left");
const btn = document.querySelector("button");
window.onload = function () {
  let spot;
  spot = getMsg();
  show(spot);
}

btn.onclick = function () {
  let content = document.querySelector("input").value;
  console.log(content);
  let page = "./spot_search.html?search=" + content;
  window.location.href = encodeURI(page);
}

left.onclick = function () {
  let leftItem = document.querySelectorAll("#left-item");
  for (let i = 0; i < leftItem.length; i++) {
    leftItem[i].addEventListener(
      "click",
      function () {
        let page="./spot_item.html?spot="+this.className;
        window.location.href=encodeURI(page);
      }
    )
  }
}

function getMsg() {
  let spot = decodeURI(window.location.search);
  console.log(spot);
  return spot;
}

function show(spot) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://192.168.1.108:3000/searchSpot' + spot, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let spotList = this.response.data;
        console.log(spotList);
        let res = "";
        for (let index in spotList) {
          res += '<div id="left-item" class="' + spotList[index].spotname + '">';
          res += '<img src="' + spotList[index].picture + '" alt="' + spotList[index].spotname + '">';
          res += '<div><h2>' + spotList[index].spotname + '</h2>';
          res += '<ul><li></li><li></li><li></li><li></li><li></li><span>' + spotList[index].view + '条评论</span>';
          res += '</ul>';
          res += '<p>' + spotList[index].description + '</p>';
          res += '<p>' + spotList[index].introuduce + '</p>';
          res += '</div></div>';
          // console.log(res);
        }
        left.innerHTML = res;
      }
    }
  }
  xhr.send();
}