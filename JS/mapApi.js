const progressDone = document.querySelectorAll('#progress-done');
progressDone.forEach(progress => {
  progress.style.width = progress.getAttribute('data-done') + '%';
});

markLocation('北京市海淀区苏州街');

function markLocation(addrss) {
  AMap.plugin('AMap.Geocoder', function () {
    let geocoder = new AMap.Geocoder();
    geocoder.getLocation(addrss, function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        let lng = result.geocodes[0].location.lng;
        let lat = result.geocodes[0].location.lat;

        let map = new AMap.Map('mapShow', {
          resizeEnable: true,
          zoom: 12,
          center:[lng,lat]
        });

        let marker=new AMap.Marker({
          map:map,
          position:new AMap.LngLat(lng,lat),
        });
      }else{
        console.log('定位失败！');
      }
    })
  })
}
