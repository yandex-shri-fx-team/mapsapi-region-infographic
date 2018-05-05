import identity from './utils/identity';

ymaps.modules.define('Regionmap', [
    'option.Manager',
    'Monitor',
    'Layer'
], (provide, OptionManager) => {
    class Regionmap {
        construcotor(data, options) {
            this._data = data.map(identity);
            this.options = new OptionManager(options);
        }

        setMap(map) {
            this._map = map;
        }
    }

    provide(Regionmap);
});
