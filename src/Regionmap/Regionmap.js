import 'mapsapi-polygonmap/src/Polygonmap/Polygonmap';

ymaps.modules.define('Regionmap', [
    'option.Manager',
    'Polygonmap'
], (provide, OptionManager, Polygonmap) => {
    class Regionmap {
        constructor(data, options) {
            this._data = data;
            this.options = new OptionManager(options);

            this._prepare(this.options.get('regionOptions'));
        }

        setMap(map) {
            this._map = map;
        }

        getMap() {
            return this._map;
        }

        _prepare(params) {
            return ymaps.borders.load(params.region, params)
                .then((data) => this._render(data), this);
        }

        _render(data) {
            const polygonmap = new Polygonmap({polygons: data, points: this._data});
            polygonmap.setMap(this.getMap());
        }
    }

    provide(Regionmap);
});
