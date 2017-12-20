ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [55.71901779, 37.74889705],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([55.71933270, 37.75074241], {
          balloonContentHeader: '<img class="map_logo" src="../img/logo_for_map.png" alt="logo">',
          balloonContentBody: 'Москва, Стахановская, 20',
          balloonContentFooter:'',
          hintContent: 'НТППК ПЛАЗВАК',
        });

        myMap.geoObjects.add(myPlacemark);
    }
