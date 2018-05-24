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

<a name="module_Regionmap"></a>

## Regionmap
Regionmap module.

**Requires**: <code>module:option.Manager</code>, <code>module:Polygonmap</code>

* [Regionmap](#module_Regionmap)
    * [Regionmap](#exp_module_Regionmap--Regionmap) ⏏
        * [new Regionmap([data], [options])](#new_module_Regionmap--Regionmap_new)
        * [.setMap(map)](#module_Regionmap--Regionmap+setMap) ⇒ <code>Regionmap</code>
        * [.getMap()](#module_Regionmap--Regionmap+getMap) ⇒ <code>Map</code>

<a name="exp_module_Regionmap--Regionmap"></a>

### Regionmap ⏏
**Kind**: Exported class
<a name="new_module_Regionmap--Regionmap_new"></a>

#### new Regionmap([data], [options])

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Points, GeoJSON FeatureCollections. |
| [options] | <code>Object</code> | Options for customization. |
| options.colorRanges | <code>number</code> \| <code>array</code> | count of ranges or array of custom ranges |
| options.colorScheme | <code>string</code> \| <code>array</code> | preset for colorize or array of custom colors |
| options.colorOpacity | <code>number</code> | opacity of polygon |
| options.colorEmptyPolygon | <code>string</code> | color of polygon where points count equal 0 |
| options.strokeColor | <code>string</code> | color for polygon stroke |
| options.strokeWidth | <code>number</code> | width for polygon stroke |
| options.showLegend | <code>boolean</code> | flag to show color legend |
| options.legendTemplate | <code>function</code> | receives object {color: value} returns html legend template |
| options.legendPosition | <code>object</code> | position of legend, you can only change the top or bottom and right or left |
| options.regionOptions | <code>object</code> | Options for Yandex.Maps API Regions. |

<a name="module_Regionmap--Regionmap+setMap"></a>

#### regionmap.setMap(map) ⇒ <code>Regionmap</code>
Set Map instance to render Polygonmap object.

**Kind**: instance method of [<code>Regionmap</code>](#exp_module_Regionmap--Regionmap)
**Returns**: <code>Regionmap</code> - Self-reference.
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Map</code> | Map instance. |

<a name="module_Regionmap--Regionmap+getMap"></a>

#### regionmap.getMap() ⇒ <code>Map</code>
Get the Map instance.

**Kind**: instance method of [<code>Regionmap</code>](#exp_module_Regionmap--Regionmap)
**Returns**: <code>Map</code> - Reference to Map instance.
**Access**: public

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
