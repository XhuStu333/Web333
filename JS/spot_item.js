const comment = document.querySelector("#comment");
let numCount;
let columnsCounts;
let pageCount;
let pageNum;
let currPageNum;

let prePage, nextPage;
let firstPage, lastPage;

window.onload = function () {
  let spot;
  spot = getMsg();
  commentList = show(spot);
}

function getMsg() {
  let spot = decodeURI(window.location.search);
  console.log(spot);
  return spot;
}

function show(spot, commentList) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://192.168.78.34:3000/showSpot' + spot, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    let commentList=this.response.data;
    if (this.readyState == 4) {
      if (this.status == 200) {
        //数据
        let res = "";
        for (let index in commentList) {
          res += '<div id="comment-show"' + 'class="' + commentList[index].Cid + '">';
          res += '<span><img src="' + commentList[index].face + '"></span>';
          res += '<span>' + commentList[index].username + '</span>';
          res += '<hr/><ul><li></li><li></li><li></li><li></li><li></li></ul><div>';
          res += '<h4>' + commentList[index].title + '</h4></div>';
          res += '<p>' + commentList[index].comment + '</p>';
          res += '<div><span>撰写日期：' + commentList[index].data.substring(0, 10) + '</span>';
          res += '<span id="icon-love"><img src="./img/love.png"></span></div></div><hr/>';
          // console.log(res);
        }
        comment.innerHTML = res;
        console.log(commentList);


        commentList = this.response.data;
        document.querySelector("h1").innerHTML = commentList[0].place;
        numCount = commentList.length;
        //分页
    //     page=document.querySelector("#page");
    //     prePage = document.querySelector("#pre");
    //     nextPage = document.querySelector("#next");
    //     pageCount = 5;
    //     pageNum = parseInt(numCount / pageCount);
    //     if (numCount % pageCount != 0)
    //       pageCount++;
    //     let pg = ""
    //     for (let i = 1; i < pageNum + 1; i++) {
    //       console.log(i + "页");
    //       if (i == 1) {
    //         pg+='<li class="page-item" id="'+i+'"><a href="javascript:firstPage()">'+i+'</a></li>'
    //       }else{
    //         if(i<5){
    //           pg+='<li class="page-item" id="'+i+'">'+i+'</li>';
    //         }else{
    //           pg+='<li style="display:none;" class="page-item" id="'+i+'">'+i+'</li>';
    //         }
    //       }
    //     }
    //     page.innerHTML=pg;
    //     firstPage=document.getElementById("1")
    //     firstPage()
    //     //firstPage=document.querySelector(".1");
    //   }
    // }
      }
    }
  }
  xhr.send();
}

// function firstPage(){
//   hide();
//   currPageNum=1;
//   for(let i=1;i<pageCount+1;i++){
    
//   }
