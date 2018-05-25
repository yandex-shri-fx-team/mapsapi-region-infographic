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
     * @param {Object} [options] Options for customization.
     * @param {function} options.mapper Function of iterative transformation of features.
     * @param {string} [options.colorBy=points] Calculate the color by points | weight.
     * @param {string} [options.colorByWeightProp=weight] Prop name in data object, for weight value.
     * If colorBy is "weight".
     * @param {string} [options.colorByWeightType=middle] Type of calculate color by weight. Can be middle | maximum
     * @param {number|array} [options.colorRanges=3] Count of ranges or array of custom ranges.
     * @param {string|array} [options.colorScheme=[rgb(255, 90, 76), rgb(224, 194, 91), rgb(108, 206, 92)]]
     * Preset for colorize or array of custom colors.
     * @param {number} [options.colorOpacity=1] Opacity of polygon.
     * @param {string} [options.colorEmptyPolygon=rgba(255, 255, 255, 0)] Color of polygon where points count equal 0.
     * @param {string} [options.strokeColor=#fff] Color of polygon stroke.
     * @param {number} [options.strokeWidth=2] Width of polygon stroke.
     * @param {boolean} [options.showLegend=true] Flag to show color legend.
     * @param {function} options.legendTemplate Receives object {color: value} returns html legend template.
     * @param {object} [options.legendPosition=top: 10, right: 10] Position of legend,
     * you can only change the top or bottom and right or left.
     * @param {function} [options.filter=undefined] Function for custom filter polygons with points.
     * @param {boolean} [options.filterEmptyPolygons=false] Flag for show polygon with count of points equal 0.
     * @param {function} options.onMouseEnter Handler for mouseEnter event.
     * @param {function} options.onMouseLeave Handler for mouseLeave event.
     * @param {function} options.onClick Handler for click event.
     * @param {function} options.balloonContent Function for render content of baloon. Recieves object with
     * properties of polygon.
     * @param {number} [options.opacityHover=0.9] Number of opacity on polygon hover.
     * @param {number} [options.strokeWidthHover=2] Number of stroke width on polygon hover.
     * @param {number} [options.opacityActive=1] Number of opacity on polygon active.
     * @param {number} [options.strokeWidthActive=3] Number of stroke width on polygon active.
     * @param {boolean} [options.interactivity=true] Flag for enable interactivity.
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
