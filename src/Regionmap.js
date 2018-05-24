import 'ymaps-polygonmap';

/**
 * Regionmap module.
 *
 * @module Regionmap
 * @requires option.Manager
 * @requires Polygonmap
 */
ymaps.modules.define('Regionmap', [
    'option.Manager',
    'Polygonmap'
], (provide, OptionManager, Polygonmap) => {
    /**
     * @param {Object} [data] Points, GeoJSON FeatureCollections.
     * @param {Object} [options] Options for customization.
     * @param {number|array} options.colorRanges count of ranges or array of custom ranges
     * @param {string|array} options.colorScheme preset for colorize or array of custom colors
     * @param {number} options.colorOpacity opacity of polygon
     * @param {string} options.colorEmptyPolygon color of polygon where points count equal 0
     * @param {string} options.strokeColor color for polygon stroke
     * @param {number} options.strokeWidth width for polygon stroke
     * @param {boolean} options.showLegend flag to show color legend
     * @param {function} options.legendTemplate receives object {color: value} returns html legend template
     * @param {object} options.legendPosition position of legend,
     * you can only change the top or bottom and right or left
     * @param {object} options.regionOptions Options for Yandex.Maps API Regions.
     * @alias module:Regionmap
     */
    class Regionmap {
        constructor(data, options) {
            this._data = data;
            this.options = new OptionManager(options);

            this._prepare(this.options.get('regionOptions'));
        }

        /**
         * Set Map instance to render Polygonmap object.
         *
         * @public
         * @param {Map} map Map instance.
         * @returns {Regionmap} Self-reference.
         */
        setMap(map) {
            this._map = map;

            return this;
        }

        /**
         * Get the Map instance.
         *
         * @public
         * @returns {Map} Reference to Map instance.
         */
        getMap() {
            return this._map;
        }

        /**
         * Render Polygonmap.
         *
         * @param {Object} [params] Options for Yandex.Maps API Regions.
         * @returns {Promise} Promise of get polygons data.
         * @private
         */
        _prepare(params) {
            return ymaps.borders.load(params.region, params)
                .then((data) => this._render(data), this);
        }

        /**
         * Render Polygonmap.
         *
         * @param {Object} [data] Polygons, GeoJSON FeatureCollections.
         * @private
         */
        _render(data) {
            const polygonmap = new Polygonmap({polygons: data, points: this._data});

            polygonmap.setMap(this.getMap());
        }
    }

    provide(Regionmap);
});
