ymaps.modules.define('Regionmap', [
    'option.Manager'
], (provide, OptionManager) => {
    class Regionmap {
        construcotor(data, options) {
            this._data = data;
            this.options = new OptionManager(options);
        }

        setMap(map) {
            this._map = map;
        }
    }

    provide(Regionmap);
});
