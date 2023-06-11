const progressDone = document.querySelectorAll('#progress-done');
progressDone.forEach(progress => {
  progress.style.width = progress.getAttribute('data-done') + '%';
});

let spot= getMsg();
spot=spot.substring(6,spot.length-5);
console.log(spot);

let map = new BMap.Map(document.getElementById('mapShow'));
map.centerAndZoom(spot,15);
map.enableScrollWheelZoom(true);
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());  // 添加比例尺控件
map.addControl(new BMap.MapTypeControl());

let opts = {
  width: 250,     // 信息窗口宽度
  height: 100,    // 信息窗口高度
  title: spot  // 信息窗口标题
}
let infoWindow = new BMap.InfoWindow(null, opts);  // 创建信息窗口对象
addEventListener("click", function(){          
  map.openInfoWindow(infoWindow, point); //开启信息窗口
}); 
