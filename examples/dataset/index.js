import '../../src/Regionmap';
import data from '../data/data-20180330T1717.json';

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map', {
        center: [60, 100],
        zoom: 3,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    }, {
        typeSelectorSize: 'small',
        zoomControl: 'small'
    });

    const features = data.map((item, i) => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: item.data.general.address.mapPosition.coordinates.reverse()
            },
            properties: {}
        };
    });

    const collection = {
        type: 'FeatureCollection',
        features
    };

    ymaps.modules.require(['Regionmap'], (Regionmap) => {
        const regionmap = new Regionmap(collection, {
            regionOptions: {
                region: 'RU'
            }
        });

        regionmap.setMap(myMap);
    });
});
