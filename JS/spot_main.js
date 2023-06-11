const btn=document.querySelector("button");

btn.onclick=function() {
  let content=document.querySelector("input").value;
  console.log(content);
  let page="./spot_search.html?search="+content+"&id=1";
  console.log(page)
  window.location.href=encodeURI(page);
}