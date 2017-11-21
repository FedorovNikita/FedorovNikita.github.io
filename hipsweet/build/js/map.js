ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.16190806952962,61.43134449999996],
        zoom: 16,
        controls : []
    });
    myPlacemark = new ymaps.Placemark(
        [55.16190806952962,61.43134449999996],
        {
            hintContent: 'Hipsweet!',
            balloonContent: 'г. Челябинск, проспект Ленина, 26 оф 166'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-10, -65]

        });
    myMap.behaviors
        .disable(['scrollZoom']);

    myMap.geoObjects.add(myPlacemark);


}