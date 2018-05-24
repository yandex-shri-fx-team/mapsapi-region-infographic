# Yandex Maps API Regionmap Module

Yandex.Maps API module for data visualization.

**Regionmap** is a graphical representation of some spatial data, where depending on the number of entered points regions are painted in different colors.
`Regionmap` class allows to construct and display such representations over geographical maps.

## Loading

1. Put module source code ([regionmap.min.js](https://github.com/yandex-shri-fx-team/ymaps-regionmap/blob/master/umd/regionmap.min.js)) on your CDN.

2. Load both [Yandex Maps JS API 2.1](http://api.yandex.com/maps/doc/jsapi/) and module source code by adding following code into &lt;head&gt; section of your page:

   ```html
   <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
   <!-- Change my.cdn.tld to your CDN host name -->
   <script src="http://my.cdn.tld/regionmap.min.js" type="text/javascript"></script>
   ```

   If you use [GeoJSON](http://geojson.org) data:

   ```html
   <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU&coordOrder=longlat" type="text/javascript"></script>
   <!-- Change my.cdn.tld to your CDN host name -->
   <script src="http://my.cdn.tld/regionmap.min.js" type="text/javascript"></script>
   ```

   If you use [npm](https://www.npmjs.com):

   ```html
   <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
   ```

   ```bash
   npm i --save git+https://github.com/yandex-shri-fx-team/ymaps-regionmap.git
   ```

   ```js
   require('ymaps-regionmap');

   // Or with babel
   import 'ymaps-regionmap';
   ```

3. Get access to module functions by using [ymaps.modules.require](http://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/modules.require.xml) method:

   ```js
   ymaps.modules.require(['Regionmap'], function (Regionmap) {
        var regionmap = new Regionmap();
   });
   ```

{{>main}}

## Examples

### Displaying regionmap over geographical map

```js
ymaps.modules.require(['Regionmap'], function (Regionmap) {
    const dataPoints = {
            type: 'FeatureCollection',
            features: [{
                id: 'id1',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [37.782551, -122.445368]
                }
            }, {
                id: 'id2',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [37.782745, -122.444586]
                }
            }]
        };
    const regionmap = new Regionmap(dataPoints);

    regionmap.setMap(myMap);
});
```

## Demo

- https://yandex-shri-fx-team.github.io/ymaps-regionmap
