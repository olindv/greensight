export default function Maps() {
  ymaps.ready(init);
  function init() {
    var myMap1 = new ymaps.Map("map1", {
      center: [55.76, 37.64],
      zoom: 10
    });
    var myMap2 = new ymaps.Map("map2", {
      center: [55.76, 37.64],
      zoom: 9
    });

    myMap1.controls.remove("geolocationControl");
    myMap1.controls.remove("searchControl");
    myMap1.controls.remove("trafficControl");
    myMap1.controls.remove("typeSelector");
    myMap1.controls.remove("fullscreenControl");
    myMap1.controls.remove("rulerControl");
    myMap2.controls.remove("geolocationControl");
    myMap2.controls.remove("searchControl");
    myMap2.controls.remove("trafficControl");
    myMap2.controls.remove("typeSelector");
    myMap2.controls.remove("fullscreenControl");
    myMap2.controls.remove("rulerControl");
    myMap2.behaviors.disable("multiTouch");
    myMap2.behaviors.disable("drag");

    var coords = [[55.801131, 37.508167], [55.757556, 37.651592]];

    for (var i = 0; i < coords.length; i++) {
      var myPlacemark = new ymaps.Placemark(
        coords[i],
        {
          hintContent: "",
          balloonContent: ""
        },
        {
          iconLayout: "default#image",
          iconImageHref: "https://imageshost.ru/images/2019/08/21/point.png",
          iconImageSize: [32, 44],
          iconImageOffset: [-24, -24]
        }
      );
      myMap1.geoObjects.add(myPlacemark);
    }
    for (var i = 0; i < coords.length; i++) {
      var myPlacemark = new ymaps.Placemark(
        coords[i],
        {
          hintContent: "",
          balloonContent: ""
        },
        {
          iconLayout: "default#image",
          iconImageHref: "https://imageshost.ru/images/2019/08/21/point.png",
          iconImageSize: [32, 44],
          iconImageOffset: [-24, -24]
        }
      );
      myMap2.geoObjects.add(myPlacemark);
    }
  }
}
