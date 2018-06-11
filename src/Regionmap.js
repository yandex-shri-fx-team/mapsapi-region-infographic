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
     * @param {Object} [options] Options for customization. See more options in {@link https://github.com/yandex-shri-fx-team/ymaps-polygonmap#readme|Polygonmap}.
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
            const options = this.options.getAll();
            const polygonmap = new Polygonmap({polygons: data, points: this._data}, options);

            polygonmap.setMap(this.getMap());
        }
    }

    provide(Regionmap);
});
