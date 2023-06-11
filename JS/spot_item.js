const comment = document.querySelector("#comment");
let commentList;

window.onload = function () {
  let spot;
  spot = getMsg();
  show(spot);

}

function getMsg() {
  let spot = decodeURI(window.location.search);
  console.log(spot);
  return spot;
}

function blobToBase64(blob_data, callback) {
  let reader = new FileReader()
  reader.onload = (e) => {
      if (callback) {
          callback(e.target.result)
      }
  }
  reader.readAsDataURL(blob_data)
}

function updataDate(n) {
  let page=document.querySelector('#page');
  comment.innerHTML='';
}

function show(spot) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://192.168.1.106:3000/showSpot' + spot, true);
  xhr.responseType = 'json';
  
  xhr.onload = function () {
    commentList=this.response.data;
    if (this.readyState == 4) {
      if (this.status == 200) {
        //数据
        let res = "";
        console.log(commentList);
        for (let index in commentList) {
          res += '<div id="comment-show"' + 'class="' + commentList[index].Cid + '">';
          res += '<span><img src="' + commentList[index].face + '"></span>';
          res += '<span>' + commentList[index].username + '</span>';
          res += '<hr/><ul><li></li><li></li><li></li><li></li><li></li></ul><div>';
          res += '<h4>' + commentList[index].title + '</h4></div>';
          res += '<p>' + commentList[index].comment + '</p>';
          res += '<div><span>撰写日期：' + commentList[index].cdata.substring(0, 10) + '</span>';
          res += '<span id="icon-love"><img src="./img/love.png"></span></div></div><hr/>';
        }
        console.log(res);
        comment.innerHTML = res;

        //分页
        document.querySelector("h1").innerHTML = commentList[0].place;
        let numCount = commentList.length;
        let pageCount=Math.ceil(numCount/limit);
        let prev=document.querySelector('#pre');
        let next=document.querySelector('#next');
      }
    }
  }
  xhr.send();
}


